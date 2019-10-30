const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Teacher = new Schema({
  name: {
    type: String,
    required: true
  },
  classes: [
    {
      subject: ObjectId,
      time: String
    }
  ],
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("teacher", Teacher);
