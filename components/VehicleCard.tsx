'use client'
import React from 'react'
import { VehicleProps } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faStar } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

interface VehicleCardProps {
    vehicle: VehicleProps
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
    const { name, num_reviews, rating, price, capacity, img } = vehicle
    const formattedRating = rating % 1 === 0 ? `${rating}.0` : rating.toString();
    return (
        <div className='vehicle-card group'>
            <div className='vehicle-card__content'>
                <h2 className='vehicle-card__content-title'>
                    {name}
                </h2>
            </div>

            <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
                {price}
                <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
            </p>


            <div className='relative w-full h-40 my-3 object-contain'>
            <Image src={img} alt='car model' fill priority className='object-contain' />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex w-full justify-between text-bg-[#EAB050]'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <FontAwesomeIcon icon={faPeopleGroup} width={20} height={20} />
                        <p className='text-[14px] leading-[17px]'>
                            {capacity}
                        </p>
                    </div>
                    <div className="vehicle-card__icon">
                        <FontAwesomeIcon icon={faStar} />
                        <p className="vehicle-card__icon-text">{formattedRating}</p>
                    </div>
                    <div className="vehicle-card__icon">
                        <p className="vehicle-card__icon-text">{num_reviews === 1 ? `${num_reviews} review` : `${num_reviews} reviews`} </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VehicleCard
