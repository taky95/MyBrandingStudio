import { cache } from "react";
import client from '@/lib/apollo-client';
import { GET_SERVICES } from "../../graphql/queries/query-service";

export const getServices = cache(async () => {
  try {
    const res = await client.query({
      query: GET_SERVICES,
      fetchPolicy: "network-only", // Ensures fresh fetch but still cacheable by Next.js
    });

    return res.data;
  } catch (error) {
    console.error("WordPress fetch failed:", error);
    return null;
  }
});