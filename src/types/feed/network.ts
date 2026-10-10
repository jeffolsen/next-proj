import { TagNameType } from "@/types/tag/model";
import {
  FeedCollectionType,
  FeedSubjectType,
  FeedType,
} from "@/types/feed/model";

export type FeedIncludes = "tags" | "components" | "links";

// by-path endpoint
export type FeedByPathQueryParams = {
  path: string;
  subjectType: FeedSubjectType;
  liveOnly?: boolean;
  includes?: FeedIncludes[];
};
export type FeedByPathResponseType = { feed: FeedType };

// collection endpoint
export type FeedCollectionSortType =
  | "createdAt"
  | "-createdAt"
  | "updatedAt"
  | "-updatedAt"
  | "publishedAt"
  | "-publishedAt"
  | "expiredAt"
  | "-expiredAt";

export type FeedCollectionParams = {
  sort?: FeedCollectionSortType;
  searchPath?: string;
  subjectTypes?: FeedSubjectType[];
  ids?: number[];
  paths?: string[];
  tags?: TagNameType[];
  includes?: FeedIncludes[];
  page?: number;
  pageSize?: number;
  liveOnly?: boolean;
};
export type FeedsResponseType = { feeds: FeedCollectionType };
