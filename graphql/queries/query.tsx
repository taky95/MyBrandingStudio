import { gql } from '@apollo/client';

export const WP_QUERY = gql`
query GetCustomParts {
  logos {
    nodes {
      logoField {
        image {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
  heroCards{
    nodes{
      cardField {
        title
        description
        buttonText
        image{
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
  heroImages{
    nodes{
      heroImageField{
        image{
          node{
            sourceUrl
            altText
          }
        }
      }
    }
  }
  introductions{
    nodes{
      introField{
        title
        description
      }
    }
  }
  navItems{
    nodes{
      navField{
        title
        image{
          node{
            sourceUrl
            altText
          }
        }
        link
      }
    }
  }
  steps{
    nodes{
      stepField{
        title
        description
        image{
          node{
            sourceUrl
            altText
          }
        }
        link
      }
    }
  }
  bios{
    nodes{
      bioField{
        heading
        subHeading1
        subHeading2
        description
        image{
          node{
            sourceUrl
            altText
          }
        }
      }
    }
  }
  posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
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
}
`
export interface HeroCard {
  cardField: {
    title: string;
    description: string;
    buttonText: string;
    image: {
      node:{
        sourceUrl: string;
        altText: string;
      }
    }
  }
}

export interface Step {
  stepField: {
    title: string;
    description: string;
    image: {
      node: {
        sourceUrl: string;
        altText: string;
      }
    }
    link: string;
  }
}

export interface NavItem {
  navField:{
    title: string;
    image: {
      node: {
        sourceUrl: string;
        altText: string;
      }
    };
    link: string
  }
}

export interface Resource {
  resourceField:{
    title: string;
    image: {
      node: {
        sourceUrl: string;
        altText: string;
      }
    }
    link: string;
  }
}