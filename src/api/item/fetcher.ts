import baseFetcher from "@/api/fetcher";
import {
  ItemBySlugResponseType,
  ItemBySlugQueryParams,
  ItemCollectionParams,
  ItemsResponseType,
} from "@/types/item/network";

const getItems = async (
  params?: ItemCollectionParams,
): Promise<ItemsResponseType> => {
  return baseFetcher<ItemsResponseType>({
    endpoint: "items",
    options: {
      method: "GET",
      next: { revalidate: 3000 },
    },
    params,
  });
};

const getItemBySlug = async (
  slug: string,
  params?: ItemBySlugQueryParams,
): Promise<ItemBySlugResponseType> => {
  return baseFetcher<ItemBySlugResponseType>({
    endpoint: `item/by-slug/${slug}`,
    options: {
      method: "GET",
      next: { revalidate: 3000 },
    },
    params,
  });
};

export { getItems, getItemBySlug };
