const path = require("path");
const fs = require("fs");
const { makeExecutableSchema } = require("graphql-tools");

// Import Models
const Teacher = require("./models/Teacher");
const Class = require("./models/Class");
const Subject = require("./models/Subject");

// Getting Type Defs and resolvers
const filePath = path.join(__dirname, "schema", "typedefs.graphql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./schema/resolvers");

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = req => ({
  schema,
  graphiql: true,
  context: {
    req,
    user: req.user,
    models: {
      Teacher,
      Class,
      Subject
    }
  },
  customFormatErrorFn: err => ({
    message: err.message,
    stack: err.stack ? err.stack.split("\n") : [], // To get only the first two line of stack only
    path: err.path,
    validation: err.originalError && err.originalError.validation
  })
});
