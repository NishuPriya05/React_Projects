import { useState } from "react"
import './index.css'



function App() {

  const [color, setColor] = useState('olive')
  return (
    <div className="root" style={{backgroundColor: color}} >
    <div className="container">
      <button onClick={() => setColor("grey")} className="button" style={{backgroundColor: "grey"}}>Grey</button>

      <button onClick={() => setColor("blue")} className="button" style={{backgroundColor: "blue"}}>Dark Blue</button>

      <button onClick={() => setColor("green")} className="button" style={{backgroundColor: "green"}}>Green</button>

      <button onClick={() => setColor("red")} className="button" style={{backgroundColor: "red"}}>Red</button>

      <button onClick={() => setColor("black")} className="button" style={{backgroundColor: "black"}}>Black</button>
      </div>
    </div>
  )
}

export default App
