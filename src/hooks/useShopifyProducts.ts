import { useQuery } from '@tanstack/react-query';
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, STOREFRONT_PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from '@/lib/shopify';
import { useCurrency } from '@/contexts/CurrencyContext';

const CACHE_KEY = 'khaleesi-products-cache';

interface CachedProducts {
  products: ShopifyProduct[];
  timestamp: number;
  queryKey: string;
}

function getCachedProducts(queryKey: string): ShopifyProduct[] | undefined {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return undefined;
    const cached: CachedProducts = JSON.parse(raw);
    if (cached.queryKey !== queryKey) return undefined;
    return cached.products;
  } catch {
    return undefined;
  }
}

function setCachedProducts(queryKey: string, products: ShopifyProduct[]) {
  try {
    const entry: CachedProducts = { products, timestamp: Date.now(), queryKey };
    localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    // localStorage full or unavailable — ignore
  }
}

export function useShopifyProducts(first = 50, searchQuery?: string) {
  const { country } = useCurrency();
  const cacheId = `${first}-${searchQuery || ''}-${country}`;
  const cached = getCachedProducts(cacheId);

  return useQuery({
    queryKey: ['shopify-products', first, searchQuery, country],
    queryFn: async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, {
          first,
          query: searchQuery || null,
          country,
        });
        const products = (data?.data?.products?.edges || []) as ShopifyProduct[];
        if (products.length > 0) {
          setCachedProducts(cacheId, products);
        }
        return products;
      } catch (error) {
        const fallback = getCachedProducts(cacheId);
        if (fallback && fallback.length > 0) {
          console.warn('Shopify fetch failed, using cached products:', error);
          return fallback;
        }
        throw error;
      }
    },
    networkMode: 'always',
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 5000),
    staleTime: 5 * 60 * 1000,
    placeholderData: cached,
  });
}

export function useShopifyProductByHandle(handle: string) {
  const { country } = useCurrency();
  return useQuery({
    queryKey: ['shopify-product', handle, country],
    queryFn: async () => {
      const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle, country });
      const product = data?.data?.productByHandle;
      if (!product) return null;
      return { node: product } as ShopifyProduct;
    },
    networkMode: 'always',
    enabled: !!handle,
  });
}
