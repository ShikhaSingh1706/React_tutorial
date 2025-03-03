import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

function App() {
 

  return (
    <>
      <h1> learn about rdux tookit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
