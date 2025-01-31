'use client';
import { useRecoilState } from 'recoil';
import PatientCard from '../components/PatientCard';
import HeaderBlog from '@/app/components/Header';
import { selectedPatient } from '@/recoil/atoms/main-page.atom';
import { useEffect, useState } from 'react';
import MonitoringNuringRecord from './components/MonitoringNursingRecord/MonitoringNursingRecord';
import ChartReview from './components/ChartReview/ChartReview';
import NursingAssessmentForm from './components/NursingAssessmentForm/NursingAssessmentForm';
import Medications from './components/Medications/Medications';
import Nursing from './components/Nursing/Nursing';
import Notes from './components/Notes/Notes';

export default function Main() {
    const [patient, setPatient] = useRecoilState<string>(selectedPatient);
    const [isVisible, setIsVisible] = useState(true);
    const [showContent, setShowContent] = useState(false);
    const [header, setHeader] = useState('Form');
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

    const [details, setDetails] = useState(<></>);

    useEffect(() => {
        switch (header) {
            case 'Review':
                setDetails(<ChartReview id={patient}></ChartReview>);
                break;
            case 'Form':
                setDetails(
                    <NursingAssessmentForm id={patient}></NursingAssessmentForm>
                );
                break;
            case 'Record':
                setDetails(
                    <MonitoringNuringRecord
                        id={patient}
                    ></MonitoringNuringRecord>
                );
                break;
            case 'Medications':
                setDetails(<Medications id={patient}></Medications>);
                break;
            case 'Nursing':
                setDetails(<Nursing id={patient}></Nursing>);
                break;
            case 'Notes':
                setDetails(<Notes id={patient}></Notes>);
                break;
        }
    }, [header, patient]);

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
                        <div className='flex h-[39.5px] flex-none flex-row tracking-tight'>
                            {header == 'Review' ? (
                                <div className=''>
                                    <div className='h-[10px] w-[124px] rounded-t-[10px] bg-shiftover-blue'></div>
                                    <div className='flex h-[29.5px] items-center justify-center border-r border-[#F5F2F2] bg-white text-cardname text-shiftover-blue'>
                                        Chart Review
                                    </div>
                                </div>
                            ) : (
                                <button
                                    className='mt-[10px] flex h-[29.5px] w-[110px] items-center justify-center rounded-tl-[10px] border-b border-r border-[#F5F2F2] bg-white text-cardnumber text-shiftover-gray-text'
                                    onClick={() => {
                                        setHeader('Review');
                                    }}
                                >
                                    Chart Review
                                </button>
                            )}
                            {header == 'Form' ? (
                                <div className=''>
                                    <div className='h-[10px] w-[227px] rounded-t-[10px] bg-shiftover-oldgreen'></div>
                                    <div className='flex h-[29.5px] items-center justify-center border-r border-[#F5F2F2] bg-white text-cardname text-shiftover-oldgreen'>
                                        Nursing Assessment Form
                                    </div>
                                </div>
                            ) : (
                                <button
                                    className='mt-[10px] flex h-[29.5px] w-[198px] items-center justify-center border-b border-r border-[#F5F2F2] bg-white text-cardnumber text-shiftover-gray-text'
                                    onClick={() => {
                                        setHeader('Form');
                                    }}
                                >
                                    Nursing Assessment Form
                                </button>
                            )}
                            {header == 'Record' ? (
                                <div className=''>
                                    <div className='h-[10px] w-[231px] rounded-t-[10px] bg-shiftover-lightblue'></div>
                                    <div className='flex h-[29.5px] items-center justify-center border-r border-[#F5F2F2] bg-white text-cardname text-shiftover-lightblue'>
                                        Monitoring Nursing Record
                                    </div>
                                </div>
                            ) : (
                                <button
                                    className='mt-[10px] flex h-[29.5px] w-[202px] items-center justify-center border-b border-r border-[#F5F2F2] bg-white text-cardnumber text-shiftover-gray-text'
                                    onClick={() => {
                                        setHeader('Record');
                                    }}
                                >
                                    Monitoring Nursing Record
                                </button>
                            )}
                            {header == 'Medications' ? (
                                <div className=''>
                                    <div className='h-[10px] w-[116px] rounded-t-[10px] bg-shiftover-purple'></div>
                                    <div className='flex h-[29.5px] items-center justify-center border-r border-[#F5F2F2] bg-white text-cardname text-shiftover-purple'>
                                        Medications
                                    </div>
                                </div>
                            ) : (
                                <button
                                    className='mt-[10px] flex h-[29.5px] w-[103px] items-center justify-center border-b border-r border-[#F5F2F2] bg-white text-cardnumber text-shiftover-gray-text'
                                    onClick={() => {
                                        setHeader('Medications');
                                    }}
                                >
                                    Medications
                                </button>
                            )}
                            {header == 'Nursing' ? (
                                <div className=''>
                                    <div className='h-[10px] w-[82px] rounded-t-[10px] bg-shiftover-pink'></div>
                                    <div className='flex h-[29.5px] items-center justify-center border-r border-[#F5F2F2] bg-white text-cardname text-shiftover-pink'>
                                        Nursing
                                    </div>
                                </div>
                            ) : (
                                <button
                                    className='mt-[10px] flex h-[29.5px] w-[73px] items-center justify-center border-b border-r border-[#F5F2F2] bg-white text-cardnumber text-shiftover-gray-text'
                                    onClick={() => {
                                        setHeader('Nursing');
                                    }}
                                >
                                    Nursing
                                </button>
                            )}
                            {header == 'Notes' ? (
                                <div className=''>
                                    <div className='h-[10px] w-[67px] rounded-t-[10px] bg-shiftover-oldpurple'></div>
                                    <div className='flex h-[29.5px] items-center justify-center bg-white text-cardname text-shiftover-oldpurple'>
                                        Notes
                                    </div>
                                </div>
                            ) : (
                                <button
                                    className='mt-[10px] flex h-[29.5px] w-[60px] items-center justify-center rounded-tr-[10px] border-b border-r border-[#F5F2F2] bg-white text-cardnumber text-shiftover-gray-text'
                                    onClick={() => {
                                        setHeader('Notes');
                                    }}
                                >
                                    Notes
                                </button>
                            )}
                        </div>
                        <div className='flex-1 rounded-bl-[39px] bg-white'>
                            {details}
                        </div>
                    </div>
                ) : (
                    <div className='mt-[28px] grid grid-cols-4 gap-[42px] px-[24px] pb-[10px]'>
                        <PatientCard info={{ id: 'id' }} />
                        <PatientCard
                            info={{ name: 'thanapong', gender: 'F' }}
                        />
                        <PatientCard />
                        <PatientCard />
                        <PatientCard />
                        <PatientCard />
                        <PatientCard />
                        <PatientCard />
                        <PatientCard />
                        <PatientCard />
                        <PatientCard />
                        <PatientCard />
                        <PatientCard />
                        <PatientCard />
                        <PatientCard />
                        <PatientCard />
                        <PatientCard />
                        <PatientCard />
                        <PatientCard />
                        <PatientCard />
                    </div>
                )}
            </div>
        </div>
    );
}
