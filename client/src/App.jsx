// import { useState, useEffect } from "react";
import "./App.css";
import readGoalsRequest from "./api/readGoalsRequest";
import { useQuery } from "react-query";

function App() {
  // const [goals, setGoals] = useState([]);
  const { isLoading, data: goals } = useQuery("todos", readGoalsRequest);

  // useEffect(() => {
  //   readGoalsRequest().then(setGoals);
  // }, []);

  return (
    <div className="App">
      {goals.map((goal) => (
        <div key={goal._id}>
          {goal.goal}
          {goal.description}
          {goal.type}
          {goal.attribute}
          {goal.status}
        </div>
      ))}
    </div>
  );
}

export default App;
