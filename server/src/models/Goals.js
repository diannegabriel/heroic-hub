const mongoose = require("mongoose");

const GoalsSchema = new mongoose.Schema({
  userOwner: { type: String, required: true },
  goalName: { type: String, required: true },
  goalType: { type: String, required: true },
  goalDescription: { type: String, required: true },
  goalAttribute: { type: [String], required: true },
});

const GoalsModel = mongoose.model("goals", GoalsSchema);

module.exports = GoalsModel;
