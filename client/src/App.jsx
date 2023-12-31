// import { useState, useEffect } from "react";
import "./App.css";
import readGoalsRequest from "./api/readGoalsRequest";
import { useQuery } from "react-query";
import ClipLoader from "react-spinners/ClipLoader"
import GoalItem from "./components/GoalItem";

function App() {
  // const [goals, setGoals] = useState([]);

  /* 
  React Query helps keep track of states like how useState and useEffect are doing.
  This avoids extra steps when implementing loading spinners.
  */
  const { isLoading, data: goals } = useQuery("goals", readGoalsRequest);

  // useEffect(() => {
  //   readGoalsRequest().then(setGoals);
  // }, []);

  return (
    <div className="App">
      {isLoading ? (
        <ClipLoader size={150}/>
      ) : (
        goals.map((goal) => (
          <GoalItem goal={goal} key={goal._id} />
        ))
      )}
    </div>
  );
}

export default App;
