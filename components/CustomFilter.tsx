'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CustomFilterProps } from '@/types'
import { Listbox } from '@headlessui/react'

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div className='w-fit relative'>
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className='custom-filter__btn'>
          <span>{selected.title}</span>
        </Listbox.Button>

        <Listbox.Options
          className='custom-filter__options absolute z-10 bg-white border border-gray-300 shadow-md rounded-b-md'
          style={{ top: 'calc(100% + 10px)', left: 0 }}
        >
          {options.map((option) => (
            <Listbox.Option
              key={option.title}
              className={({ active }) =>
                `relative cursor-default select-none py-2 px-4 ${
                  active ?  'bg-[#EAB050] text-white' : 'text-gray-900'
                }`
              }
              value={option}
            >
              {({ selected }) => (
                <>
                  <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                    {option.value}
                  </span>
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}

export default CustomFilter
