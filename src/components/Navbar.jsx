import React from 'react'
import { logo } from "../assets";


const Navbar = () => {
    return (
        <div className='w-full h-[96px] bg-white border-b'>
            <div className='max-w-[1480px] m-auto w-full h-full flex justify-between items-center '>
                <img src={logo} className='h-[25px]' />
            </div>
            <div className='flex items-center'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Spport</li>
                    <li>Pricing</li>
                    <li>Discover</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar