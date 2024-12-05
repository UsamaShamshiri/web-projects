import { useState } from "react";

function App() {
  const [color, setcolor] = useState("")
  return (
    <>
      <div className="bg-black h-screen" style={{ backgroundColor: color }}>
        <button style={{ backgroundColor: "red" }} onClick={() => { setcolor("red") }}>red</button>
        <button style={{ backgroundColor: "green" }} onClick={() => { setcolor("green") }}>green</button>
        <button style={{ backgroundColor: "yellow" }} onClick={() => { setcolor("yellow") }}>yellow</button>
        <button style={{ backgroundColor: "olive" }} onClick={() => { setcolor("olive") }}>olive</button>   
        <button style={{ backgroundColor: "orange" }} onClick={() => { setcolor("orange") }}>orange</button>
        <button style={{ backgroundColor: "brown" }} onClick={() => { setcolor("brown") }}>brown</button>
        <button style={{ backgroundColor: "blue" }} onClick={() => { setcolor("blue") }}>blue</button>
        <button style={{ backgroundColor: "pink" }} onClick={() => { setcolor("pink") }}>pink</button>

      </div>
    </>
  );
}
export default App;
    