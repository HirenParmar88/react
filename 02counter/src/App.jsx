import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //hooks use
  const [counter,setCounter] = useState(5)
  
  //let counter=15

  const addValue=()=>{
    //console.log("Value added", counter);
    //counter = counter + 1
    if(counter <10){
      setCounter(counter + 1)
    }
    //setCounter(counter + 1)
    //console.log("Value added", counter);
  }

  const removeValue=()=>{
    if(counter >0){
      setCounter(counter - 1)
    }
    //setCounter(counter - 1)
  }

  return (
    <>
      <h1>GLS University !</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value{}</button>
      <br /><br />
      <button onClick={removeValue}>Remove Value{}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
