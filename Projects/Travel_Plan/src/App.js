import React, { useState } from "react";
import Tours from "./components/Tours.js";


import data from './data.js'

const App = () => {

  const[tours, setTours] = useState(data)

  function removeTour(id){
     const newTours = tours.filter(tour => tour.id !== id)
     setTours(newTours);
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button onClick={() => setTours(data)} className="refresh-btn">
          refresh
        </button>
      </div>
    )
  }

  return(
    <div>
      <Tours tours = {tours} removeTour = {removeTour}></Tours>
    </div>
  )
};

export default App;
