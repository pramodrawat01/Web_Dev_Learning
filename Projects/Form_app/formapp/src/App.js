
import { useState } from 'react';
import './App.css';


function App() {

  // const[firstName, setFirstName] = useState("");
  // const[lastName, setLastName] = useState("");

  // console.log(firstName)
  // console.log(lastName)
  // function onInputFirst(event){
    // console.log("first name printing")
    // console.log(event.target.value)

  //   console.log("on first name hook")
  //   setFirstName(event.target.value)
  // }

  // function onInputLast(event){
    // console.log("printing lastname")
    // console.log(event.target.value)

  //   console.log("on last name hook")
  //   setLastName(event.target.value)
  // }


  const [formData, setFormData] = useState(
    { 
      firstName : "", lastName :"",
      email: "", comment : "", visible : false, mode : "", favCard : ""
    })

  console.log(formData)
  function onChangeHandler(event){

    const {name, value, type, checked} = event.target   // destructuring of event.target
    setFormData( prvFormData => {
      return {
        ...prvFormData,                         // else will be same 
        // [event.target.name] : event.target.value        // value set krega firstname and lastname ki
        //  can use this insted of above line
        [name] : type === "checkbox" ? checked : value     
      }
    })
  }

  return (
    <div className="App">
      <form>
      <br></br>
        <input
        type='text'
        placeholder='enter first-name'
        name='firstName'
        onChange={onChangeHandler}
        
        // to maintain state for each (controlled component)
        value={formData.firstName}>               
        
        </input>


<br></br>
        <br></br>
        <input
        type='text'
        placeholder='enter last-name'
        name='lastName'
        onChange={onChangeHandler}
        value={formData.lastName}>
        
        </input>

        <br></br>
      <br></br>
        <input
        type='email'
        placeholder='enter your email'
        name='email'
        onChange={onChangeHandler}
        value={formData.email}>
        
        </input>

<br></br>
        <br></br>
        <textarea
        placeholder='enter your comments..'
        onChange={onChangeHandler}
        name = "comment"
        value={formData.comment}>

        </textarea>
        
        <br></br>
        <br></br>
        <input
        type='checkbox'
        name='visible'
        id="isvisible"
        onChange={onChangeHandler}
        checked={formData.visible}>
        
        </input>
        <label htmlFor='isvisible'>are you coming for party?</label>

<br></br>
<br></br>

        <fieldset>
          <legend>Mode : </legend>
          <input
        type='radio'
        onChange={onChangeHandler}
        name='mode'
        value = "online-mode"
        id ='online-mode'
        checked={formData.mode === "online-mode"}>     // take value as string of radio btn

        </input>
        <label htmlFor='online-mode'> Online Mode</label>

        <br></br>
        <br></br>
        
        <input
        type='radio'
        onChange={onChangeHandler}
        name='mode'
        value= "offline-mode"
        id='offline-mode'
        checked={formData.mode === "offline-mode"} >


        </input>
        <label htmlFor='offline-mode'> Offline Mode</label>
        </fieldset>
        
        <select>

        </select>
      </form>
    </div>
  );
}

export default App;
