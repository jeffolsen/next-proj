import { getItems } from "@/api/item/fetcher";
import Code from "@/components/common/Code";
import { JSONValue } from "@/types/JSONValue";

async function ItemCollectionCode() {
  const items: JSONValue = await getItems({
    includes: ["tags"],
  });
  return <Code input={items} />;
}

export default ItemCollectionCode;
