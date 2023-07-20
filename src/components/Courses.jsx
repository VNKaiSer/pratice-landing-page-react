import React from 'react'
import Card from './Card'

function Courses() {
    return (
        <div className='w-full bg-[#E9F8F3B2]'>
            <div className={`md:max-w-[1280px] m-auto grid md:grid-cols-2 py-24 px-4 max-w-[600px]`}>
                <Card />
            </div>
        </div>
    )
}

export default Courses