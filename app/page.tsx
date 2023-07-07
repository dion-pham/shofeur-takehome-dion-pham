'use client'
import Image from 'next/image'
import { Hero, SearchBar, CustomFilter, VehicleCard, DateFilter } from '@/components'
import { allowSmoking, groupSize, vehicleTypes, vehicles } from '@/constants'
import { useState } from 'react'

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <main className="overflow-hidden">
      <Hero/>

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
          <CustomFilter title='smoking preference' options={allowSmoking} />
          {/* since these filters are present on a page in which location is already
          decided, it will apply said filters to the location */}
        </div>
      </div>

      <section className='px-10'>
        <div className='home__vehicles-wrapper'>
          {vehicles.map((vehicle) => (
            <VehicleCard  key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>

    </main>

  )
}
