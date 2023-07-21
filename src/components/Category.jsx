import React from 'react'
import CategoryCard from './CategoryCard'
import { category } from '../data/category'

function Category() {
    return (
        <div className='w-full bg-[#F0FBF7] py-24'>
            <div className='md:max-w-[1280px] m-auto max-w-[600px]  px-4 md:px-0'>
                <h1 className='md:leading-[72px] text-3xl font-bold'>Most <span className='text-[#20B486]'>Popular Categories</span></h1>
                <p className='text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>

                <div className='grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1'>
                    {category.map((category) => {
                        return <CategoryCard key={category.id} category={category} />
                    })}
                </div>
            </div>


        </div>

    )
}

export default Category