import { gql } from '@apollo/client';

export const GET_POSTS = gql`
query GetCustomLogos {
  logoTypes {
    nodes {
      logo {
        logoImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
}
`;