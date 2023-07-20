import React from 'react'
import { hamburgerMenu, lock, logo, close } from "../assets";
import { primaryColor } from '../constants';
import { useState } from 'react';
import { maxWidth } from '../constants';


const Navbar = () => {
    const [tolggle, setTolgggle] = useState(false)
    const handleClick = () => {
        setTolgggle(!tolggle)
    }

    return (
        <div className='w-full h-[80px] bg-white border-b'>
            <div className='md:max-w-[1280px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-5'>
                <img src={logo} className='h-[25px]' />
                <div className='hidden md:flex items-center'>
                    <ul className='flex gap-4 '>
                        <li>Home</li>
                        <li>About</li>
                        <li>Spport</li>
                        <li>Pricing</li>
                        <li>Discover</li>
                    </ul>
                </div>

                <div className='hidden md:flex'>
                    <button className='flex justify-between items-center bg-transparent px-6 gap-2'>
                        <img src={lock} />
                        Login
                    </button>
                    <button className={`bg-[${primaryColor}] px-8 py-3 rounded-md text-white font-bold`} >Sign Up For Free</button>
                </div>
                <div className='md:hidden'>
                    <img
                        onClick={handleClick}
                        src={!tolggle ? hamburgerMenu : close}
                    />
                </div>
            </div>
            <div className={tolggle ? 'absolute z-10 p-4 w-full bg-white px-8' : 'hidden'}>
                <ul>
                    <li className='p-4 hover:bg-gray-400'>Home</li>
                    <li className='p-4 hover:bg-gray-400'>About</li>
                    <li className='p-4 hover:bg-gray-400'>Spport</li>
                    <li className='p-4 hover:bg-gray-400'>Pricing</li>
                    <li className='p-4 hover:bg-gray-400'>Discover</li>
                    <div className='flex flex-col my-4 gap-4'>
                        <button className='border border-[20B486] flex justify-center items-center bg-transparent px-6 gap-2 py-4'>
                            <img src={lock} />
                            Login
                        </button>
                        <button className={`bg-[${primaryColor}] px-8 py-5 rounded-md text-white font-bold`} >Sign Up For Free</button>
                    </div>
                </ul>

            </div>





        </div >
    )
}

export default Navbar