import React from 'react'
import Card from './Card'
import Slider from 'react-slick'
import { courses } from '../data/courses'
import { course1, course2, course3, course4 } from '../assets'

function Courses() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className='w-full bg-[#E9F8F3B2] py-24'>
            <div className={`md:max-w-[1280px] m-auto max-w-[600px]`}>
                <h1 className='py-2 md:text-6xl text-5xl font-semibold'>Most Popular <span className='text-[#20B486]'>Courses</span></h1>
                <p className='py-2 text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident,</p>
                <Slider {...settings}
                    className='pt-8'
                >
                    {courses.map((course) => {
                        return <Card course={course} />
                    })}
                </Slider>

            </div>
        </div>
    )
}

export default Courses