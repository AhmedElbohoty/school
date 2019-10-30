const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressGraphql = require("express-graphql");
const path = require("path");
const graphqlServerConfig = require("./graphqlServerConfig");
const { mongodbURI } = require("./config/keys");

const app = express();

mongoose
  .connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Mongodb Connected"))
  .catch(err => console.log(err));

app.use("*", cors({ origin: "http://localhost:3000", credentials: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/graphql", expressGraphql(req => graphqlServerConfig(req)));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Listening to server
app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
