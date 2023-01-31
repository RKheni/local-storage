import './App.css';
import React, { useRef } from "react";

function App() {

  const data=useRef();
    const handleClick=()=>{
        console.log(data.current.value,"initial value")
        localStorage.setItem("inputValue",data.current.value)
    }
    console.log(localStorage.getItem("inputValue"),"****")

  return (
    <>
    <div className="App">
      <header className="App-header">
        <input ref={data} />
        <button onClick={handleClick}>Add</button>
      </header>
    </div>
    </>
  );
}

export default App;
