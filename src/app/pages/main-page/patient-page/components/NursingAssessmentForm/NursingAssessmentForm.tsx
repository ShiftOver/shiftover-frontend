import { useEffect, useState } from 'react';
import PersonalData from './PersonalData/PersonalData';
import Skin from './Skin/Skin';
import SpiritualNutritional from './SpiritualNutritional/SpiritualNutritional';
import Cardiopulmonary from './Cardiopulmonary/Cardiopulmonary';
import Neuromuscular from './Neuromuscular/Neuromuscular';
import MobilityTeaching from './MobilityTeaching/MobilityTeaching';
import EliminationPainManagement from './EliminationPainManagement/EliminationPainManagement';
import Discharge from './Discharge/Discharge';
import { getPatientAssessmentById, getPatientById } from '@/api';
import {
    selectedPersonalData,
    selectedSpiritual,
    selectedNutrition,
    selectedSkin,
    selectedPulmonary,
    selectedCardiovascular,
    selectedCardioCurrentTreatment,
    selectedNeurosensory,
    selectedMusculoskeletal,
    selectedMobility,
    selectedTeaching,
    selectedGastrointestinal,
    selectedGenitourinary,
    selectedPainManagement,
    selectedDischarge,
} from '@/recoil/atoms';
import { useRecoilCallback, useRecoilState } from 'recoil';

