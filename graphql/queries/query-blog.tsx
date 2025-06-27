import { gql } from '@apollo/client';

export const BLOG_QUERY = gql`
query GetBlogPosts {
  posts {
    nodes {
      title
      content
    }
  }
}`

export interface Post {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number; // can be used to fetch image
}
