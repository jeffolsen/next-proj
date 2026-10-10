import { ItemType, ItemCollectionType } from "@/types/item/model";
import { TagNameType } from "@/types/tag/model";

export type ItemIncludes = "tags" | "images" | "dateRanges";

// by-slug endpoint
export type ItemBySlugQueryParams = {
  includes?: ItemIncludes[];
};
export type ItemBySlugResponseType = { item: ItemType };

// collection endpoint
export type ItemCollectionSortType =
  | "createdAt"
  | "-createdAt"
  | "updatedAt"
  | "-updatedAt"
  | "publishedAt"
  | "-publishedAt"
  | "expiredAt"
  | "-expiredAt"
  | "sortName"
  | "-sortName";

export type ItemCollectionParams = {
  privateOnly?: boolean;
  liveOnly?: boolean;
  searchName?: string;
  sort?: ItemCollectionSortType;
  ids?: number[];
  slugs?: string[];
  tags?: TagNameType[];
  includes?: ItemIncludes[];
  page?: number;
  pageSize?: number;
};
export type ItemsResponseType = { items: ItemCollectionType };
