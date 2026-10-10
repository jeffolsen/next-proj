export const TAGS_KEY = "tags" as const;

export type TagNameType =
  | "PERSON"
  | "PLACE"
  | "THING"
  | "FOO"
  | "BAR"
  | "BAZ"
  | "COMIC BOOKS"
  | "VIDEO GAMES"
  | "TABLETOP RPGS"
  | "ART"
  | "MOVIES"
  | "MUSIC"
  | "TYPESCRIPT"
  | "REACT"
  | "NODE"
  | "EXPRESS"
  | "NEXTJS"
  | "TAILWIND"
  | "UX"
  | "COLLABORATION"
  | "DEVELOPMENT"
  | "SCRUM"
  | "GIT"
  | "FOOD";

export type TagType = {
  id: number;
  name: TagNameType;
};
