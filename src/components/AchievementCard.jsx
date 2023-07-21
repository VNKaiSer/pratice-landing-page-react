import React from 'react'
import { graduationCap } from '../assets'


function AchievementCard({ achievement }) {
    const setBg = () => {
        return `bg-[${achievement.bg}]`;
    }
    return (
        <div className='flex gap-4'>
            <img src={achievement.img}
                className={
                    setBg()
                }
            />
            <div>
                <h1 className='text-4xl font-semibold'>{achievement.member}</h1>
                <p className='text-[#6D737A]'>{achievement.title}</p>
            </div>
        </div>
    )
}

export default AchievementCard