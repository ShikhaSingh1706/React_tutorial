import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'; // Make sure this is at the top of your file
import Card from './components/Card.jsx'

function App() {
  const [count, setcount]=useState(0)
  let myObj={
    username:"Monkey",
    price:45
  }
  let newarr=[1,2,3]
  
  return (
    <>
     
      
<h1 className='bg-green-400 text-white p-4'>Tailwind css</h1>
<br></br>
<Card username="Monkey" price="345"/>{/*   bring card from components */}
<Card username="Mokneini" />  {/*bring card from components*/}




    
    </>
  )
}

export default App
