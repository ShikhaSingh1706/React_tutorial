
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [themeMode,setThemeMOde]=useState('light')


  const lightTheme=()=>{
    setThemeMOde('light')
  }
  const darkTheme=()=>{
    setThemeMOde('dark')
  }

  //actual change in a theme
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
    
  },[themeMode])

  return (
    
     
<ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton/>
        </div>

        <div className="w-full max-w-sm mx-auto">
            <Card/>
                       
        </div>
      </div>
    </div>
        
</ThemeProvider>
  
  )
}

export default App
