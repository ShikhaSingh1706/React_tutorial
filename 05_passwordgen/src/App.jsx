import { useState ,useCallback,useEffect, useRef} from 'react'

function App() {
  const [length,setlength]=useState(8)
  const [numberallowed,setnumberallowed]=useState(false)
  const [charallowed,setcharallowed]=useState(false)
  const [password,setpassword]=useState("")

  //use ref hook
  const passwordref=useRef(null)

  //function for copy password to clicpboard
 const copyPasswordToClipboard=useCallback(()=>{
  
  passwordref.current?.select();  //turn passowrd select blue
  passwordref.current?.setSelectionRange(0,length); //provide to range to select ,starting and ending point.
  window.navigator.clipboard.writeText(password) ;//to copy to clipboard 
  

  

  },[password])


  //use callback for memory optimization
  const passwordgenerator=useCallback(()=>{

    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if (numberallowed){
  str+="1234567890"
}
if (charallowed){
  str+="!@#$%^&*(){}[]~_"

}
for (let i=1;i<=length; i++)
{

  let char=Math.floor(Math.random()*str.length + 1)
  pass+=str.charAt(char)


}
setpassword(pass)



  },[length,charallowed,numberallowed,setpassword])


//to run the function
useEffect(()=>{
passwordgenerator()
},[length,numberallowed,charallowed,passwordgenerator])

  return (
    <>
      <div className='w-full max-w-md  mx-auto shadow-md rounded-lg px-4 my-8 mt-9 pt-3 text-orange-500 bg-gray-700 '>
        <h1 className=' text-center text-white  my-3'>Password Generator</h1>
        <div div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' 
          value={password}
          placeholder="password" 
          readOnly 
          ref={passwordref}
          className='outline-none w-full py-1 px-3 '/>
          <button 
          className='ouline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}>
          Copy
         </button>
        </div>
         <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
          <input
           type="range" 
           className="cursor-pointer"
           min={8}
           max={20} 
           value={length}
           onChange={(e)=>{setlength(e.target.value)}}
           />
        <label> Length: {length}</label>
         </div>
         <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberallowed}
          id='numberInput'
          onChange={()=> {setnumberallowed((prev)=>!prev);}}
        />
        <label >Numbers</label>
        
         </div>
         <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charallowed}
          id='characterInput'
          onChange={()=> {setcharallowed((prev)=>!prev);}}
        />
        <label >Characters</label>
         </div>
         </div>
        </div>
         </> 
  
  )
}

export default App
