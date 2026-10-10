import baseFetcher from "@/api/fetcher";
import {
  FeedsResponseType,
  FeedByPathResponseType,
  FeedByPathQueryParams,
  FeedCollectionParams,
} from "@/types/feed/network";

// const FEED_INCLUDES = "tags,components,links";
// const FEED_QUERY_PARAMS = {};

const getFeeds = async (
  params?: FeedCollectionParams,
): Promise<FeedsResponseType> => {
  return baseFetcher<FeedsResponseType>({
    endpoint: "feeds",
    options: {
      method: "GET",
      next: { revalidate: 3000 },
    },
    params,
  });
};

const getFeedByPath = async (
  params: FeedByPathQueryParams,
): Promise<FeedByPathResponseType> => {
  return baseFetcher<FeedByPathResponseType>({
    endpoint: "feed/by-path",
    options: {
      method: "GET",
      next: { revalidate: 3000 },
    },
    params,
  });
};

export { getFeeds, getFeedByPath };
