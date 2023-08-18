import React from "react";

const GoalsItem = ({ goal }) => {
  return (
    <div>
      <i class="nes-icon is-large star is-empty" />

      {goal.goal}
      {goal.description}
      {goal.type}
      {goal.attribute}
      {goal.status}
    </div>
  );
};

export default GoalsItem;
