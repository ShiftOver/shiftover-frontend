import { useState } from 'react';

export type NursingAssessmentFormProps = {
    id: any;
};

export default function NursingAssessmentForm({
    id,
}: NursingAssessmentFormProps) {
    const [subHeader, setSubHeader] = useState('Personal Data');
    return (
        <div className='mt-[10px] flex h-[26px] flex-row text-subheader text-shiftover-oldgreen'>
            <button
                className='w-[105.08px] shadow-[0_1.27px_1.27px_0px_rgba(0,0,0,0.25)]'
                onClick={() => {
                    setSubHeader('Personal Data');
                }}
            >
                Personal data
                {subHeader == 'Personal Data' ? (
                    <div className='absolute mt-[3.1px] w-[105.08px] rounded-[1.9px] border-[1.9px] border-solid border-[rgba(139,185,191,1)]'></div>
                ) : (
                    <></>
                )}
            </button>
            <button
                className='w-[140px] shadow-[0_1.27px_1.27px_0px_rgba(0,0,0,0.25)]'
                onClick={() => {
                    setSubHeader('Spiritual/ Nutritional');
                }}
            >
                Spiritual/ Nutritional
                {subHeader == 'Spiritual/ Nutritional' ? (
                    <div className='absolute mt-[3.1px] w-[140px] rounded-[1.9px] border-[1.9px] border-solid border-[rgba(139,185,191,1)]'></div>
                ) : (
                    <></>
                )}
            </button>
            <button
                className='w-[53.94px] shadow-[0_1.27px_1.27px_0px_rgba(0,0,0,0.25)]'
                onClick={() => {
                    setSubHeader('Skin');
                }}
            >
                Skin
                {subHeader == 'Skin' ? (
                    <div className='absolute mt-[3.1px] w-[53.94px] rounded-[1.9px] border-[1.9px] border-solid border-[rgba(139,185,191,1)]'></div>
                ) : (
                    <></>
                )}
            </button>
            <button
                className='w-[127.4px] shadow-[0_1.27px_1.27px_0px_rgba(0,0,0,0.25)]'
                onClick={() => {
                    setSubHeader('Cardiopulmonary');
                }}
            >
                Cardiopulmonary
                {subHeader == 'Cardiopulmonary' ? (
                    <div className='absolute mt-[3.1px] w-[127.4px] rounded-[1.9px] border-[1.9px] border-solid border-[rgba(139,185,191,1)]'></div>
                ) : (
                    <></>
                )}
            </button>
            <button
                className='w-[115.31px] shadow-[0_1.27px_1.27px_0px_rgba(0,0,0,0.25)]'
                onClick={() => {
                    setSubHeader('Neuromuscular');
                }}
            >
                Neuromuscular
                {subHeader == 'Neuromuscular' ? (
                    <div className='absolute mt-[3.1px] w-[115.31px] rounded-[1.9px] border-[1.9px] border-solid border-[rgba(139,185,191,1)]'></div>
                ) : (
                    <></>
                )}
            </button>
            <button
                className='w-[127px] shadow-[0_1.27px_1.27px_0px_rgba(0,0,0,0.25)]'
                onClick={() => {
                    setSubHeader('Mobility/ Teaching');
                }}
            >
                Mobility/ Teaching
                {subHeader == 'Mobility/ Teaching' ? (
                    <div className='absolute mt-[3.1px] w-[127px] rounded-[1.9px] border-[1.9px] border-solid border-[rgba(139,185,191,1)]'></div>
                ) : (
                    <></>
                )}
            </button>
            <button
                className='w-[185px] shadow-[0_1.27px_1.27px_0px_rgba(0,0,0,0.25)]'
                onClick={() => {
                    setSubHeader('Elimination/ Pain Management');
                }}
            >
                Elimination/ Pain Management
                {subHeader == 'Elimination/ Pain Management' ? (
                    <div className='absolute mt-[3.1px] w-[185px] rounded-[1.9px] border-[1.9px] border-solid border-[rgba(139,185,191,1)]'></div>
                ) : (
                    <></>
                )}
            </button>
            <button
                className='w-[86.48px] shadow-[0_1.27px_1.27px_0px_rgba(0,0,0,0.25)]'
                onClick={() => {
                    setSubHeader('Discharge');
                }}
            >
                Discharge
                {subHeader == 'Discharge' ? (
                    <div className='absolute mt-[3.1px] w-[86.48px] rounded-[1.9px] border-[1.9px] border-solid border-[rgba(139,185,191,1)]'></div>
                ) : (
                    <></>
                )}
            </button>
        </div>
    );
}
