'use client'
import React from 'react'
import SearchEventType from './SearchEventType'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const SearchButton = () => (
    <button type='submit' className=' h-[48px] bg-[#F2F2F2] rounded-r-full'>
        <FontAwesomeIcon icon={faMagnifyingGlass}
        width={40}
        height={40}
        className='object-contain'
        />
    </button>
)

const SearchBar = () => {
    const [eventType, setEventType] = useState('')
    const handleSearch = () => {}
    // since you're already on the the landing page for a location,
    // this search will filter out by event type

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchEventType
                eventType={eventType}
                setEventType={setEventType}
                />
            <SearchButton />
            </div>


        </form>
    )
}

export default SearchBar
