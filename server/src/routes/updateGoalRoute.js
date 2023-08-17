const GoalsModel = require("../models/Goals");

module.exports = async (req, res) => {
  const { id } = req.params;
  const goal = await GoalsModel.findById(id);
  goal.goal = req.body.goal;
  goal.type = req.body.type;
  goal.description = req.body.description;
  goal.attribute = req.body.attribute;
  goal.status = req.body.status;
  await goal.save();
  res.json(goal);
};
