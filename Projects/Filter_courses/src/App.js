import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from './data';
import { useEffect } from 'react';
import {toast} from 'react-toastify';
const App = () => {

  const[courses, setCourses] = useState(null)
  ///console.log(courses)
  useEffect( () => {
    const fetchData = async () =>{
      try{
        const result = await fetch(apiUrl);
        const output = await result.json();

        // sava data into a variable
        setCourses(output.data)
        // console data 
        console.log(output)
      }
      catch(err){
        toast.err("something went wrong") 
      }
    }
    fetchData();
  }, [])

  return <div>
    <Navbar/>
    <Filter filterData = {filterData}>

    </Filter>
    <Cards courses = {courses}>

    </Cards>
  </div>;
};

export default App;

