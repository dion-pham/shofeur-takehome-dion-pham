'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateFilterProps } from '@/types';

const DateFilter = ({ selectedDate, onChange }: DateFilterProps) => {
    const [date, setDate] = useState<Date | null>(selectedDate);

    const handleDateChange = (selectedDate: Date | null) => {
        setDate(selectedDate);
        onChange(selectedDate);
    };

    return (
        <div className="date-filter">
            <label className="date-filter__label">Event date</label>
            <DatePicker
                className="date-filter__datepicker"
                selected={date}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select a date"
            />
        </div>
    );
};

export default DateFilter;
