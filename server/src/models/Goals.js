const mongoose = require("mongoose");

const GoalsSchema = new mongoose.Schema({
  userOwner: { type: String, required: true },
  goalName: { type: String, required: true },
  goalType: { type: String, required: true },
  goalDescription: { type: String },
  goalAttribute: { type: [String], required: true },
  status: { type: String, required: true },
  // text: {
  //   type: String,
  // },
  // completed: {
  //   type: Boolean,
  // }
});

const GoalsModel = mongoose.model("goals", GoalsSchema);

module.exports = GoalsModel;
