'use client';
import Image from 'next/image';
import { Children, useState } from 'react';

export type NursingListProps = {
    info?: any;
    name: any;
    children?: React.ReactNode;
};

export default function NursingList({
    info,
    name,
    children,
}: NursingListProps) {
    const [clicked, setClicked] = useState(false);
    const handleButton = () => {
        setClicked(!clicked);
    };
    return (
        <div
            className={`h-fit min-h-[58px] w-full rounded-[18px] border-[#b7b1b1] font-shiftover-font text-shiftover-redpink ${clicked ? 'border-[1px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]' : 'bg-shiftover-white-2'} z-10`}
        >
            <div className='flex flex-row justify-between px-[20px] pt-[17px]'>
                <p className={`text-cardheader`}>{name}</p>

                <button onClick={handleButton}>
                    <div className='flex h-[24px] w-[24px] items-center justify-center'>
                        <Image
                            className={`transition-transform ${
                                clicked ? 'rotate-180' : ''
                            }`}
                            src='/assets/dropdownpink.svg'
                            alt='Settings'
                            width={12}
                            height={12}
                        />
                    </div>
                </button>
            </div>
            <div
                className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${
                    clicked ? '' : 'max-h-0'
                }`}
            >
                {children}
            </div>
        </div>
    );
}
