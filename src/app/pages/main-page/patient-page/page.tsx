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
        <div className='mx-[24px] mt-[28px]'>
            <button
                onClick={() => {
                    setPatient('');
                }}
            >
                <HeaderBlog name='My Ward' />
            </button>
            <div
                className={`transition-opacity duration-300 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {showContent ? (
                    <DragAndDrop name={patient} />
                ) : (
                    <div className='mt-[28px] grid grid-cols-4 gap-[42px] pb-[10px]'>
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
