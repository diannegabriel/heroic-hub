import { useState, useEffect } from 'react'
import './App.css'
import readGoalsDefault from './api/readGoalsDefault'

function App() {
  useEffect(() => {
    readTodosRequest().then(allGoals => {
      console.log(allGoals)
    })
  }, [])

  return (
    <div>

    </div>
  )
}

export default App
