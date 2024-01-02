var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import server from "./graphql/apolloServer.js";
// import morganLogger from "./logger/morgan";
const app = express();
const startApolloServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield server.start();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/graphql", cors({
        origin: ["http://localhost:5173"],
        credentials: false,
    }), expressMiddleware(server));
    app.listen(4003, () => {
        console.log(`🚀 Server rey at http://localhost:4003/graphql`);
    });
});
startApolloServer().then(() => {
    console.log("connected to ApoloServer!");
});
//# sourceMappingURL=server.js.map