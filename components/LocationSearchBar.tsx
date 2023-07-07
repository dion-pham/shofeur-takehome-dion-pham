'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { SearchButton } from './SearchBar';

const LocationSearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Perform search logic here
        console.log('Search query:', searchQuery);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <form className="z-10" onSubmit={handleSearch}>
            <div className='flex flex-row items-center '>
                <input
                    type="text"
                    className='search-eventtype__input z-10'
                    placeholder="Pickup city or airport"
                    value={searchQuery}
                    onChange={handleChange}
                />
                <SearchButton />
            </div>
        </form>
    );
};

export default LocationSearchBar;
