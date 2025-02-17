
import { useState } from 'react';
import './App.css';


function App() {

  const[formData, setFormData] = useState(
    {
      firstName:"", lastName :"", email:"",country:"", address:"", city:"",
      state: "", pin:"", comments :false, candidate:false, offer:false, notif : ""
    }
  )

  const[error, setError]= useState({
    firstName:"",
    lastName:"",
    email:"",
    address:"",
    pin:""
  })

  function onInputHandler(event){
    const{name, value, checked, type} = event.target

    setFormData( (preFormData) => {
      return{
        ...preFormData,
        [name] : type === "checkbox" ? checked : value
      }
    })

    // clear the once user start typing
    setError((preError)=>({
      ...preError,
      [name]:""
    }))
  }

  function validateForm(){
    let valid = true;
    let newErrors = {}

    // validate firstName
    if(!formData.firstName){
      newErrors.firstName = "First Name is required."
      //alert(newErrors.firstName)
      valid = false;
    }
    else{
      newErrors.firstName = ""
    }

    // validate lastName
    if(!formData.lastName){
      newErrors.lastName = "Last Name is required."
      //alert(newErrors.lastName)
      valid = false;
    }
    else{
      newErrors.lastName = ""
    }

    // validate email
    if(!formData.email){
      newErrors.email = "Email is required."
      //alert(newErrors.firstName)
      valid = false;
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
      newErrors.email = "Email is invalid."
      valid = false
    }
    else{
      newErrors.firstName = ""
    }

    // validate address
    if(!formData.address){
      newErrors.address = "address is required."
      //alert(newErrors.address)
      valid = false;
    }
    else{
      newErrors.address = ""
    }

    // validate pin
    if(!formData.pin){
      newErrors.pin = "Pin is required."
      //alert(newErrors.pin)
      valid = false;
    }
    else{
      newErrors.pin = ""
    }


    setError(newErrors)
    return valid

  }

  function onSubmitHandler(event){
    event.preventDefault()             // Prevent form from reloading the page

    if(validateForm()){
      console.log(formData)
      alert("Form submitted successfully!")
    }
    else {
      alert("There are errors in the form. Please fix them.");
    }
  }
  
  return(
    <div className='wrapper'>
      <form 
      onSubmit={onSubmitHandler}>
        <label>First Name</label><br/>
        <input
        type="text"
        placeholder="Shyam"
        name='firstName'
        onChange={onInputHandler}
        value={formData.firstName}></input>
        {error.firstName && <p className="error">{error.firstName}</p>} {/* Show error */}


        <br/>
        <label>Last Name</label><br/>
        <input
        type="text"
        placeholder="Sharma"
        name='lastName'
        onChange={onInputHandler}
        value={formData.lastName}
        ></input>

        <br/><br/>
        <label>Email</label><br/>
        <input
        type="email"
        placeholder="shyamshr45@gmail.com"
        name='email'
        onChange={onInputHandler}
        value={formData.email}
        ></input>

        <br/><br/>
        <label>Country</label><br/>
        <select
        name='country'
        onChange={onInputHandler}
        value={formData.country}>
          <option>India</option>
          <option>Aus</option>
          <option>Eng</option>
          <option>Sa</option>
        </select>

        <br/><br/>
        <label>Street address</label><br/>
        <input
        type="text"
        placeholder="RZ-H 503 dwarka, delhi"
        name='address'
        onChange={onInputHandler}
        value={formData.address}
        ></input>

        <br/><br/>
        <label>City</label><br/>
        <input
        type="text"
        placeholder="Delhi"
        name='city'
        onChange={onInputHandler}
        value={formData.city}></input>

        <br/><br/>
        <label>State / Province
        </label><br/>
        <input
        type="text"
        placeholder="West Bengal"
        name='state'
        onChange={onInputHandler}
        value={formData.state}></input>

        <br/><br/>
        <label>Zip / Postal code</label><br/>
        <input
        type="text"
        placeholder="263623"
        name='pin'
        onChange={onInputHandler}
        value={formData.pin}
        ></input>

        <br/><br/>
        <h4>BY Email</h4>
        <br/>

        <div>
          <input
          type="checkbox"
          name="comments"
          id='commentsid'
          onChange={onInputHandler}
          checked={formData.comments}></input>
          <label htmlFor='commentsid'>
            <div>Comments</div>
            <div>Get notified when someone posts a comment on a posting.</div>
          </label>
        </div>

        <br/>

        <div>
          <input
          type="checkbox"
          name="candidate"
          id='candidateid'
          onChange={onInputHandler}
          checked={formData.candidate}
          ></input>
          <label htmlFor='candidateid'>
            <div>Candidates</div>
            <div>Get notified when a candidates applies for a job.</div>
          </label>
        </div>

        <br/>
        <div>
          <input
          type="checkbox"
          name="offer"
          id='offerid'
          onChange={onInputHandler}
          checked={formData.offer}
          ></input>
          <label htmlFor='offerid'>
            <div>Offers</div>
            <div>Get notified when a candidates accepts or rejects an offer</div>
          </label>
        </div>

        <fieldset>
          <legend>
            <h4>Push Notification</h4>
            <p>These are dilivered by SMS to your mobile phone.</p>
          </legend>
          <br/>

          <div>
            <input
            type="radio"
            name="notif"
            id='everythingid'
            value="everything"
            onChange={onInputHandler}
            checked={formData.notif === "everything"}
            ></input>
            <label htmlFor='everythingid'>Everything</label>
          </div>

          <div>
            <input
            type="radio"
            name="notif"
            id='sameasmailid'
            value="sameasmail"
            onChange={onInputHandler}
            checked={formData.notif === "sameasmail"}></input>
            <label htmlFor='sameasmailid'>Same as mail</label>
          </div>

          <div>
            <input
            type="radio"
            name="notif"
            id='nopush'
            value="nopush"
            onChange={onInputHandler}
            checked={formData.notif === "nopush"}></input>
            <label htmlFor='nopush'>No push Notification </label>
          </div>
        </fieldset>

        

        <br/>
        <button
        type='submit'>Save</button>
      </form>
    </div>
  )
}

export default App;
