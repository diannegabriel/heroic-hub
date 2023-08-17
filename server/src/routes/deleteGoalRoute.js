const GoalsModel = require("../models/Goals");

module.exports = async (req, res) => {
  const { id } = req.params;
  const goal = await GoalsModel.findById(id);
  await goal.deleteOne();
  res.status(204).json(goal);
};
