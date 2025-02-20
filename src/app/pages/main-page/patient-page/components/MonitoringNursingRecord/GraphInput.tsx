'use client';
import { useState } from 'react';

export type GraphInputProps = {
    info?: any;
};

export default function GraphInput({ info }: GraphInputProps) {
    const [clicked, setClicked] = useState(false);
    const handleButton = () => {
        setClicked(!clicked);
    };
    return (
        <div className='mb-[28.63px] ml-[29.61px] mt-[12.99px] flex w-fit flex-row border-r-[1px] border-dashed border-[#828080] text-graph'>
            <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                    2
                </div>
                <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
            </div>
            <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                    6
                </div>
                <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
            </div>
            <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                    10
                </div>
                <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
            </div>
            <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                    14
                </div>
                <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
            </div>
            <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                    18
                </div>
                <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
            </div>
            <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                    22
                </div>
                <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
            </div>
        </div>
    );
}
