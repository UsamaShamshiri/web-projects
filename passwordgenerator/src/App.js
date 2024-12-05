import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css"


function App() {
 let [length,setlength]=useState(5)
 let[number,setnumber]=useState(false)
 let[char,setchar]=useState(false)
 let[password,setpassword]=useState(false)
 let genertor=()=>{
    let pass=''
    let str="qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM"
   if(number){str+="1234567890"}
   if(char){str+="~!@#$%^&*_-`<>,"}
   for(let i=0;i<length;i++){
       let index=Math.floor(Math.random()*str.length+1)
       pass+=str.charAt(index)
      ;
   }
setpassword(pass)
}

useEffect(()=>{genertor()},[length,number,char,setpassword])
 let passref=useRef(null)

 let copypassword=()=>{
    passref.current.select();
    window.navigator.clipboard.writeText(password)
}
  return (
    <>
    <div className="text-center w-2/4  bg-white ml-96 mt-36 rounded-lg p-2">
     <h1 className="text-4xl mb-4">Password Generator</h1> 
     <input className="p-2 mb-4 border-none bg-slate-300 " value={password}   type="text"ref={passref} />
     <button className="bg-emerald-700 rounded-sm p-2 text-base text-white"
     
     onClick={copypassword}
     >Copy</button>
     <br />
     <div className="text-xl">
     <input type="range" className="mt-2" 
     value={length}  
     min={5} max={20}
     onChange={(e)=>{setlength(e.target.value) }}
     />
     <label className="ml-2">Length:{length}</label>
     <input type="checkbox" className="ml-2 "
     defaultChecked={number}
     onChange={()=>{
        setnumber((prev)=>!prev)
     }}
     />
     <label className="">Numbers</label>
     <input type="checkbox" className="ml-2 "
     defaultChecked={char}
     onChange={()=>{
        setchar((prev)=>!prev )
     }}
     />
     <label className="">Characters</label>
     </div>
     </div>
     </>
  );
}

export default App;