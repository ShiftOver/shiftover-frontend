'use client';
import Image from 'next/image';
import { useState } from 'react';

export type DateInputProps = {
    info?: any;
};

export default function DateInput({ info }: DateInputProps) {
    const [clicked, setClicked] = useState(false);
    const [date, setDate] = useState(new Date());
    const handleButton = () => {
        setClicked(!clicked);
    };
    return (
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
                    } ml-[5px] w-[9.5px]`}
                    src='/assets/dropdowngray.svg'
                    alt='Settings'
                />
            </div>
        </button>
    );
}
