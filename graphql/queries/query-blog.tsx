import { gql } from '@apollo/client';

export const GET_POSTS = gql`
query GetAllPosts {
  posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
    nodes {
      title
      slug
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
}`

export const GET_RECENT_POSTS = gql`
query GetAllPosts {
  posts(first: 2, where: { orderby: { field: DATE, order: DESC } }) {
    nodes {
      title
      slug
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
}`

export const GET_POST_BYSLUG = gql`
query GetPostBySlug($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    title
    content
    date
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
  }
}`

export interface Post {
  id: number;
  date: string;
  slug: string;
  title: string; // Use string instead of { rendered: string }
  excerpt: string; // Use string instead of { rendered: string }
  content: string; // Use string instead of { rendered: string }
  featuredImage: {
      node: {
        sourceUrl: string;
        altText: string;
      }
    } // can be used to fetch image
}
