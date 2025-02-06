
import React, { useState } from 'react'
import Card from './Card'

const Cards = ({courses}) =>{

    const[likedCourses, setLikedCourses] = useState([]);
    const allCourses = []

    // return array of all courses 
    const getCourses = () =>{
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course => {
                allCourses.push(course);
            }))
        })
        return allCourses ;
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