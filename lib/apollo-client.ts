// lib/apollo-client.ts
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL}),
  cache: new InMemoryCache(),
});

export default client;