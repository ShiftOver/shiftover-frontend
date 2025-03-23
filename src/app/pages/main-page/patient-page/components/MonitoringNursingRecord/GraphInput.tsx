'use client';
import { useState } from 'react';

export type GraphInputProps = {
    data?: any;
    onChange?: any;
};

export default function GraphInput({ onChange, data }: GraphInputProps) {
    const [clicked, setClicked] = useState(false);
    const handleButton = () => {
        setClicked(!clicked);
    };
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const value = event.target.value
            ? parseFloat(event.target.value)
            : null;

        // Create a new array with the updated hr value for the specific index (6).
        const newData = [...data];
        newData[index] = {
            ...newData[index],
            hr: value, // Update the hr value with the input value.
        };

        // Call the onChange callback to update the parent state.
        onChange(newData);
    };
    return (
        <div className='mb-[28.63px] ml-[29.61px] mt-[12.99px] flex w-fit flex-row border-r-[1px] border-dashed border-[#828080] text-graph'>
            <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                    2
                </div>
                <input
                    type='number'
                    step='0.01'
                    className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center'
                    value={data[6]?.hr ?? ''}
                    onChange={(e) => {
                        handleInputChange(e, 6);
                    }}
                />
            </div>
            <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                    6
                </div>
                <input
                    type='number'
                    className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center'
                    value={data[7]?.hr ?? ''}
                    onChange={(e) => {
                        handleInputChange(e, 7);
                    }}
                />
            </div>
            <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                    10
                </div>
                <input
                    type='number'
                    className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center'
                    value={data[8]?.hr ?? ''}
                    onChange={(e) => {
                        handleInputChange(e, 8);
                    }}
                />
            </div>
            <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                    14
                </div>
                <input
                    type='number'
                    className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center'
                    value={data[9]?.hr ?? ''}
                    onChange={(e) => {
                        handleInputChange(e, 9);
                    }}
                />
            </div>
            <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                    18
                </div>
                <input
                    type='number'
                    className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center'
                    value={data[10]?.hr ?? ''}
                    onChange={(e) => {
                        handleInputChange(e, 10);
                    }}
                />
            </div>
            <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                    22
                </div>
                <input
                    type='number'
                    className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center'
                    value={data[11]?.hr ?? ''}
                    onChange={(e) => {
                        handleInputChange(e, 11);
                    }}
                />
            </div>
        </div>
    );
}
