const GoalsModel = require("../models/Goals");

module.exports = async (req, res) => {
  const { userOwner, goalName, goalType, goalDescription, goalAttribute } = req.body;
  // console.log(text);
  const goals = new GoalsModel({
    userOwner,
    goalName,
    goalType,
    goalDescription,
    goalAttribute,
    // text,
    // completed: false,
  })
  const newGoal = await goals.save();
  res.json(newGoal)
};
