import { gql } from '@apollo/client';

export const GET_WORKS = gql`
query GetWorks {
  works{
    nodes{
      worksField{
        catTitle
        catImage{
          node{
            sourceUrl
            altText
          }
        }
        description
        image1{
          node{
            sourceUrl
            altText
            mediaDetails{
              width
              height
            } 
          }
        }
        link1
        image2{
          node{
            sourceUrl
            altText
            mediaDetails{
              width
              height
            } 
          }
        }
        link2
        image3{
          node{
            sourceUrl
            altText
            mediaDetails{
              width
              height
            } 
          }
        }
        link3
        image4{
          node{
            sourceUrl
            altText
            mediaDetails{
              width
              height
            } 
          }
        }
        link4
      }
    }
  } 
}`

export interface Works {
  worksField:{
    catTitle: string;
    catImage: {
      node: {
        sourceUrl: string;
        altText: string;
      }
    }
    description: string;
    image1: {
      node: {
        sourceUrl: string;
        altText: string;
        mediaDetails: {
          width: number;
          height: number;
        }
      }
    }
    link1: string;
    image2: {
      node: {
        sourceUrl: string;
        altText: string;
        mediaDetails: {
          width: number;
          height: number;
        }
      }
    }
    link2: string;
    image3: {
      node: {
        sourceUrl: string;
        altText: string;
        mediaDetails: {
          width: number;
          height: number;
        }
      }
    }
    link3: string;
    image4: {
      node: {
        sourceUrl: string;
        altText: string;
        mediaDetails: {
          width: number;
          height: number;
        }
      }
    }
    link4: string;
  }
}