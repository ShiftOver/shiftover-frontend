'use client';

import Image from 'next/image';

export type CardHolderReviewProps = {
    info?: any;
    path?: string;
    type: string;
    name: string;
    children?: React.ReactNode;
    full: boolean;
    collide?: boolean;
};

export default function CardHolderReview({
    info,
    path,
    type,
    name,
    children,
    full,
    collide,
}: CardHolderReviewProps) {
    let color;
    let textcolor;
    switch (type) {
        case 'NurseAssessmentForm':
            color = 'bg-shiftover-oldblue';
            textcolor = 'text-shiftover-oldgreen';
            break;
        case 'MonitoringNursingRecord':
            color = 'bg-shiftover-lightblue';
            textcolor = 'text-shiftover-mediumblue';
            break;
        case 'Medications':
            color = 'bg-shiftover-purple';
            textcolor = 'text-shiftover-mediumpurple';
            break;
        case 'Nursing':
            color = 'bg-shiftover-pink';
            textcolor = 'text-shiftover-redpink';
            break;
    }
    return (
        <div
            className={`relative flex flex-row rounded-[21.61px] bg-white ${full ? 'w-fit' : 'w-[269px]'} ${collide ? 'border border-[#ff0f0f]' : 'shadow-[0_2.4px_4.8px_0px_rgba(0,0,0,0.25)]'}`}
        >
            <div
                className={`${collide ? 'bg-[#ff0f0f]' : color} w-[24px] rounded-l-[21.61px]`}
            ></div>
            <div className='rounded-r-[21.61px] bg-white'>
                <div className='mx-[12px] my-[11px] flex flex-row items-center'>
                    {full && path ? (
                        <Image
                            src={'/assets/' + path + '.svg'}
                            alt='path'
                            className='fill-blue-500'
                            width={24}
                            height={24}
                        />
                    ) : (
                        <></>
                    )}
                    <div className={`text-heavyname ${textcolor} ml-[8px]`}>
                        {name}
                    </div>
                </div>
                {full ? (
                    <div className='flex-col text-cardnumber text-shiftover-cardtext'>
                        {children}
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}
