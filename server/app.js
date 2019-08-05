const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

mongoose.connect("mongodb://amolchopra:Randyorton%401234@ds259367.mlab.com:59367/graphql-database");
mongoose.connection.once("open", () => {
    console.log("Connected to database");
})

const app = express();
app.use(cors());

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, ()=>console.log("Server started at port 4000"));