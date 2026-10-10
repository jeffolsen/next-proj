import { getFeeds } from "@/api/feed/fetcher";
import Code from "@/components/common/Code";
import { JSONValue } from "@/types/JSONValue";

async function FeedCollectionCode() {
  const feeds: JSONValue = await getFeeds();
  return <Code input={feeds} />;
}

export default FeedCollectionCode;
