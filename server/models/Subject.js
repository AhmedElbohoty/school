const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Subject = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("subject", Subject);
