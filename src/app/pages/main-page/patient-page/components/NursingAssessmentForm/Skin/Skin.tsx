import { useEffect, useState } from 'react';
import CardHolder from '../../CardHolder';

export type SkinProps = {
    id: any;
};

export default function Skin({ id }: SkinProps) {
    const [age, setAge] = useState('Adult');
    const [details, setDetails] = useState('');
    useEffect(() => {
        switch (age) {
            case 'Adult':
                setDetails('big');
                break;
            case 'Pediatric':
                setDetails('small');
                break;
        }
    }, [age, id]);
    return (
        <div>
            <div className='mt-[12.98px] flex h-[26px] flex-row text-subheader text-shiftover-oldgreen'>
                <button
                    className='w-[105.08px] shadow-[0_1.27px_1.27px_0px_rgba(0,0,0,0.25)]'
                    onClick={() => {
                        setAge('Adult');
                    }}
                >
                    Adult
                    {age == 'Adult' ? (
                        <div className='absolute mt-[3.2px] w-[105.08px] rounded-[1.9px] border-[1.9px] border-solid border-[rgba(139,185,191,1)]'></div>
                    ) : (
                        <></>
                    )}
                </button>
                <button
                    className='w-[105.08px] shadow-[0_1.27px_1.27px_0px_rgba(0,0,0,0.25)]'
                    onClick={() => {
                        setAge('Pediatric');
                    }}
                >
                    Pediatric
                    {age == 'Pediatric' ? (
                        <div className='absolute mt-[3.2px] w-[105px] rounded-[1.9px] border-[1.9px] border-solid border-[rgba(139,185,191,1)]'></div>
                    ) : (
                        <></>
                    )}
                </button>
            </div>
            <div className='ml-[29px] mr-[29px] mt-[22px]'>
                <CardHolder path='human' type='NurseAssessmentForm' name='Skin'>
                    <div className='ml-[14px] flex w-[986px] flex-col gap-[12px]'></div>
                </CardHolder>
            </div>
        </div>
    );
}
