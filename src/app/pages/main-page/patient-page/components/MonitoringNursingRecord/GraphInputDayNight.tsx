'use client';
import { useState } from 'react';

export type GraphInputDayNightProps = {
    data?: any;
    onChange?: any;
};

export default function GraphInputDayNight({
    onChange,
    data,
}: GraphInputDayNightProps) {
    const [clicked, setClicked] = useState(false);
    const handleButton = () => {
        setClicked(!clicked);
    };
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number,
        type: string
    ) => {
        const value = event.target.value
            ? parseFloat(event.target.value)
            : null;

        // Create a new array with the updated systoli value for the specific index (6).
        const newData = [...data];
        if (type == 'systoli') {
            newData[index] = {
                ...newData[index],
                systoli: value, // Update the systoli value with the input value.
            };
        } else if (type == 'diastoli') {
            newData[index] = {
                ...newData[index],
                diastoli: value, // Update the systoli value with the input value.
            };
        }

        // Call the onChange callback to update the parent state.
        onChange(newData);
    };
    return (
        <div className='flex flex-row'>
            <div className='mb-[28.63px] ml-[29.61px] mt-[12.99px] flex w-fit flex-row border-r-[1px] border-dashed border-[#828080] text-graph text-shiftover-cardtext'>
                <div className='flex h-[29.49px] w-[38.11px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                    <div className='w-[38.11px] border-b-[0.95px] border-[#828080] text-center'>
                        Morning
                    </div>
                    <input
                        type='number'
                        step='0.01'
                        className='h-[15.7px] w-[28.08px] border-b-[0.95px] border-[#828080] text-center'
                        value={data[6]?.systoli ?? ''}
                        onChange={(e) => {
                            handleInputChange(e, 6, 'systoli');
                        }}
                    />
                </div>
                <div className='flex h-[29.49px] w-[38.11px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                    <div className='w-[38.11px] border-b-[0.95px] border-[#828080] text-center'>
                        Night
                    </div>
                    <input
                        type='number'
                        className='h-[15.7px] w-[28.08px] border-b-[0.95px] border-[#828080] text-center'
                        value={data[7]?.systoli ?? ''}
                        onChange={(e) => {
                            handleInputChange(e, 7, 'systoli');
                        }}
                    />
                </div>
            </div>
            <div className='mb-[28.63px] ml-[29.61px] mt-[12.99px] flex w-fit flex-row border-r-[1px] border-dashed border-[#828080] text-graph text-shiftover-cardtext'>
                <div className='flex h-[29.49px] w-[38.11px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                    <div className='w-[38.11px] border-b-[0.95px] border-[#828080] text-center'>
                        Morning
                    </div>
                    <input
                        type='number'
                        step='0.01'
                        className='h-[15.7px] w-[28.08px] border-b-[0.95px] border-[#828080] text-center'
                        value={data[6]?.diastoli ?? ''}
                        onChange={(e) => {
                            handleInputChange(e, 6, 'diastoli');
                        }}
                    />
                </div>
                <div className='flex h-[29.49px] w-[38.11px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                    <div className='w-[38.11px] border-b-[0.95px] border-[#828080] text-center'>
                        Night
                    </div>
                    <input
                        type='number'
                        className='h-[15.7px] w-[28.08px] border-b-[0.95px] border-[#828080] text-center'
                        value={data[7]?.diastoli ?? ''}
                        onChange={(e) => {
                            handleInputChange(e, 7, 'diastoli');
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
