'use client'
import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {}


    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Chauffeured Anything near me
                </h1>

            <CustomButton
                title = 'Explore Chauffers'
                containerStyles = 'bg-[#EAB050] text-white rounded-full mt-10'
                handleClick={handleScroll}
            />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src='/location_main.webp' alt='location-main'
                    fill className='object-contain'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
