import React from 'react'
import { company1, company2, company3, company4 } from '../assets'

function Trust() {
    return (
        <div className='w-full bg-white py-[50px]'>
            <div className='md:max-w-[1480px] m-auto max-w-[600px] text-center'>
                <h1 className='py-2 font-bold text-3xl text-[#536E96]'>Trusted by over 25,000 teams around the world.</h1>
                <p className='text-xl text-[#536E96]' >Leading companies use the same courses to help employees keep their skills fresh.</p>
                <div className='flex justify-center py-8 md:gap-8'>
                    <img src={company1} />
                    <img src={company2} />
                    <img src={company3} />
                    <img src={company4} />
                </div>

            </div>
        </div>
    )
}

export default Trust