const GoalsModel = require("../models/Goals");

module.exports = async (req, res) => {
  const goals = await GoalsModel.find();
  res.json(goals);
};
