import express from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import server from "./graphql/apolloServer.js";
// import morganLogger from "./logger/morgan";
const app = express();
const startApolloServer = async () => {
  await server.start();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    "/graphql",
    cors({
      origin: ["http://localhost:5173"],
      credentials: false,
    }),
    expressMiddleware(server)
  );

  app.listen(4003, () => {
    console.log(`🚀 Server rey at http://localhost:4003/graphql`);
  });
};
startApolloServer().then(() => {
  console.log("connected to ApoloServer!");
});
