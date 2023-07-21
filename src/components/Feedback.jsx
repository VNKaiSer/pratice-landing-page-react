import React from 'react'
import Slider from 'react-slick'
import FeedbackCard from './FeedbackCard'
import { feedbacks } from '../data/feedback'

function Feedback() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
        <div className='w-full bg-white'>
            <div className={`md:max-w-[1280px] m-auto  py-24 px-4 max-w-[600px]`}>

                <h1 className='py-2 text-5xl font-semibold'>Student  <span className='text-[#20B486]'>Feedback</span></h1>
                <p className='py-2 text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident,</p>
                <Slider
                    {...settings}
                    className='justify-center py-5'
                >
                    {feedbacks.map((feedback) => {
                        return <FeedbackCard key={feedback.id} feedback={feedback} />
                    })}
                </Slider>

            </div>
        </div>
    )
}

export default Feedback