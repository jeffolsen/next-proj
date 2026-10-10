// model
export type FeedSubjectType = "SINGLE" | "COLLECTION";
export type FeedSchemaType =
  | "WebPage"
  | "Person"
  | "Article"
  | "CreativeWork"
  | null;
export type FeedType = {
  id: number;
  path: string;
  subjectType: FeedSubjectType;
  publishedAt: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  seoImage: string | null;
  schemaType: FeedSchemaType;
  expiredAt: string | null;
  createdAt: string;
  updatedAt: string;
};
export type FeedCollectionType = FeedType[];
