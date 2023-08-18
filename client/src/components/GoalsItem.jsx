import React from "react";

const GoalsItem = ({ goal }) => {
  return (
    <div>
      <button onClick={handleStatusChange}>
        <i class="nes-icon is-large star is-empty" />
      </button>
      {goal.goal}
      {goal.description}
      {goal.type}
      {goal.attribute}
      {goal.status}
    </div>
  );
};

export default GoalsItem;
