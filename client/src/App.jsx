import { useState, useEffect } from 'react'
import './App.css'
import readGoalsRequest from './api/readGoalsRequest'

function App() {
  const [goals, setGoals] = useState([]);
  
  useEffect(() => {
    readGoalsRequest().then(allGoals => {
      console.log(allGoals)
    })
  }, [])

  return (
    <div>

    </div>
  )
}

export default App
