import { useState } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

function App() {

  // State Bottles data.
  const [bottles, setBottles] = useState([]);

  return (
    <>
      <h1>Bottles shop</h1>

      <Bottles></Bottles>
    </>
  )
}

export default App
