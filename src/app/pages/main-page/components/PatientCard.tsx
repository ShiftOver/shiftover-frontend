'use client';
import ThreeDotPopUp from '@/app/components/ThreeDotPopUp';
import { useEffect, useRef, useState } from 'react';
import { selectedPatient } from '@/recoil/atoms/main-page.atom';
import { useRecoilState } from 'recoil';

const room = '101';
const name = 'Mr Henry G';
const gender = 'F';
const age = '23';
const patientNo = 'HN# 000001';
export type PatientCardProps = {
    info?: any;
};
export default function PatientCard({ info }: PatientCardProps) {
    const [clicked, setClicked] = useState(false);
    const popUpRef = useRef<HTMLDivElement>(null);
    const [, setPatient] = useRecoilState<string>(selectedPatient);
    const handleClickOutside = (event: MouseEvent) => {
        if (
            popUpRef.current &&
            !popUpRef.current.contains(event.target as Node)
        ) {
            setClicked(false);
        }
    };
    useEffect(() => {
        if (clicked) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [clicked]);

    return (
        <div className='relative h-129 min-w-[229px] max-w-[280px] rounded-21 bg-white font-shiftover-font shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'>
            <div className='flex flex-row justify-between pl-15 pr-18 pt-13'>
                <p className='text-cardheader text-text-cardheader'>
                    Room {info ? room : 'No.'}
                </p>
                {info ? (
                    <div className='flex'>
                        <button
                            onClick={() => {
                                setClicked(!clicked);
                            }}
                        >
                            <img
                                src='/assets/threeHorizonDots.svg'
                                alt='Settings'
                            />
                        </button>
                        {clicked ? (
                            <div
                                className='fixed z-50 ml-[35px] mt-[-13px] text-text-carddescription'
                                ref={popUpRef}
                            >
                                <ThreeDotPopUp option={['asd', 'asw', 'as']} />
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>
            {info ? (
                <button
                    className='pt-[5px]'
                    onClick={() => {
                        setPatient(name);
                    }}
                >
                    <div className='flex flex-row pl-[15px] pt-[2px] text-text-carddescription'>
                        <img
                            src='https://picsum.photos/id/237/200/300'
                            className='border-full h-54 w-54'
                        />
                        <div className='justify-items-start pl-[14px] pt-[2px] text-left'>
                            <p className='text-cardname'>{name}</p>
                            <p className='text-carddescription'>
                                Gender: {gender}
                            </p>
                            <p className='text-carddescription'>Age: {age}</p>
                        </div>
                    </div>
                    <div className='pt-[5px] text-cardnumber text-text-carddescription'>
                        Patient {patientNo}
                    </div>
                </button>
            ) : (
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                    <button>
                        <img src='/assets/addcircle.svg' alt='Settings' />
                    </button>
                </div>
            )}
        </div>
    );
}
