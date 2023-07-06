'use client'
import React from 'react'
import SearchEventType from './SearchEventType'
import { useState } from 'react'

const SearchBar = () => {
    const [eventType, setEventType] = useState('')

    const handleSearch = () => {}


    return (
        <form className='searchBar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchEventType
                eventType={eventType}
                setEventType={setEventType}
                />
            </div>

        </form>
    )
}

export default SearchBar
