import React, { useState } from 'react'
import '../styles/App.css';



const App = () =>{

  let inputInfo = {
    text : '',
    number : ''
  }

  const[Input,setInput] = useState(inputInfo);

  const handleInput = (event) =>{
   // use console.log
  inputInfo[event.target.id] = event.target.value ;

  setInput({...inputInfo});
  console.log(inputInfo);
  
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} onChange={handleInput} />

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'} onChange={handleInput}
      />
      <br/>
    </div>
  )
}


export default App;
