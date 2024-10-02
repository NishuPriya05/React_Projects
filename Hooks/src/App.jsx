import { useState } from 'react'
import './App.css'

function App() {
  
  let [Counter, setCounter] = useState(5)

  function addValue () {
    if (Counter === 20) {
      return 'Stop'
    } else {
      setCounter(Counter + 1)
    }
    
  }

  function removeValue (){
    if (Counter === 0) {
      return 'Stop'
    } else {
      setCounter(Counter - 1)
    }
  }

 // let Counter = 5
  return (
    <>
        <h1>Counter</h1>
        <h3>Counter Value : {Counter}</h3>
        <button onClick={addValue}>Add Value {Counter}</button>
        <br />
        <br />
        <button onClick={removeValue}>Remove Value {Counter}</button>
        <p>footer : {Counter}</p>
    </>
  )
}

export default App
