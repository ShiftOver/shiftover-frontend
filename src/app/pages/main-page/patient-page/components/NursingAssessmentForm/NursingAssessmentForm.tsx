import { useEffect, useState } from 'react';
import PersonalData from './PersonalData/PersonalData';
import Skin from './Skin/Skin';
import SpiritualNutritional from './SpiritualNutritional/SpiritualNutritional';
import Cardiopulmonary from './Cardiopulmonary/Cardiopulmonary';
import Neuromuscular from './Neuromuscular/Neuromuscular';
import MobilityTeaching from './MobilityTeaching/MobilityTeaching';
import EliminationPainManagement from './EliminationPainManagement/EliminationPainManagement';
import Discharge from './Discharge/Discharge';

export type NursingAssessmentFormProps = {
    id: any;
};

export default function NursingAssessmentForm({
    id,
}: NursingAssessmentFormProps) {
    const [subHeader, setSubHeader] = useState('Personal Data');
    const [details, setDetails] = useState(<></>);
    useEffect(() => {
        switch (subHeader) {
            case 'Personal Data':
                setDetails(<PersonalData id={id}></PersonalData>);
                break;
            case 'Spiritual/ Nutritional':
                setDetails(
                    <SpiritualNutritional id={id}></SpiritualNutritional>
                );
                break;
            case 'Skin':
                setDetails(<Skin id={id}></Skin>);
                break;
            case 'Cardiopulmonary':
                setDetails(<Cardiopulmonary id={id}></Cardiopulmonary>);
                break;
            case 'Neuromuscular':
                setDetails(<Neuromuscular id={id}></Neuromuscular>);
                break;
            case 'Mobility/ Teaching':
                setDetails(<MobilityTeaching id={id}></MobilityTeaching>);
                break;
            case 'Elimination/ Pain Management':
                setDetails(
                    <EliminationPainManagement
                        id={id}
                    ></EliminationPainManagement>
                );
                break;
            case 'Discharge':
                setDetails(<Discharge id={id}></Discharge>);
                break;
        }
    }, [subHeader, id]);
    return (
        <div>
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
            <div className='mr-[29px]'>{details}</div>
        </div>
    );
}
