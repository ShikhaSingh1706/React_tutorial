import reactLogo from './assets/react.svg'

import './App.css'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'


function App() {

  return (
    < UserContextProvider>
      <h1 >React with Context API</h1>
      <Login />
     <Profile />
      </UserContextProvider>
  ) 
}

export default App
