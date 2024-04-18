import { useState, useEffect } from "react"
import PotteryContainer from "./PotteryContainer"
import PotteryForm from ".PotteryFrom"


function App() {

  const [pots, setPots] = useState([])
  useEffect(() => {
    fetch('http://localhost:30001/pottery')
    .then( res => res.json())
    .then( data => setPots(data))
  }, [])

  console.log(pots)

  return (
    <>
     
    </>
  )
}

export default App
