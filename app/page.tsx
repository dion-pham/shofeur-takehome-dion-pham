'use client'
import Image from 'next/image'
import { Hero, SearchBar, CustomFilter, VehicleCard } from '@/components'
import { groupSize, vehicleTypes, vehicles } from '@/constants'
import DateFilter from '@/components/DateFilter'
import { useState } from 'react'

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'></div>
      <div className='px-10'>
        <h1 className='text-4xl font-extrabold'>
          Explore options below!
        </h1>
      </div>

      <div className='home__filters px-10'>
        <SearchBar />
        <div className='home__filter-container'>
          <DateFilter selectedDate={selectedDate} onChange={handleDateChange} />
          <CustomFilter title='vehicle type' options={vehicleTypes} />
          <CustomFilter title='group size' options={groupSize} />
          {/* <CustomFilter title = ''/> */}
          {/* maybe a custom filter for pickup city  in future implementation */}
        </div>
      </div>

      <section className='px-10'>
        <div className='home__vehicles-wrapper'>
          {vehicles.map((vehicle) => (
            <VehicleCard vehicle={vehicle} />
          ))}
        </div>
      </section>

    </main>

  )
}
