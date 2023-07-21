import React from 'react'
import { achievement } from '../assets'
import AchievementCard from './AchievementCard'
import { achievements } from '../data/achievement'
function Achievement() {
    return (
        <div className='w-full bg-white'>
            <div className={`md:max-w-[1280px] m-auto grid md:grid-cols-2 py-24 px-4 max-w-[600px]`}>
                <div>
                    <h1 className='py-2 text-5xl font-semibold'>Our <span className='text-[#20B486]'>Achievement</span></h1>
                    <p className='py-2 text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident,</p>
                    <div className='grid md:grid-cols-2 grid-cols-1 justify-center gap-8 py-24 pr-[200px]'>
                        {
                            achievements.map((achievement) => {
                                return <AchievementCard key={achievement.id} achievement={achievement} />
                            })
                        }
                    </div>
                </div>
                <div className='md:order-last order-first ml-24'>
                    <img src={achievement} />
                </div>
            </div>
        </div>
    )
}

export default Achievement