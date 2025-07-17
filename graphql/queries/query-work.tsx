import { gql } from '@apollo/client';

export const GET_WORKS = gql`
query GetWorks {
  works {
    nodes {
      worksField {
        catTitle
        catImage {
          node {
            sourceUrl
            altText
          }
        }
        description
        image1 { node { sourceUrl altText mediaDetails { width height } } }
        link1
        image2 { node { sourceUrl altText mediaDetails { width height } } }
        link2
        image3 { node { sourceUrl altText mediaDetails { width height } } }
        link3
        image4 { node { sourceUrl altText mediaDetails { width height } } }
        link4
        image5 { node { sourceUrl altText mediaDetails { width height } } }
        link5
        image6 { node { sourceUrl altText mediaDetails { width height } } }
        link6
        image7 { node { sourceUrl altText mediaDetails { width height } } }
        link7
        image8 { node { sourceUrl altText mediaDetails { width height } } }
        link8
        image9 { node { sourceUrl altText mediaDetails { width height } } }
        link9
        image10 { node { sourceUrl altText mediaDetails { width height } } }
        link10
      }
    }
  }
}
`

export interface Works {
  worksField: {
    catTitle: string;
    catImage: {
      node: {
        sourceUrl: string;
        altText: string;
      }
    };
    description: string;
    image1: { node: { sourceUrl: string; altText: string; mediaDetails: { width: number; height: number; } } };
    link1: string;
    image2: { node: { sourceUrl: string; altText: string; mediaDetails: { width: number; height: number; } } };
    link2: string;
    image3: { node: { sourceUrl: string; altText: string; mediaDetails: { width: number; height: number; } } };
    link3: string;
    image4: { node: { sourceUrl: string; altText: string; mediaDetails: { width: number; height: number; } } };
    link4: string;
    image5: { node: { sourceUrl: string; altText: string; mediaDetails: { width: number; height: number; } } };
    link5: string;
    image6: { node: { sourceUrl: string; altText: string; mediaDetails: { width: number; height: number; } } };
    link6: string;
    image7: { node: { sourceUrl: string; altText: string; mediaDetails: { width: number; height: number; } } };
    link7: string;
    image8: { node: { sourceUrl: string; altText: string; mediaDetails: { width: number; height: number; } } };
    link8: string;
    image9: { node: { sourceUrl: string; altText: string; mediaDetails: { width: number; height: number; } } };
    link9: string;
    image10: { node: { sourceUrl: string; altText: string; mediaDetails: { width: number; height: number; } } };
    link10: string;
  }
}