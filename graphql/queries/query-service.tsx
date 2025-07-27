import { gql } from "@apollo/client";

export const GET_SERVICES = gql`
  query GetServices {
    services {
      nodes {
        serviceField {
          title
          description
        }
      }
    }
  }
`;

export interface Service {
  serviceField: {
    title: string;
    description: string;
  };
}
