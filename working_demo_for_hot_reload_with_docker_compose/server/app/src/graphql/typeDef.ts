import { userQueries, userTypes } from "../users/graphql/userTypeDefs.js";

export const typeDefs = `#graphql

  ${userTypes}

  type Query{

  ${userQueries}

  }
   `;
