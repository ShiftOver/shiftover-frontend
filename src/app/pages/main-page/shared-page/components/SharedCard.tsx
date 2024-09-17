'use client';
import { useState } from 'react';
import PatientCard from '../../components/PatientCard';

const wardroom = 'ICU';
const roomleft = 3;

export type SharedCardProps = {
    info?: any;
    room: number;
};

export default function SharedCard({ info, room }: SharedCardProps) {
    const [clicked, setClicked] = useState(false);
    const handleButton = () => {
        setClicked(!clicked);
    };
    return (
        <div
            className={`min-h-[58px] w-full rounded-[18px] bg-shiftover-blue font-shiftover-font transition-all duration-300 ${clicked ? 'text-white' : 'bg-white'}`}
        >
            <div className='flex flex-row justify-between px-[20px] pt-[17px]'>
                <p
                    className={`text-cardheader ${room ? '' : 'text-text-carddescription'}`}
                >
                    {wardroom}
                </p>
                {room ? (
                    <button
                        className={`flex flex-row ${clicked ? '' : 'text-text-carddescription'}`}
                        onClick={handleButton}
                    >
                        {room}
                        <div className='flex h-[24px] w-[24px] items-center justify-center'>
                            <img
                                className={`transition-transform ${
                                    clicked
                                        ? 'rotate-180 brightness-0 invert filter'
                                        : ''
                                }`}
                                src='/assets/dropdown.svg'
                                alt='Settings'
                            />
                        </div>
                    </button>
                ) : null}
            </div>
            <div
                className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${
                    clicked ? 'max-h-[500px]' : 'max-h-0'
                }`}
            >
                <div className='mx-[20px] mt-[10px] pb-[17px]'>
                    <div className='grid grid-cols-4 gap-x-[42px] gap-y-[17px]'>
                        <PatientCard info={{ id: 'id' }} />
                        <PatientCard info={{ id: 'id' }} />
                        <PatientCard info={{ id: 'id' }} />
                        <PatientCard info={{ id: 'id' }} />
                        <PatientCard info={{ id: 'id' }} />
                        <PatientCard info={{ id: 'id' }} />
                        <PatientCard info={{ id: 'id' }} />
                        <PatientCard info={{ id: 'id' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
