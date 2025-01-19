import { useState } from 'react';

export type ChartReviewProps = {
    id: any;
};

export default function ChartReview({ id }: ChartReviewProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className='relative'>
            <button
                onClick={() => setOpen(!open)}
                className='fixed right-[25px] top-[163px] flex h-[42px] w-[42px] items-center justify-center rounded-[200px] bg-shiftover-blue shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'
            >
                <img
                    src='/assets/plus.svg'
                    alt='plus'
                    className='fill-blue-500 h-6 w-6'
                />
            </button>
            <div className='h-[1000px]'></div>
            {open ? (
                <div className='absolute right-[0px] top-[0px] z-50 h-[697px] w-[321px] rounded-l-[39px] bg-white shadow-[0_2px_2px_0_rgba(0,0,0,0.25)]'>
                    <button
                        onClick={() => setOpen(!open)}
                        className='ml-[25px] mt-[28px] flex h-[42px] w-[42px] items-center justify-center rounded-[200px] bg-shiftover-blue shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'
                    >
                        <img
                            src='/assets/minus.svg'
                            alt='minus'
                            className='fill-blue-500 h-6 w-6'
                        />
                    </button>
                    <div className='ml-[15px] mt-[41px] text-heavyname'>
                        <div>Nursing Assessment Form</div>
                        <div>Monitoring Nursing Record</div>
                        <div>Medications</div>
                        <div>Nursing</div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
