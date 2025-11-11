import { cache } from "react";
import client from '@/lib/apollo-client';
import { WP_QUERY } from '../../graphql/queries/query';

export const getWpData = cache(async () => {
  try {
    const res = await client.query({
      query: WP_QUERY,
      fetchPolicy: "network-only", // Ensures fresh fetch but still cacheable by Next.js
    });

    return res.data;
  } catch (error) {
    console.error("WordPress fetch failed:", error);
    return null;
  }
});