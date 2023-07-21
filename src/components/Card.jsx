import React from 'react'
import { course1 } from '../assets'
import StarRating from './StartRating'

function Card({ course }) {
    return (
        <div className='bg-white drop-shadow-md rounded-2xl overflow-hidden mr-2 my-4'>
            <img src={course.img}
                className='h-40 object-cover w-full relative'
            />
            <div className='p-5 border border-b'>
                <h1
                    className='py-[2px] font-bold'
                > {course.description}</h1>
                <StarRating rating={course.rating} />
            </div>
            <h3 className='p-5 text-xl' > ${course.price}</h3>
            <div className='absolute left-3 top-2 bg-gray-300 px-[4px] py-[2px] rounded'>{course.type}</div>
        </div>
    )
}

export default Card