import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunCard from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0);

  let myObj={
    username:"hiren",
    age:21
  }
  let newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Talwind test</h1>
      <FunCard username="hiren parmar" btnText="click me"/>
      <FunCard username="Vivek Rathod" />
    </>
  )
}

export default App
