'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarStyles.css';

export type DateInputProps = {
    info?: any;
};

export default function DateInput({ info }: DateInputProps) {
    const [clicked, setClicked] = useState(false);
    const [date, setDate] = useState(new Date());
    const calendarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                calendarRef.current &&
                !calendarRef.current.contains(event.target as Node)
            ) {
                setClicked(false);
            }
        }

        if (clicked) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [clicked]);
    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    return (
        <div className='relative' ref={calendarRef}>
            <button
                onClick={() => {
                    setClicked(!clicked);
                }}
            >
                <div className='flex'>
                    Date:
                    {date.toLocaleDateString()}
                    <Image
                        className={`transition-transform ${
                            clicked ? 'rotate-180' : ''
                        } ml-[5px]`}
                        src='/assets/dropdowngray.svg'
                        alt='Settings'
                        width={9.5}
                        height={9.5}
                    />
                </div>
            </button>
            {clicked && (
                <div className='rounded absolute left-0 top-full z-50 mt-1 bg-white shadow-md'>
                    <Calendar
                        className='custom-calendar text-gray-500'
                        onChange={(newDate) => {
                            setDate(newDate as Date);
                            setClicked(false);
                        }}
                        value={date}
                        tileClassName='calendar-tile'
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                </div>
            )}
        </div>
    );
}