export type NursingAssessmentFormProps = {
    id?: any;
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
                    <SpiritualNutritional
                        id={id}
                        handleSubmit={handleSubmit}
                    ></SpiritualNutritional>
                );
                break;
            case 'Skin':
                setDetails(<Skin id={id} handleSubmit={handleSubmit}></Skin>);
                break;
            case 'Cardiopulmonary':
                setDetails(
                    <Cardiopulmonary
                        id={id}
                        handleSubmit={handleSubmit}
                    ></Cardiopulmonary>
                );
                break;
            case 'Neuromuscular':
                setDetails(
                    <Neuromuscular
                        id={id}
                        handleSubmit={handleSubmit}
                    ></Neuromuscular>
                );
                break;
            case 'Mobility/ Teaching':
                setDetails(
                    <MobilityTeaching
                        id={id}
                        handleSubmit={handleSubmit}
                    ></MobilityTeaching>
                );
                break;
            case 'Elimination/ Pain Management':
                setDetails(
                    <EliminationPainManagement
                        id={id}
                        handleSubmit={handleSubmit}
                    ></EliminationPainManagement>
                );
                break;
            case 'Discharge':
                setDetails(
                    <Discharge id={id} handleSubmit={handleSubmit}></Discharge>
                );
                break;
        }
    }, [subHeader, id]);
    const [, setPersonalData] = useRecoilState<any>(selectedPersonalData);
    const [, setSpiritual] = useRecoilState<any>(selectedSpiritual);
    const [, setNutrition] = useRecoilState<any>(selectedNutrition);
    const [, setSkin] = useRecoilState<any>(selectedSkin);
    const [, setPulmonary] = useRecoilState<any>(selectedPulmonary);
    const [, setCardiovascular] = useRecoilState<any>(selectedCardiovascular);
    const [, setCardioCurrentTreatment] = useRecoilState<any>(
        selectedCardioCurrentTreatment
    );
    const [, setNeurosensory] = useRecoilState<any>(selectedNeurosensory);
    const [, setMusculoskeletal] = useRecoilState<any>(selectedMusculoskeletal);
    const [, setMobility] = useRecoilState<any>(selectedMobility);
    const [, setTeaching] = useRecoilState<any>(selectedTeaching);
    const [, setGastrointestinal] = useRecoilState<any>(
        selectedGastrointestinal
    );
    const [, setGenitourinary] = useRecoilState<any>(selectedGenitourinary);
    const [, setPainManagement] = useRecoilState<any>(selectedPainManagement);
    const [, setDischarge] = useRecoilState<any>(selectedDischarge);
    useEffect(() => {
        const fetchPatientData = async () => {
            const patientData = await getPatientById(
                // id
                'PATIENT-20'
            );
            setPersonalData(patientData);
            try {
                const patientAssessmentData = await getPatientAssessmentById(
                    // id
                    'PATIENT-9'
                );
                setSpiritual(patientAssessmentData.spiritual);
                setNutrition(patientAssessmentData.nutrition);
                setSkin(patientAssessmentData.skin);
                setPulmonary(patientAssessmentData.pulmonary);
                setCardiovascular(patientAssessmentData.cardiovascular);
                setCardioCurrentTreatment(
                    patientAssessmentData.cardioCurrentTreatment
                );
                setNeurosensory(patientAssessmentData.neurosensory);
                setMusculoskeletal(patientAssessmentData.musculoskeletal);
                setMobility(patientAssessmentData.mobility);
                setTeaching(patientAssessmentData.teaching);
                setGastrointestinal(patientAssessmentData.gastrointestinal);
                setGenitourinary(patientAssessmentData.genitourinary);
                setPainManagement(patientAssessmentData.painManagement);
                setDischarge(patientAssessmentData.discharge);
            } catch (error) {
                console.warn('No patient assessment data found:', error);
            }
        };
        if (id) {
            fetchPatientData();
        } else {
            setPersonalData(null);
            setSpiritual(null);
            setNutrition(null);
            setSkin(null);
            setPulmonary(null);
            setCardiovascular(null);
            setCardioCurrentTreatment(null);
            setNeurosensory(null);
            setMusculoskeletal(null);
            setMobility(null);
            setTeaching(null);
            setGastrointestinal(null);
            setGenitourinary(null);
            setPainManagement(null);
            setDischarge(null);
        }
    }, []);
    const handleSubmit = useRecoilCallback(
        ({ snapshot }) =>
            async (e: React.FormEvent) => {
                e.preventDefault();

                const [
                    spiritual,
                    nutrition,
                    skin,
                    pulmonary,
                    cardiovascular,
                    cardioCurrentTreatment,
                    neurosensory,
                    musculoskeletal,
                    mobility,
                    teaching,
                    gastrointestinal,
                    genitourinary,
                    painManagement,
                    discharge,
                ] = await Promise.all([
                    snapshot.getPromise(selectedSpiritual),
                    snapshot.getPromise(selectedNutrition),
                    snapshot.getPromise(selectedSkin),
                    snapshot.getPromise(selectedPulmonary),
                    snapshot.getPromise(selectedCardiovascular),
                    snapshot.getPromise(selectedCardioCurrentTreatment),
                    snapshot.getPromise(selectedNeurosensory),
                    snapshot.getPromise(selectedMusculoskeletal),
                    snapshot.getPromise(selectedMobility),
                    snapshot.getPromise(selectedTeaching),
                    snapshot.getPromise(selectedGastrointestinal),
                    snapshot.getPromise(selectedGenitourinary),
                    snapshot.getPromise(selectedPainManagement),
                    snapshot.getPromise(selectedDischarge),
                ]);
                const form = {
                    patientId: 'PATIENT-9',
                    spiritual,
                    nutrition,
                    skin,
                    pulmonary,
                    cardiovascular,
                    cardioCurrentTreatment,
                    neurosensory,
                    musculoskeletal,
                    mobility,
                    teaching,
                    gastrointestinal,
                    genitourinary,
                    painManagement,
                    discharge,
                };
                console.log(form);
            }
    );
    return (
        <div>
            <div className='relative mt-[10px] flex h-[26px] flex-row text-subheader text-shiftover-oldgreen'>
                <button
                    className='w-[105.08px] shadow-[0_1.27px_1.27px_0px_rgba(0,0,0,0.25)]'
                    onClick={() => {
                        setSubHeader('Personal Data');
                    }}
                    disabled={!id}
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
                    disabled={!id}
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
                    disabled={!id}
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
                    disabled={!id}
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
                    disabled={!id}
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
                    disabled={!id}
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
                    disabled={!id}
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
                    disabled={!id}
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
