'use client';
import ThreeDotPopUp from '@/app/components/ThreeDotPopUp';
import { useEffect, useRef, useState } from 'react';
import { selectedPatient, selectedRoom } from '@/recoil/atoms';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

const room = '101';
const name = 'Mr Henry G';
const gender = 'F';
const age = '23';
const patientNo = 'HN# 000001';
export type PatientCardProps = {
    id?: string;
    room: string;
};
export default function PatientCard({ id, room }: PatientCardProps) {
    const [clicked, setClicked] = useState(false);
    const popUpRef = useRef<HTMLDivElement>(null);
    const [, setPatient] = useRecoilState<string>(selectedPatient);
    const [, setRoom] = useRecoilState<string>(selectedRoom);
    const router = useRouter();
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
                    Room {id ? room : 'No.'}
                </p>
                {id ? (
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
                                className='fixed z-20 ml-[35px] mt-[-13px] text-text-carddescription'
                                ref={popUpRef}
                            >
                                <ThreeDotPopUp option={['asd', 'asw', 'as']} />
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>
            {id ? (
                <button
                    className='pt-[5px]'
                    onClick={() => {
                        setRoom(room);
                        router.push(`/pages/main-page/patient-page/${id}`);
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
                    <button
                        onClick={() => {
                            setRoom(room);
                            setPatient('creating');
                        }}
                    >
                        <img src='/assets/addcircle.svg' alt='Settings' />
                    </button>
                </div>
            )}
        </div>
    );
}
