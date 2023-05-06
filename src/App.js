import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [px , setPx] = useState(0)
  const [convert, setConvert] = useState(0)

  const handleInput=(e)=>{
  setPx(e.target.value)
  //  setPx(store/16)
  }

  const handleSubmit=()=>{
    setConvert(px/16)
  }
  return (
    <div>
       <h2>px to rem converter</h2>
       <div>
         <input style={{width:'70px'}} type="text"  onChange={handleInput} placeholder="enter pixel"/>
         <button onClick={handleSubmit}>convert</button>
         <h1>{convert}<span>rem</span></h1>
       </div>
    </div>
  );
}
