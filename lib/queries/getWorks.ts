import { cache } from "react";
import client from '@/lib/apollo-client';
import { GET_WORKS } from "../../graphql/queries/query-work";

export const getWorks = cache(async () => {
  try {
    const res = await client.query({
      query: GET_WORKS,
      fetchPolicy: "network-only", // Ensures fresh fetch but still cacheable by Next.js
    });

    return res.data;
  } catch (error) {
    console.error("WordPress fetch failed:", error);
    return null;
  }
});