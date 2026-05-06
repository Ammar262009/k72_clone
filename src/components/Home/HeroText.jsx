import React from 'react'
import Video from './Video'

const HeroText = () => {
    return (
        <div className='font-[font1] text-white'>
            <div className='text-white text-center text-[9.5vw] uppercase leading-[8.4vw] mt-[0.8vw]'>L'étincelle</div>
            <div className='text-white text-center text-[9.5vw] flex items-center justify-center gap-1 uppercase mt-[0.6vw] leading-[8.4vw]'>
                qui
                <div className='rounded-full bg-cover overflow-hidden w-[15.52vw] h-[6.67vw]'>
                    <Video />
                </div>
                génère
            </div>
            <div className='text-white text-center text-[9.5vw] uppercase leading-[8.4vw]'>la créativité</div>
        </div>
    )
}

export default HeroText