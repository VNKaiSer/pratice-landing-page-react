import React from 'react'
import { heroImg } from '../assets'
import { maxWidth } from '../constants'

function Hero() {
    return (
        <div className='w-full bg-white'>
            <div className={`max-w-[${maxWidth}] m-auto grid grid-cols-2`}>
                <div>
                    <p className='uppercase'>start to success</p>
                </div>
                <img src={heroImg} />
            </div>
        </div>
    )
}

export default Hero