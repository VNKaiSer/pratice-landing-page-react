import React from 'react'
import { quoutemark, student1 } from '../assets'

function FeedbackCard({ feedback }) {
    return (
        <div className='bg-white shadow-xl rounded-3xl m-2 p-8'>
            <div className='flex items-center text-[#000] gap-4 justify-between'>
                <div className='flex items-center gap-4'>
                    <img
                        src={feedback.img}
                        style={{ width: 70, height: 70, borderRadius: '50%' }}
                    />
                    <div className=''>
                        <h1 className='font-semibold text-2xl'>{feedback.name}</h1>
                        <p className='text-xl'>{feedback.designation}</p>
                    </div>
                </div>
                <img src={quoutemark} />
            </div>

            <div className='py-4 mt-2'>
                <p>
                    Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
                    <br />
                    <br />
                    pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
                </p>
            </div>
        </div>
    )
}

export default FeedbackCard