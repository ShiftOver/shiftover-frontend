'use client';
import { useRecoilState } from 'recoil';
import HeaderBlog from '@/app/components/Header';
import { selectedPatient } from '@/recoil/atoms/main-page.atom';
import { useEffect, useState } from 'react';
import MonitoringNuringRecord from '../components/MonitoringNursingRecord/MonitoringNursingRecord';
import ChartReview from '../components/ChartReview/ChartReview2';
import NursingAssessmentForm from '../components/NursingAssessmentForm/NursingAssessmentForm';
import Medications from '../components/Medications/Medications';
import Nursing from '../components/Nursing/Nursing';
import Notes from '../components/Notes/Notes';
import { DndContext } from '@dnd-kit/core';
import { DropNote } from '../components/DropNote';
import { DragNote } from '../components/DragNote';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import { useParams, useRouter } from 'next/navigation';

export default function Main() {
    const params = useParams();
    const router = useRouter();
    const [patient, setPatient] = useRecoilState<string>(selectedPatient);
    const [header, setHeader] = useState('Review');
    const [previousheader, setPreviousHeader] = useState('Review');
    const [isDrag, setIsDrag] = useState(false);
    const [isDrop, setIsDrop] = useState(false);

    useEffect(() => {
        if (params?.id) {
            setPatient(params.id as string); // Set patient from URL
        } else {
            setPatient('');
        }
    }, [params]);

    useEffect(() => {
        if (patient != '') {
        } else {
            setHeader('Form');
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

    function handleDragStart(event: any) {
        setIsDrag(true);
        if (!isDrop) {
            if (header != 'Notes') {
                setPreviousHeader(header);
            }
            setHeader('Notes');
        }
    }

    function handleDragEnd(event: any) {
        if (event.over && event.over.id) {
            setIsDrop(true);
            if (previousheader) {
                setHeader(previousheader);
                setPreviousHeader('');
            }
        } else {
            setIsDrop(false);
        }

        setIsDrag(false);
    }
    return (
        <div className='flex h-full flex-col pt-[28px]'>
            <button
                className='flex-none px-[24px]'
                onClick={() => {
                    setPatient('');
                    router.push('/pages/main-page/patient-page');
                }}
            >
                <HeaderBlog name='My Ward' />
            </button>
            <div
                className={`flex h-max flex-1 transition-opacity duration-300`}
            >
                <div className='mt-[13px] flex flex-1 flex-col justify-between rounded-bl-[39px]'>
                    <DndContext
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        modifiers={[restrictToHorizontalAxis]}
                    >
                        <div className='relative flex h-[39.5px] flex-none flex-row tracking-tight'>
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
                                        setPreviousHeader('Review');
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
                                        setPreviousHeader('Form');
                                        setIsDrop(false);
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
                                        setPreviousHeader('Record');
                                        setIsDrop(false);
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
                                        setPreviousHeader('Medications');
                                        setIsDrop(false);
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
                                    className={`mt-[10px] flex h-[29.5px] w-[73px] items-center justify-center border-b border-r ${isDrop ? 'rounded-tr-[10px]' : ''} border-[#F5F2F2] bg-white text-cardnumber text-shiftover-gray-text`}
                                    onClick={() => {
                                        setHeader('Nursing');
                                        setPreviousHeader('Nursing');
                                        setIsDrop(false);
                                    }}
                                >
                                    Nursing
                                </button>
                            )}
                            {isDrop ? null : previousheader != 'Review' ? (
                                header == 'Notes' ? (
                                    <div>
                                        <div className='h-[10px] w-[67px] rounded-t-[10px] bg-shiftover-oldpurple'></div>
                                        <div className='flex h-[29.5px] items-center justify-center bg-white text-cardname text-shiftover-oldpurple'>
                                            Notes
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => {
                                            setHeader('Notes');
                                        }}
                                    >
                                        <div className='mt-[10px] flex h-[29.5px] w-[60px] items-center justify-center rounded-tr-[10px] border-b border-r border-[#F5F2F2] bg-white text-cardnumber text-shiftover-gray-text'>
                                            Notes
                                        </div>
                                    </button>
                                )
                            ) : (
                                <DragNote id='Drag Note'>
                                    {isDrag || header == 'Notes' ? (
                                        <div>
                                            <div className='h-[10px] w-[67px] rounded-t-[10px] bg-shiftover-oldpurple'></div>
                                            <div className='flex h-[29.5px] items-center justify-center bg-white text-cardname text-shiftover-oldpurple'>
                                                Notes
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='mt-[10px] flex h-[29.5px] w-[60px] items-center justify-center rounded-tr-[10px] border-b border-r border-[#F5F2F2] bg-white text-cardnumber text-shiftover-gray-text'>
                                            Notes
                                        </div>
                                    )}
                                </DragNote>
                            )}
                            <DropNote
                                id='Drop Note'
                                style={' h-full w-[326px]  right-[0px]'}
                            >
                                {isDrop ? (
                                    <DragNote id='Drag Note'>
                                        <div>
                                            <div className='h-[10px] w-[67px] rounded-t-[10px] bg-shiftover-oldpurple'></div>
                                            <div className='flex h-[29.5px] items-center justify-center bg-white text-cardname text-shiftover-oldpurple'>
                                                Notes
                                            </div>
                                        </div>
                                    </DragNote>
                                ) : null}
                            </DropNote>
                        </div>
                    </DndContext>
                    <div className='flex h-full flex-row justify-between'>
                        <div className='w-[700px] flex-1 overflow-x-auto rounded-bl-[39px] bg-white'>
                            {details}
                        </div>
                        {isDrop ? (
                            <div className='right-[0px] z-50 h-full w-[326px] bg-[#fff]'>
                                <div className='flex h-full flex-col'>
                                    <div className='ml-[10px] mt-[11px]'>
                                        <p className='text-cardname text-shiftover-pinkpurple'>
                                            My Note
                                        </p>
                                        <div className='m-[6px] flex h-[36px] w-[294px] flex-row items-center rounded-[10px] bg-[#f5f2f2]'>
                                            <img
                                                src='/assets/searchGlyph.svg'
                                                alt='Search Glyph'
                                                className='ml-[8px] h-[22px] w-[22px]'
                                            />
                                            <input className='ml-[3px] w-[236px] bg-[#f5f2f2]'></input>
                                            <button>
                                                <img
                                                    src='/assets/microphone.svg'
                                                    alt='Microphone'
                                                    className='h-[22px] w-[22px]'
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='m-[15px] flex-grow overflow-scroll border-[1px] border-[#f5f2f2]'></div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
