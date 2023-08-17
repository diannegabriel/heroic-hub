const GoalsModel = require("../models/Goals");

module.exports = async (req, res) => {
  const {
    owner,
    goal,
    type,
    description,
    attribute,
  } = req.body;
  const goals = new GoalsModel({
    owner,
    goal,
    type,
    description,
    attribute,
    status: "incomplete"
    // text,
    // completed: false,
  });
  const newGoal = await goals.save();
  res.json(newGoal);
};
