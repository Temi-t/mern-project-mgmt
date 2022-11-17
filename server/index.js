const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const { append } = require("express/lib/response");
const schema = require("./schema/schema.js");

const port = process.env.PORT || 5000;
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(port, console.log("Server listening on port " + port));
