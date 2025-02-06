import React from 'react'
import {FcLike} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = ({course}) =>{

    let likedCourses = course.likedCourses;
    let setLikedCourses = course.setLikedCourses;

    function onHeartBtn(){
        if(likedCourses.include(course.id)) {
            // liked already
            setLikedCourses( (prev) => prev.filter((id) => (id !== course.id) ) );
            toast.warning("like removed")
        }
        else{
            // means not liked 
            if(likedCourses === 0){
                setLikedCourses([course.id])
            }
            else{
                setLikedCourses( (prev) => [...prev, course.id])
            }
            toast.success("course liked");
        }

    }

    return (
        <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-90 relative'>
            <div className='relative'>
                <img src={course.image.url} alt='img'></img>
            </div>
            <div className='w-[40px] h-[40px] bg-white rounded-full right-2 absolute top-36 grid place-items-center '>
                <button onClick={onHeartBtn}>
                    <FcLike  fontSize="1.75rem"/>
                </button>
            </div>
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>{course.description}</p>
            </div>
        </div>
    )
}
export default Card