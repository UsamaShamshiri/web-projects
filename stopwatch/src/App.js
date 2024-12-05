

import { useRef, useState } from 'react';
import './index.css';

function App() {
  let [msec, setmsec] = useState(0)
  let [sec, setsec] = useState(0)
  let [min, setmin] = useState(0)
   let [btn, setbtn] = useState(false)

  let msecref = useRef(null)
  let secref = useRef(null)
  let minref = useRef(null)
  let btnref = useRef(btn)
  // let setbtn = () => { btnref.current = true }
  // let stopbtn = () => {
  //   btnref.current = false
  //   console.log(btnref)
  // }

  let settime = () => {

    setbtn(btnref.current=true)
    msecref.current = setInterval(() => {
      setmsec((msec) => (msec + 1) % 100)
    }, 10);
    secref.current = setInterval(() => {
      setsec((sec) => (sec + 1) % 60)
    }, 1000);
    minref.current = setInterval(() => {
      setmin((min) => min + 1)
    }, 60000);
  }

  let stop = () => {
    // stopbtn()
   setbtn(btnref.current=false)
    clearInterval(msecref.current)
    clearInterval(secref.current)
    clearInterval(minref.current)

    msecref.current = null
    secref.current = null
    minref.current = null
   
  }
  let reset = () => {
    stop()
    setmsec(0)
    setsec(0)
    setmin(0)
  }

  return (
    <>
      <h1 className=' mt-48 text-center text-3xl mb-4'>STOP WATCH</h1>
      <div className='flex w-64  justify-center text-xl border-2 p-8  border-green-500  my-auto mx-auto'>

        <div className=' '>
          <h1 className='text-2xl ml-20'>{min < 10 ? `0${min}` : sec}:{sec < 10 ? `0${sec}` : sec}:{msec < 10 ? `0${msec}` : msec}</h1>
          <div className='flex gap-2 justify-center '>
            <button className='border-2 p-1 bg-green-500 m-2' disabled={btnref.current} onClick={settime} id='start'>Start</button>
            <button className='border-2 p-1 bg-green-500 m-2' onClick={stop}>Stop</button>
            <button className='border-2 p-1 bg-green-500 m-2' onClick={reset}>Reset</button>

          </div>



        </div>
      </div>
    </>
  );
}

export default App;
