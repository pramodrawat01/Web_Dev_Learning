import React, { useState } from "react"
import Card from "./Card"
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

const Testimonial = (props) => {

    let reviews = props.reviews;
    const[index, setIndex] = useState(0)



    function onLeftHandler(){
        if(index - 1 < 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index - 1)
        }
    }

    function onRightHandler(){
        if(index + 1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index + 1)
        }
    }

    function onSurpriseHandler(){
        let rendomIndex = Math.floor( Math.random() * reviews.length )
        setIndex(rendomIndex)
    }


    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center
        item-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md box-border">
            <Card review = {reviews[index]}></Card>

            <div className="flex justify-center text-3xl mt-10 gap-3 text-violet-400 font-bold">
                <button
                    onClick={onLeftHandler}
                    className="cursor-pointer hover:text-violet-500">
                    <FiChevronLeft/>
                </button>
                <button 
                    onClick={onRightHandler}
                    className="cursor-pointer hover:text-violet-500">
                    <FiChevronRight/>
                </button>
            </div>
            
            <div className="mt-[20px]">
                <button 
                onClick={onSurpriseHandler}
                className="bg-violet-400 hover:bg-violet-500 transition-all duration-200
                    cursur-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
                    Surprise me
                </button>
            </div>
        </div>
    )
}

export default  Testimonial