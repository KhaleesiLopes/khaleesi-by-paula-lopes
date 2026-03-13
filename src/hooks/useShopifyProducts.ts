import { useQuery } from '@tanstack/react-query';
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, STOREFRONT_PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from '@/lib/shopify';

export function useShopifyProducts(first = 50, searchQuery?: string) {
  return useQuery({
    queryKey: ['shopify-products', first, searchQuery],
    queryFn: async () => {
      const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, {
        first,
        query: searchQuery || null,
      });
      return (data?.data?.products?.edges || []) as ShopifyProduct[];
    },
    networkMode: 'always',
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
    staleTime: 5 * 60 * 1000,
  });
}

export function useShopifyProductByHandle(handle: string) {
  return useQuery({
    queryKey: ['shopify-product', handle],
    queryFn: async () => {
      const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
      const product = data?.data?.productByHandle;
      if (!product) return null;
      // Wrap in ShopifyProduct format
      return { node: product } as ShopifyProduct;
    },
    networkMode: 'always',
    enabled: !!handle,
  });
}
