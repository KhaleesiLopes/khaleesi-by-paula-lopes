import { useQuery } from '@tanstack/react-query';
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, STOREFRONT_PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from '@/lib/shopify';

const CACHE_KEY = 'khaleesi-products-cache';
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

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
    // Return cache even if stale — it's a fallback
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
  const cacheId = `${first}-${searchQuery || ''}`;
  const cached = getCachedProducts(cacheId);

  return useQuery({
    queryKey: ['shopify-products', first, searchQuery],
    queryFn: async () => {
      const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, {
        first,
        query: searchQuery || null,
      });
      const products = (data?.data?.products?.edges || []) as ShopifyProduct[];
      if (products.length > 0) {
        setCachedProducts(cacheId, products);
      }
      return products;
    },
    networkMode: 'always',
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
    staleTime: 5 * 60 * 1000,
    placeholderData: cached,
  });
}

export function useShopifyProductByHandle(handle: string) {
  return useQuery({
    queryKey: ['shopify-product', handle],
    queryFn: async () => {
      const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
      const product = data?.data?.productByHandle;
      if (!product) return null;
      return { node: product } as ShopifyProduct;
    },
    networkMode: 'always',
    enabled: !!handle,
  });
}
