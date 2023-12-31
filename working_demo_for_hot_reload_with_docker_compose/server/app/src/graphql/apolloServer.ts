import express from "express";
import { typeDefs } from "./typeDef.js";
import { resolvers } from "./resolvers.js";
import http from "http";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
// import apolloLogger from "./logger/apolloLogger";
import { ApolloServer } from "@apollo/server";
import apolloLogger from "./apolloLogger.js";

const app = express();

const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer }), apolloLogger],
});

export default server;
