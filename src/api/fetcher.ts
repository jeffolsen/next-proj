import { JSONObject } from "@/types/JSONValue";

const BASE_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;
const API_SLUG = process.env.API_SLUG;
const API_KEY_HEADER = "X-Api-Key" as const;
const API_SLUG_HEADER = "X-Api-Slug" as const;

interface FetcherProps {
  endpoint: string;
  options: RequestInit;
  params?: JSONObject;
}

const fetcher = async <T>({
  endpoint,
  options = {},
  params = {},
}: FetcherProps): Promise<T> => {
  if (!BASE_URL || !API_KEY || !API_SLUG)
    throw new Error("Missing API configuration environment variables.");

  const url = `${BASE_URL}/${endpoint}${stringifySearchParams(params)}`;

  const headers = {
    "Content-Type": "application/json",
    [API_KEY_HEADER]: API_KEY,
    [API_SLUG_HEADER]: API_SLUG,
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok)
    throw new Error(
      `API Fetch Error: ${response.status} ${response.statusText}`,
    );

  return response.json() as Promise<T>;
};

const stringifySearchParams = (params: JSONObject): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  });

  let queryString = searchParams.toString();

  if (queryString) {
    queryString = `?${queryString}`;
  }

  return queryString;
};

export default fetcher;
