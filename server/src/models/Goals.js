const mongoose = require("mongoose");

const GoalsSchema = new mongoose.Schema({
  owner: { type: String, required: true },
  goal: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String },
  attribute: { type: [String], required: true },
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
