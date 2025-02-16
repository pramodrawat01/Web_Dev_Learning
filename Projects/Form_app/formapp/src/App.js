
//import { useState } from 'react';
import './App.css';


function App() {

  return(
    <div className='wrapper'>
      <label>First Name</label><br/>
      <input
      type="text"
      placeholder="Shyam"></input>

      <br/><br/>
      <label>Last Name</label><br/>
      <input
      type="text"
      placeholder="Sharma"></input>

      <br/><br/>
      <label>Email</label><br/>
      <input
      type="email"
      placeholder="shyamshr45@gmail.com"></input>

      <br/><br/>
      <label>Country</label><br/>
      <select>
        <option>India</option>
        <option>Aus</option>
        <option>Eng</option>
        <option>Sa</option>
      </select>

      <br/><br/>
      <label>Street address</label><br/>
      <input
      type="text"
      placeholder="RZ-H 503 dwarka, delhi"></input>

      <br/><br/>
      <label>City</label><br/>
      <input
      type="text"
      placeholder="Delhi"></input>

      <br/><br/>
      <label>Street address</label><br/>
      <input
      type="text"
      placeholder="RZ-H 503 dwarka, delhi"></input>

      <br/><br/>
      <label>State / Province
      </label><br/>
      <input
      type="text"
      placeholder="West Bengal"></input>

      <br/><br/>
      <label>Zip / Postal code</label><br/>
      <input
      type="text"
      placeholder="West Bengal"></input>
    </div>
  )
}

export default App;
