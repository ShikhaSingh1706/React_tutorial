import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter=0
  const addValue=()=>{
   // console.log("value added")
  counter=counter+1
  console.log(counter)

  }

  return (
    <>
     <h1>Shikha Singh</h1>
     <h2>Counter Value: {counter}</h2>
     <button
      onClick={addValue}>
        Add value</button>
     <br/><br/>
     <button>Remove value</button>
    </>
  )
}

export default App
