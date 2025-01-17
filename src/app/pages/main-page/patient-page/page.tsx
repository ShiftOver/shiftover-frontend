'use client';
import { useRecoilState } from 'recoil';
import PatientCard from '../components/PatientCard';
import HeaderBlog from '@/app/components/Header';
import { selectedPatient } from '@/recoil/atoms/main-page.atom';
import DragAndDrop from '../components/DragAndDrop';
import { useEffect, useState } from 'react';

export default function Main() {
    const [patient, setPatient] = useRecoilState<string>(selectedPatient);
    const [isVisible, setIsVisible] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (patient) {
            setIsVisible(false);
            setTimeout(() => {
                setShowContent(true);
                setIsVisible(true);
            }, 300);
        } else {
            setIsVisible(false);
            setTimeout(() => {
                setShowContent(false);
                setIsVisible(true);
            }, 300);
        }
    }, [patient]);

    return (
        <div className='flex h-full flex-col pt-[28px]'>
            <button
                className='flex-none px-[24px]'
                onClick={() => {
                    setPatient('');
                }}
            >
                <HeaderBlog name='My Ward' />
            </button>
            <div
                className={`flex h-max flex-1 transition-opacity duration-300 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {showContent ? (
                    <div className='mt-[13px] flex flex-1 flex-col justify-between rounded-bl-[39px]'>
                        <div className='flex-rowtext-patientHeader flex h-[39.5px] flex-none text-patientHeader'>
                            <button className=''>
                                <div className='h-[10px] w-[124px] rounded-t-[10px] bg-shiftover-blue'></div>
                                <div className='flex h-[29px] items-center justify-center bg-white text-shiftover-blue'>
                                    Chart Review
                                </div>
                            </button>
                            <button className=''>
                                <div className='h-[10px] w-[198px] rounded-t-[10px] bg-shiftover-blue'></div>
                                <div className='flex h-[29px] items-center justify-center bg-white text-shiftover-blue'>
                                    Nursing Assessment Form
                                </div>
                            </button>
                            <button className=''>
                                <div className='h-[10px] w-[202px] rounded-t-[10px] bg-shiftover-blue'></div>
                                <div className='flex h-[29px] items-center justify-center bg-white text-shiftover-blue'>
                                    Monitoring Nursing Record
                                </div>
                            </button>
                            <button className=''>
                                <div className='h-[10px] w-[103px] rounded-t-[10px] bg-shiftover-blue'></div>
                                <div className='flex h-[29px] items-center justify-center bg-white text-shiftover-blue'>
                                    Medications
                                </div>
                            </button>
                            <button className=''>
                                <div className='h-[10px] w-[73px] rounded-t-[10px] bg-shiftover-blue'></div>
                                <div className='flex h-[29px] items-center justify-center bg-white text-shiftover-blue'>
                                    Nursing
                                </div>
                            </button>
                            <button className=''>
                                <div className='h-[10px] w-[60px] rounded-t-[10px] bg-shiftover-blue'></div>
                                <div className='flex h-[29px] items-center justify-center bg-white text-shiftover-blue'>
                                    Notes
                                </div>
                            </button>
                        </div>
                        <div className='flex-1 bg-white'></div>
                    </div>
                ) : (
                    <div className='mt-[28px] grid grid-cols-4 gap-[42px] px-[24px] pb-[10px]'>
                        <PatientCard info={{ id: 'id' }} />
                        <PatientCard
                            info={{ name: 'thanapong', gender: 'F' }}
                        />
                        <PatientCard />
                        <PatientCard />
                    </div>
                )}
            </div>
        </div>
    );
}
