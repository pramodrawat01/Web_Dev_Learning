import React, { useEffect, useState } from "react";

const App = () => {

  const[text, setText] =useState('')

  function onChangeHandler(e){
    console.log(text)
    setText(e.target.value)
  }
  // variation - 1
  // useEffect( ()=>{
  //   console.log("UI rendered")
  // })

  // variation - 2
  // useEffect( () =>{
  //   console.log("ui rendered")    // print twice cause of <React.StrictMode>
  // }, [])

  // variation - 3 first render whenever the dependencies changes here
  // useEffect( ()=> {
  //     console.log("text changed")
  // }, [text])

  // variation 4 - to handle unmounting of a component or remove privious listener before adding new one

  useEffect( () =>{
    // add event listener here
    console.log("add event listener")
    return ()=>{
      console.log("remove event listener")
    }
  })

  return <div>
    <input type="text" placeholder="enter text here" className="text-input" onChange={onChangeHandler}></input>
  </div>;
};

export default App;
