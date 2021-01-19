import gql from "graphql-tag";

export const GET_USERS = gql`
  query SearchUsers($query: String!, $first: Int!) {
    search(query: $query, type: USER, first: $first) {
      edges {
        node {
          ... on User {
            id
            login
            email
            name
            bio
            websiteUrl
            avatarUrl
          }
        }
      }
    }
  }
`;
