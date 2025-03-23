'use client';
import { useRecoilState } from 'recoil';
import PatientCard from '../components/PatientCard';
import HeaderBlog from '@/app/components/Header';
import { selectedPatient } from '@/recoil/atoms/main-page.atom';
import { useEffect, useState } from 'react';
import NursingAssessmentForm from './components/NursingAssessmentForm/NursingAssessmentForm';

export default function Main() {
    const [patient, setPatient] = useRecoilState<string>(selectedPatient);
    const [showContent, setShowContent] = useState(false);
    const [patientList, setPatientList] = useState(['1', '2', '3']);
    const roomCapacity = 7;
    useEffect(() => {
        if (patient == 'creating') {
            setShowContent(true);
        } else {
            setShowContent(false);
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
                className={`flex h-max flex-1 transition-opacity duration-300`}
            >
                {showContent ? (
                    <div className='mt-[13px] flex flex-1 flex-col justify-between rounded-bl-[39px]'>
                        <div className='relative flex h-[39.5px] flex-none flex-row tracking-tight'>
                            <div className='mt-[10px] flex h-[29.5px] w-[110px] items-center justify-center rounded-tl-[10px] border-b border-r border-[#F5F2F2] bg-white text-cardnumber text-shiftover-gray-text'>
                                Chart Review
                            </div>

                            <div className=''>
                                <div className='h-[10px] w-[227px] rounded-t-[10px] bg-shiftover-oldgreen'></div>
                                <div className='flex h-[29.5px] items-center justify-center border-r border-[#F5F2F2] bg-white text-cardname text-shiftover-oldgreen'>
                                    Nursing Assessment Form
                                </div>
                            </div>

                            <div className='mt-[10px] flex h-[29.5px] w-[202px] items-center justify-center border-b border-r border-[#F5F2F2] bg-white text-cardnumber text-shiftover-gray-text'>
                                Monitoring Nursing Record
                            </div>

                            <div className='mt-[10px] flex h-[29.5px] w-[103px] items-center justify-center border-b border-r border-[#F5F2F2] bg-white text-cardnumber text-shiftover-gray-text'>
                                Medications
                            </div>

                            <div
                                className={`mt-[10px] flex h-[29.5px] w-[73px] items-center justify-center border-b border-r border-[#F5F2F2] bg-white text-cardnumber text-shiftover-gray-text`}
                            >
                                Nursing
                            </div>

                            <div className='mt-[10px] flex h-[29.5px] w-[60px] items-center justify-center rounded-tr-[10px] border-b border-r border-[#F5F2F2] bg-white text-cardnumber text-shiftover-gray-text'>
                                Notes
                            </div>
                        </div>

                        <div className='flex h-full flex-row justify-between'>
                            <div className='w-[700px] flex-1 overflow-x-auto rounded-bl-[39px] bg-white'>
                                <NursingAssessmentForm></NursingAssessmentForm>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='mt-[28px] grid h-fit grid-cols-4 gap-[42px] px-[24px] pb-[10px]'>
                        {Array.from({ length: roomCapacity }).map(
                            (_, index) => (
                                <PatientCard
                                    id={patientList[index] || ''}
                                    key={index}
                                />
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
