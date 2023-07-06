'use client'
import { searchEventTypeProps } from '@/types'
import React from 'react'
import { Combobox } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { eventTypes } from '@/constants'

const SearchEventType = ({ eventType, setEventType }: searchEventTypeProps) => {
    const [search, setSearch] = useState('')

    const filteredSearch = search === '' ? eventTypes : eventTypes.filter((item) =>
        item.toLowerCase()
            .replace(/\s+g/g, "")
            .includes(search.toLowerCase().replace(/\s+g/g, ""))
    )

    return (
        <div className='search-eventtype'>
            <Combobox value={search} onChange={setSearch}>
                <div className='relative w-full'>
                    <Combobox.Button className='absolute top-[14px]'>
                        <FontAwesomeIcon
                            icon={faChampagneGlasses}
                            width={20}
                            height={20}
                            className='ml-4'
                        />
                    </Combobox.Button>

                    <Combobox.Input
                        className='search-eventtype__input'
                        placeholder='Choose your occasion'
                        displayValue={(eventType: string) => eventType}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <Combobox.Options
                        className='absolute z-10 w-full bg-white border border-gray-300 shadow-md rounded-b-md'
                        style={{ top: 'calc(100% + 10px)', left: 0 }}
                    >
                        {filteredSearch.map((item) => (
                            <Combobox.Option
                                key={item}
                                className={({ active }) =>
                                    `relative search-eventtype__option
                                ${active ? 'bg-[#EAB050] text-white' : 'text-gray-900'}`
                                }
                                value={item}
                            >
                                {({ selected, active }) => (
                                    <>
                                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                            {item}
                                        </span>

                                        {selected ? (
                                            <span
                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-pribg-primary-purple'
                                                    }`}
                                            ></span>
                                        ) : null}
                                    </>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchEventType
