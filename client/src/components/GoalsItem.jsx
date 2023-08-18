import React from "react";
import { useQueryClient, useMutation } from "react-query";

const GoalsItem = ({ goal }) => {
  const handleStatusChange = () => {};
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
