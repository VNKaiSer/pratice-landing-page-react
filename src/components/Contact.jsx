import React from 'react'
import { contact } from '../assets'

function Contact() {
    return (
        <div className='w-full bg-[#E9F8F3]'>
            <div className={`md:max-w-[1280px] m-auto flex py-24 px-4 max-w-[600px] items-center`}>
                <img src={contact} />
                <div>
                    <h1 className='py-2 text-5xl font-semibold'>Join  <span className='text-[#20B486]'> World's largest</span> learning platform today</h1>

                    <p className='py-2 text-3xl'>Start learning by registering for free</p>

                    <button className={`bg-[#20B486] px-8 py-3 rounded-md text-white font-bold`} >Sign Up For Free</button>
                </div>
            </div>
        </div>
    )
}

export default Contact