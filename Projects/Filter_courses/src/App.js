import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from './data';
import { useEffect } from 'react';
import {toast} from 'react-toastify';
import Spinner from './components/Spinner';

const App = () => {

  const[courses, setCourses] = useState('')
  const[loading, setLoading] = useState(true)
  const[category, setCategory] = useState(filterData[0].title);

  //console.log(courses)
  useEffect( () => {
    setLoading(true)
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
      setLoading(false)
    }
    fetchData();
  }, [])

  return <div className="min-h-screen flex flex-col bg-bgDark2 ">
    <div>
      <Navbar/>
    </div>
    <div className='bg-bgDark2'>
      <Filter 
      filterData = {filterData}
      category = {category}
      setCategory = {setCategory}>
      </Filter>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
        {
          loading ? (<Spinner/>) : (<Cards courses = {courses} category = {category}></Cards>) 
        }
      </div>
    </div>
    
  </div>;
};

export default App;

