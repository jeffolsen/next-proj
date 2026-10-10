import { JSONObject } from "../JSONValue";

export type ItemType = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  richContent: JSONObject;
  sortName: string;
  overrideLink: string | null;
  publishedAt: string | null;
  expiredAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ItemCollectionType = ItemType[];
