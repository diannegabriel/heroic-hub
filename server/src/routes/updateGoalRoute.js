const GoalsModel = require("../models/Goals");

module.exports = async (req, res) => {
  const { id } = req.param;
  const goal = await GoalsModel.findById(id);
  res.json(goal);
};
