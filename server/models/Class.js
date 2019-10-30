const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Class = new Schema({
  subjectId: { type: ObjectId, required: true },
  teacherId: { type: ObjectId, required: true },
  time: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("class", Class);
