import React from 'react'
import { heroImg } from '../assets'
import { maxWidth, primaryColor } from '../constants'
import { AiOutlineSearch } from 'react-icons/ai'
function Hero() {
    return (
        <div className='w-full bg-white'>
            <div className={`md:max-w-[1280px] m-auto grid md:grid-cols-2 py-24 px-4 max-w-[600px]`}>
                <div>
                    <p className={`uppercase text-[${primaryColor}] text-2xl font-bold`}>start to success</p>
                    <h1 className='py-2 md:text-6xl text-5xl font-semibold'>
                        Access To <span className={`text-[#20B486]`}>5000+</span> Courses from <span className={`text-[#20B486]`}>300</span> Instructors & Institutions
                    </h1>
                    <p className='py-2 text-[#6D737A] text-lg'>Various versions have evolved over the years, sometimes by accident,</p>
                    <form className='max-w-[700px] p-4 shadow-lg rounded-md flex justify-between'>
                        <input
                            type="text"
                            placeholder='What do want to learn?'
                            className='bg-white'
                        />
                        <button>
                            <AiOutlineSearch
                                size={20}
                                color={'#000'}
                                className='icon'
                            />
                        </button>
                    </form>
                </div>


                <img className='md:order-last order-first' src={heroImg} />
            </div>
        </div>
    )
}

export default Hero