const GoalsModel = require("../models/Goals");

module.exports = async (req, res) => {
  const { text } = req.body;
  console.log(text);
  const goals = new GoalsModel({
    text,
  })
  const newGoal = await goals.save();
  res.json(newGoal)
};
