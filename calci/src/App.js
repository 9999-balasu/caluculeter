
import React, { useState } from 'react'

const App = () => {
  const [input,setInput] = useState("");
  const [result,setReult] = useState(0);
  const handler = e =>{
    setInput(e.target.value);
  }
  return (
    <div>
      <center>
        <input type = "text" value={input} name="input" onChange={handler}/>
        <br/>
        <button onClick={()=>setReult(eval(input))}>Result</button>
        <h4>Result is : {result}</h4>

        <button onClick={()=>setInput(input+'2')}>2</button>
         <button onClick={()=>setInput(input+'3')}>3</button>
          <button onClick={()=>setInput((input)=>String(Math.pow(Number(input), 2)))}>pow2</button>
      </center>
    </div>
  )


    


}



export default App


