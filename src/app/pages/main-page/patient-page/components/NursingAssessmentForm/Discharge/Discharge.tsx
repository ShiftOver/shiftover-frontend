import { useEffect, useState } from 'react';
import CardHolder from '../../CardHolder';
import RadioButton from '../../Radiobutton';
import SaveButton from '../../SaveButton';
import TextInput from '../../TextInput';
import { useRecoilState } from 'recoil';
import { selectedDischarge } from '@/recoil/atoms';

export type DischargeProps = {
    id: any;
    handleSubmit: any;
};

export default function Discharge({ id, handleSubmit }: DischargeProps) {
    const [discharge, setDischarge] = useRecoilState<any>(selectedDischarge);
    const [one, setOne] = useState('');
    const [oneA, setOneA] = useState('');
    const [oneAYes, setOneAYes] = useState('');
    const [oneB, setOneB] = useState('');
    const [oneBYes, setOneBYes] = useState('');
    const [two, setTwo] = useState('');
    const [twoYes, setTwoYes] = useState('');
    const [liveWith, setLiveWith] = useState('');
    const [liveWithOther, setLiveWithOther] = useState('');
    const [liveWhereOther, setLiveWhereOther] = useState('');
    const [liveWhere, setLiveWhere] = useState('');

    const [medication, setMedication] = useState('');
    const [env, setEnv] = useState('');
    const [treatmeant, setTreatmeant] = useState('');
    const [outpatient, setOutpatient] = useState('');
    const [health, setHealth] = useState('');
    const [diet, setDiet] = useState('');
    const [possibleRef, setPossibleRef] = useState('');
    const [possibleRefOther, setPossibleRefOther] = useState('');
    const [assessment, setAssessment] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        if (one == 'No') {
            setOneA('');
            setOneB('');
        }
    }, [one]);

    return (
        <div className='ml-[27px] mt-[23px] justify-items-center'>
            <div className='flex w-full flex-col justify-items-start gap-[22px]'>
                <CardHolder
                    path='document'
                    type='NurseAssessmentForm'
                    name='Discharge Screening Criteria'
                >
                    <div className='ml-[14px] flex w-[986px] flex-col gap-[11px]'>
                        <p>
                            1. Will patient need post discharge assistance with
                            Activity of Daily Living/ Physical funcationing?
                        </p>
                        <div className='flex flex-row'>
                            <div className='w-[93px]'></div>
                            <RadioButton
                                value={one}
                                onChange={setOne}
                                name='One'
                                placeHolder='Yes'
                                style='ml-[6px] mr-[5px]'
                            ></RadioButton>
                            <p className='mr-[158.29px]'>
                                (if yes, complete A&B)
                            </p>
                            <RadioButton
                                value={one}
                                onChange={setOne}
                                name='One'
                                placeHolder='No'
                                style='ml-[6px] '
                            ></RadioButton>
                        </div>
                        <p className='ml-[45px]'>
                            A. Does patient have family capable and willing to
                            provide assistance post discharge?
                        </p>
                        <div className='flex flex-row'>
                            <div className='w-[93px]'></div>
                            <RadioButton
                                value={oneA}
                                onChange={setOneA}
                                name='One A'
                                placeHolder='Yes'
                                style='ml-[6px] mr-[55px]'
                                disabled={one !== 'Yes'}
                            >
                                <TextInput
                                    placeHolder='Yes'
                                    value={oneAYes}
                                    onChange={setOneAYes}
                                    disabled={oneA !== 'Yes'}
                                    style={'w-[245px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={oneA}
                                onChange={setOneA}
                                name='One A'
                                placeHolder='No'
                                style='ml-[6px]'
                                disabled={one !== 'Yes'}
                            ></RadioButton>
                        </div>
                        <p className='ml-[45px]'>
                            B. Is assistance needed that family can&apos;t
                            provide?
                        </p>
                        <div className='flex flex-row'>
                            <div className='w-[93px]'></div>
                            <RadioButton
                                value={oneB}
                                onChange={setOneB}
                                name='One B'
                                placeHolder='Yes'
                                style='ml-[6px] mr-[55px]'
                                disabled={one !== 'Yes'}
                            >
                                <TextInput
                                    placeHolder='Yes'
                                    value={oneBYes}
                                    onChange={setOneBYes}
                                    disabled={oneB !== 'Yes'}
                                    style={'w-[245px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={oneB}
                                onChange={setOneB}
                                name='One B'
                                placeHolder='No'
                                style='ml-[6px]'
                                disabled={one !== 'Yes'}
                            ></RadioButton>
                        </div>
                        <p>
                            2. Are there financial concern regarding this
                            hospitalization?
                        </p>
                        <div className='flex flex-row'>
                            <div className='w-[93px]'></div>
                            <RadioButton
                                value={two}
                                onChange={setTwo}
                                name='Two'
                                placeHolder='Yes'
                                style='ml-[6px] mr-[55px]'
                            >
                                <TextInput
                                    placeHolder='Yes'
                                    value={twoYes}
                                    onChange={setTwoYes}
                                    disabled={two !== 'Yes'}
                                    style={'w-[245px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={two}
                                onChange={setTwo}
                                name='Two'
                                placeHolder='No'
                                style='ml-[6px]'
                            ></RadioButton>
                        </div>
                    </div>
                </CardHolder>
                <div className='flex flex-row gap-[9px]'>
                    <CardHolder
                        path='document'
                        type='NurseAssessmentForm'
                        name='Home Environment'
                    >
                        <div className='ml-[14px] flex w-[374px] flex-row gap-[12px]'>
                            <div className='flex flex-col gap-[12px]'>
                                <p>Lives With:</p>
                                <RadioButton
                                    value={liveWith}
                                    onChange={setLiveWith}
                                    name='Lives With'
                                    placeHolder='Parents/ Family'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={liveWith}
                                    onChange={setLiveWith}
                                    name='Lives With'
                                    placeHolder='Spouse'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={liveWith}
                                    onChange={setLiveWith}
                                    name='Lives With'
                                    placeHolder='Friend'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={liveWith}
                                    onChange={setLiveWith}
                                    name='Lives With'
                                    placeHolder='Alone'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={liveWith}
                                    onChange={setLiveWith}
                                    name='Lives With'
                                    placeHolder='Other'
                                    style='ml-[6px]'
                                >
                                    <TextInput
                                        placeHolder='Other'
                                        value={liveWithOther}
                                        onChange={setLiveWithOther}
                                        disabled={liveWith !== 'Other'}
                                        style={'w-[77px]'}
                                    ></TextInput>
                                </RadioButton>
                            </div>
                            <div className='flex flex-col gap-[12px]'>
                                <p>Lives Where:</p>
                                <RadioButton
                                    value={liveWhere}
                                    onChange={setLiveWhere}
                                    name='Lives Where'
                                    placeHolder='House'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={liveWhere}
                                    onChange={setLiveWhere}
                                    name='Lives Where'
                                    placeHolder='Townhouse'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={liveWhere}
                                    onChange={setLiveWhere}
                                    name='Lives Where'
                                    placeHolder='Apartment/ Condominium'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={liveWhere}
                                    onChange={setLiveWhere}
                                    name='Lives Where'
                                    placeHolder='Nursing Home'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={liveWith}
                                    onChange={setLiveWith}
                                    name='Lives With'
                                    placeHolder='Other'
                                    style='ml-[6px]'
                                >
                                    <TextInput
                                        placeHolder='Other'
                                        value={liveWhereOther}
                                        onChange={setLiveWhereOther}
                                        disabled={liveWhere !== 'Other'}
                                        style={'w-[128px]'}
                                    ></TextInput>
                                </RadioButton>
                            </div>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='document'
                        type='NurseAssessmentForm'
                        name='Discharge Planning Needs'
                    >
                        <div className='ml-[14px] flex w-[565px] flex-col gap-[11px]'>
                            <RadioButton
                                value={discharge}
                                onChange={setDischarge}
                                name='Discharge'
                                placeHolder='Medication'
                                style='ml-[6px]'
                            >
                                <TextInput
                                    placeHolder='Medication'
                                    value={medication}
                                    onChange={setMedication}
                                    disabled={discharge !== 'Medication'}
                                    style={'w-[446px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={discharge}
                                onChange={setDischarge}
                                name='Discharge'
                                placeHolder='Environment & Economic'
                                style='ml-[6px]'
                            >
                                <TextInput
                                    placeHolder='Environment & Economic'
                                    value={env}
                                    onChange={setEnv}
                                    disabled={
                                        discharge !== 'Environment & Economic'
                                    }
                                    style={'w-[355px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={discharge}
                                onChange={setDischarge}
                                name='Discharge'
                                placeHolder='Treatment'
                                style='ml-[6px]'
                            >
                                <TextInput
                                    placeHolder='Treatment'
                                    value={treatmeant}
                                    onChange={setTreatmeant}
                                    disabled={discharge !== 'Treatment'}
                                    style={'w-[453px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={discharge}
                                onChange={setDischarge}
                                name='Discharge'
                                placeHolder='Health'
                                style='ml-[6px]'
                            >
                                <TextInput
                                    placeHolder='Health'
                                    value={health}
                                    onChange={setHealth}
                                    disabled={discharge !== 'Health'}
                                    style={'w-[477px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={discharge}
                                onChange={setDischarge}
                                name='Discharge'
                                placeHolder='Outpatient Referral'
                                style='ml-[6px]'
                            >
                                <TextInput
                                    placeHolder='Outpatient Referral'
                                    value={outpatient}
                                    onChange={setOutpatient}
                                    disabled={
                                        discharge !== 'Outpatient Referral'
                                    }
                                    style={'w-[396px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={discharge}
                                onChange={setDischarge}
                                name='Discharge'
                                placeHolder='Diet'
                                style='ml-[6px]'
                            >
                                <TextInput
                                    placeHolder='Diet'
                                    value={diet}
                                    onChange={setDiet}
                                    disabled={discharge !== 'Diet'}
                                    style={'w-[494px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                    </CardHolder>
                </div>
                <CardHolder
                    path='document'
                    type='NurseAssessmentForm'
                    name='Referral Needs'
                >
                    <div className='ml-[14px] flex w-[986px] flex-col gap-[12px]'>
                        <p>Possible Referral Needs:</p>
                        <div className='flex flex-row'>
                            <RadioButton
                                value={possibleRef}
                                onChange={setPossibleRef}
                                name='Referral'
                                placeHolder='Wound Care/ Burn Care'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={possibleRef}
                                onChange={setPossibleRef}
                                name='Referral'
                                placeHolder='Rehabilitation/ PT'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={possibleRef}
                                onChange={setPossibleRef}
                                name='Referral'
                                placeHolder='Speech'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={possibleRef}
                                onChange={setPossibleRef}
                                name='Referral'
                                placeHolder='OT'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={possibleRef}
                                onChange={setPossibleRef}
                                name='Referral'
                                placeHolder='Social Service'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={possibleRef}
                                onChange={setPossibleRef}
                                name='Referral'
                                placeHolder='Psychologist'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <RadioButton
                            value={possibleRef}
                            onChange={setPossibleRef}
                            name='Discharge'
                            placeHolder='Other'
                            style='ml-[6px]'
                        >
                            <TextInput
                                placeHolder='Other'
                                value={possibleRefOther}
                                onChange={setPossibleRefOther}
                                disabled={possibleRef !== 'Other'}
                                style={'w-[371px]'}
                            ></TextInput>
                        </RadioButton>
                        <div className='flex flex-row'>
                            <TextInput
                                placeHolder='Assessment Initiated by RN:'
                                value={assessment}
                                onChange={setAssessment}
                                style={'w-[243px] mr-[38px]'}
                            ></TextInput>
                            <TextInput
                                placeHolder='Date:'
                                value={date}
                                onChange={setDate}
                                style={'w-[129px] mr-[25px]'}
                            ></TextInput>
                            <TextInput
                                placeHolder='Time:'
                                value={time}
                                onChange={setTime}
                                style={'w-[131px]'}
                            ></TextInput>
                        </div>
                    </div>
                </CardHolder>
            </div>
            <div className='mb-[23px] mt-[23px]'>
                <SaveButton onClick={handleSubmit}></SaveButton>
            </div>
        </div>
    );
}
