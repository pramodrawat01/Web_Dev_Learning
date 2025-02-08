


import React, { useState } from 'react'
import Card from './Card'

const Cards = ({courses,category}) =>{

    // let category = courses.category
    const[likedCourses, setLikedCourses] = useState([]);
    

    // return array of all courses 
    const getCourses = () =>{
        if(category === "All"){
            const allCourses = []
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course => {
                    allCourses.push(course);
                }))
            })
            return allCourses ;
        }
        else{
            return courses[category]
        }
        
    }


    return (
        <div className=' flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map( ( courses) => {
                    return <Card
                    course = {courses} 
                    likedCourses = {likedCourses}
                    setLikedCourses = {setLikedCourses}></Card>
                })
            }
        </div>
    )
}
export default Cards



