import React from 'react'
import { BsDatabase, BsArrowUpRight, BsVectorPen } from 'react-icons/bs'

function CategoryCard({ category }) {
    return (
        <div className='category-card bg-white md:p-4 p-2 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent hover:border-[#20B486] hover:cursor-pointer group/edit'>
            <div className='flex gap-4'>
                <category.icon
                    size={30}
                />
                <h1 className='text-2xl font-semibold'>{category.name}</h1>
            </div>
            <div className='group-hover/edit:bg-[#20B486] rounded-lg p-3'>
                <BsArrowUpRight
                    size={30}
                    style={{ color: '#20B486' }}
                    className='arrow-icon'

                />
            </div>

        </div>
    )
}

export default CategoryCard