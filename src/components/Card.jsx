import React from 'react'
import { course1 } from '../assets'
import StarRating from './StartRating'

function Card() {
    return (
        <div className='bg-white drop-shadow-md rounded-2xl overflow-hidden'>
            <img src={course1}
                className='h-40 object-cover w-full relative'
            />
            <div className='p-5 border border-b'>
                <h1
                    className='py-[2px]'
                > Python Programing</h1>
                <StarRating rating={4} />
            </div>
            <h3 className='p-5 text-xl' > 500$</h3>
            <div className='absolute left-3 top-2 bg-gray-300 px-[4px] py-[2px] rounded'>HTML</div>
        </div>
    )
}

export default Card