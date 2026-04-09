import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
    return (
        <div className='h-auto lg:h-full flex flex-col gap-10 lg:justify-between w-full lg:w-1/3'>
            <HeroText />
            <Arrow />
        </div>
    )
}

export default LeftContent