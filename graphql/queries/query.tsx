import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    posts(where: { search: "test" }) {
      nodes {
        title
        heroSection {
          maincolor
          heroDesc
        }
      }
    }
  }
`;