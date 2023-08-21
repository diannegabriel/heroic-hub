import React from "react";
import { useQueryClient, useMutation } from "react-query";
import updateGoalRequest from "../api/updateGoalRequest";

const GoalItem = ({ goal }) => {
  const queryClient = new useQueryClient();

  const { mutate: toggleStatusChange } = useMutation(() => {

    return updateGoalRequest({ ...goal, status: 
      goal.status === "complete" ? "incomplete"
      : goal.status === "incomplete" ? "in progress"
      : goal.status === "in progress" ? "complete" : ""
    });
  });

  let statusIcon = "";
  if (goal.status === "complete") {
    statusIcon = <i className="nes-icon star"></i>;
  } else if (goal.status === "incomplete") {
    statusIcon = <i className="nes-icon star is-empty"></i>;
  } else if (goal.status === "in progress") {
    statusIcon = <i className="nes-icon star is-half"></i>;
  }
  return (
    <div>
      <button onClick={toggleStatusChange}>{statusIcon}</button>
      {goal.goal}
      {goal.description}
      {goal.type}
      {goal.attribute}
      {goal.status}
    </div>
  );
};

export default GoalItem;
