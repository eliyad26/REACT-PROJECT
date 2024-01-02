import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query ExampleQuery {
    getUsers {
      _id
      email
      password
      name
      fname
      image
      city
      availability
    }
  }
`;
