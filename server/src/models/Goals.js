const mongoose = require("mongoose");

const GoalsSchema = new mongoose.Schema({
  userOwner: { type: String },
  goalName: { type: String },
  goalType: { type: String },
  goalDescription: { type: String },
  goalAttribute: { type: [String] },
  // text: {
  //   type: String,
  // },
  // completed: {
  //   type: Boolean,
  // }
});

const GoalsModel = mongoose.model("goals", GoalsSchema);

module.exports = GoalsModel;
