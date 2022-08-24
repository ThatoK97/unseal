import express from "express";
import { graphqlHTTP } from "express-graphql";
import dotenv from "dotenv";
import cors from "cors";
import Schema from "./schema/schema.js";
import connectDB  from "./config/db.js";

const app = express();
dotenv.config();
const port = process.env.PORT ?? 8081;

// connect to db
connectDB();

app.use(cors());

app.use("/", graphqlHTTP({
    schema: Schema,
    graphiql: process.env.NODE_ENV === "development" ?? true
}));

app.listen(port, () => console.log(`Listening server on port ${port}.`));