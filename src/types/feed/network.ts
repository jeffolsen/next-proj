import { FeedCollectionType, FeedSubjectType, FeedType } from "./model";

export type FeedInclude = "tags" | "components" | "links";

// by-path endpoint
export type FeedByPathQueryParams = {
  path: string;
  subjectType: FeedSubjectType;
  liveOnly?: boolean;
  includes?: FeedInclude[];
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
  tags?: string[];
  includes?: FeedInclude[];
  page?: number;
  pageSize?: number;
  liveOnly?: boolean;
};
export type FeedsResponseType = { feeds: FeedCollectionType };
