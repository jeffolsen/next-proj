import { getFeeds } from "@/api/feed/fetcher";
import Code from "@/components/common/Code";
import { JSONValue } from "@/types/JSONValue";

async function FeedCollectionCode() {
  const feeds: JSONValue = await getFeeds({
    includes: ["tags", "components"],
    tags: ["ART"],
  });
  return <Code input={feeds} />;
}

export default FeedCollectionCode;
