import { userQueries } from "../users/graphql/userQueries.js";
export const resolvers = {
  Query: {
    ...userQueries,
  },
};
