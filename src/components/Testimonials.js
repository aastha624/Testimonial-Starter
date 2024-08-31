import React, { useState } from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setindex] = useState(0);
    // main logic index nu only this project map use karavathi 5 card bane jay line ma badha nu card generate kari de 
    function leftShiftHandler() {
        if (index - 1 < 0) {
            setindex(reviews.length - 1);
        }
        else {
            setindex(index - 1);
        }
    }


    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            setindex(0);
        }
        else {
            setindex(index + 1);
        }

    }

    function surpriseHandler() {
        let randIndex = Math.floor(Math.random() * reviews.length);
        setindex(randIndex);
    }

    return (
        <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all 
    duration-700 hover:shadow-xl rounded-md">
            <Card review={reviews[index]}></Card>
            <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold place-items-center'>
                <button
                    onClick={leftShiftHandler}
                    className='cursor-pointer hover:text-violet-500'>
                    <FiChevronLeft />
                </button>
                <button
                    onClick={rightShiftHandler}
                    className='cursor-pointer hover:text-violet-500'>
                    <FiChevronRight />
                </button>
            </div>
            <div className="mt-6">
                <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
                    onClick={surpriseHandler} >
                    Surprise Me
                </button>
            </div>
        </div>
    )
}

export default Testimonials;  
