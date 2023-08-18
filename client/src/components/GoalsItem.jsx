import React from "react";

const GoalsItem = ({goal}) => {
  return (
    <div>
      {goal.goal}
      {goal.description}
      {goal.type}
      {goal.attribute}
      {goal.status}
    </div>
  );
};

export default GoalsItem;
