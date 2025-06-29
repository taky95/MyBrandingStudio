import { gql } from '@apollo/client';

export const GET_WORKS = gql`
query GetWorks {
  works{
    nodes{
      worksField{
        linkTitle
        linkImage{
          node{
            sourceUrl
            altText
          }
        }
        title
        description
        image{
          node{
            sourceUrl
            altText
            mediaDetails{
              width
              height
            } 
          }
        }
      }
    }
  } 
}`

export interface Works {
  worksField:{
    linkTitle: string;
    linkImage: {
      node: {
        sourceUrl: string;
        altText: string;
      }
    }
    title: string;
    description: string;
    image: {
      node: {
        sourceUrl: string;
        altText: string;
        mediaDetails: {
          width: number;
          height: number;
        }
      }
    }
  }
}