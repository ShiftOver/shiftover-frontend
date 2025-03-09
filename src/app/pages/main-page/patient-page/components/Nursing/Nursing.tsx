import { useEffect, useState } from 'react';
import DateInput from '../DateInput';
import NursingList from './NursingList';
import Table from './Table';
import SaveButton from '../SaveButton';
import TextInput from '../TextInput';
import RadioButton from '../Radiobutton';
import Image from 'next/image';

export type NursingProps = {
    id: any;
};

export default function Nursing({ id }: NursingProps) {
    const [specialCare, setSpecialCare] = useState({});
    const [hygiene, setHygiene] = useState({});
    const [activity, setActivity] = useState({});
    const [nutrition, setNutrition] = useState({});
    const [psycho, setPsycho] = useState({});
    const [elimination, setElimination] = useState({});
    const [safety, setSafety] = useState({});
    const time = ['23-7', '7-15', '15-23'];
    const [focusNote, setFocusNote] = useState([
        { timeOrShift: '', focus: '', progressNote: '' },
    ]);
    const [focusList, setFocusList] = useState([
        { no: '', focus: '', goal: '', active: '', resolved: '' },
    ]);
    const [name, setName] = useState('');
    const [hN, setHN] = useState('');
    const [aN, setAN] = useState('');
    const [ward, setWard] = useState('');
    const [age, setAge] = useState('');
    const [resident, setResident] = useState('');
    const [admittance, setAdmittance] = useState('');
    const [stay, setStay] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [treatment, setTreatment] = useState('');
    const [temp, setTemp] = useState('');
    const [hR, setHR] = useState('');
    const [resp, setResp] = useState('');
    const [bP, setBP] = useState('');
    const [consciousness, setConsciousness] = useState('');
    const [therapeutic, setTherapeutic] = useState('');
    const [therapeuticCatheter, setTherapeuticCatheter] = useState('');
    const [therapeuticOstomy, setTherapeuticOstomy] = useState('');
    const [therapeuticOther, setTherapeuticOther] = useState('');
    const [health, setHealth] = useState('');
    const [healthMedication, setHealthMedication] = useState('');
    const [healthEnvironment, setHealthEnvironment] = useState('');
    const [healthHealth, setHealthHealth] = useState('');
    const [healthTreatment, setHealthTreatment] = useState('');
    const [healthOutpatient, setHealthOutpatient] = useState('');
    const [healthDiet, setHealthDiet] = useState('');
    const [informationProvided, setInformationProvided] = useState('');
    const [informationProvidedOther, setInformationProvidedOther] =
        useState('');
    const [dischargedBy, setDischargedBy] = useState('');
    const [dischargedByRefer, setDischargedByRefer] = useState('');
    const [dischargedWith, setDischargedWith] = useState('');
    const [dischargedWithOther, setDischargedWithOther] = useState('');
    const [deathDate, setDeathDate] = useState('');
    const [deathTime, setDeathTime] = useState('');
    const [doctor, setDoctor] = useState('');
    const [transfer, setTransfer] = useState('');
    const [transferOther, setTransferOther] = useState('');
    const [patientProp, setPatientProp] = useState('');
    const [patientPropFamilySignature, setPatientPropFamilySignature] =
        useState('');
    const [patientPropFamilyID, setPatientPropFamilyID] = useState('');
    const [patientPropOther, setPatientPropOther] = useState('');
    const [patientPropOtherSignature, setPatientPropOtherSignature] =
        useState('');
    const [patientPropOtherID, setPatientPropOtherID] = useState('');
    const [discharge, setDischarge] = useState('');

    const handleSubmit = () => {
        console.log(focusNote);
        console.log(focusList);
    };
    const addFocusNote = () => {
        setFocusNote((prev) => [
            ...prev,
            {
                timeOrShift: '',
                focus: '',
                progressNote: '',
            },
        ]);
    };
    const addFocusList = () => {
        setFocusList((prev) => [
            ...prev,
            {
                no: '',
                focus: '',
                goal: '',
                active: '',
                resolved: '',
            },
        ]);
    };

    return (
        <div className='ml-[24px] mr-[23px] mt-[18px] justify-items-center'>
            <div className='flex w-full flex-col justify-items-start'>
                <div className='flex flex-col content-start gap-[9px]'>
                    <NursingList name={'Nursing Activity Flow Sheet'}>
                        <div className='ml-[20px] mt-[11px] text-shiftover-gray-text'>
                            <DateInput></DateInput>
                            <div className='mb-[25px] mr-[69px] mt-[11px] grid w-[993px] grid-cols-4 gap-x-[38px] gap-y-[27px]'>
                                <Table
                                    name='Special Care'
                                    row={[
                                        'IVF/ IV Cath Care',
                                        'Drain Care',
                                        'Wound Care',
                                        'Pain Care',
                                        'Breathing Exercise',
                                        'Turn Position',
                                        'Other...',
                                    ]}
                                    time={time}
                                    setValue={setSpecialCare}
                                    value={specialCare}
                                ></Table>
                                <Table
                                    name='Hygiene'
                                    row={[
                                        'Bath',
                                        'Mouth Care',
                                        'Shampooing',
                                        'Perineal Care',
                                        'Linen Change',
                                        'Other...',
                                    ]}
                                    time={time}
                                    setValue={setHygiene}
                                    value={hygiene}
                                ></Table>
                                <Table
                                    name='Activity'
                                    row={[
                                        'Ambulate',
                                        'Exercise',
                                        'Rest',
                                        'Bed Rest',
                                        'Absolute Bed Rest',
                                    ]}
                                    time={time}
                                    setValue={setActivity}
                                    value={activity}
                                ></Table>
                                <Table
                                    name='Nutrition'
                                    row={['NPO', 'Oral', 'Feeding', 'Parental']}
                                    time={time}
                                    setValue={setNutrition}
                                    value={nutrition}
                                ></Table>
                                <Table
                                    name='Psychosocial Support'
                                    row={[
                                        'Greeting',
                                        'Touch',
                                        'Information',
                                        'Other...',
                                    ]}
                                    time={time}
                                    setValue={setPsycho}
                                    value={psycho}
                                ></Table>
                                <Table
                                    name='Elimination'
                                    row={[
                                        'Condom Care',
                                        'Cath Care',
                                        'Ostomy Care',
                                        'Enema',
                                    ]}
                                    time={time}
                                    setValue={setElimination}
                                    value={elimination}
                                ></Table>
                                <Table
                                    name='Safety'
                                    row={[
                                        'Side Rail Up',
                                        'Restraint',
                                        'Other...',
                                    ]}
                                    time={time}
                                    setValue={setSafety}
                                    value={safety}
                                ></Table>
                            </div>
                        </div>
                    </NursingList>
                    <NursingList name={'Nursing Focus Note'}>
                        <div className='relative'>
                            <div className='ml-[20px] mt-[11px] h-[417px] overflow-y-auto text-shiftover-gray-text'>
                                <button
                                    onClick={addFocusNote}
                                    className={`absolute bottom-[17px] right-[17px] flex h-[42px] w-[42px] items-center justify-center rounded-[200px] bg-shiftover-blue shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]`}
                                >
                                    <Image
                                        src='/assets/plus.svg'
                                        alt='plus'
                                        className='fill-blue-500'
                                        width={24}
                                        height={24}
                                    />
                                </button>
                                <DateInput></DateInput>
                                <div className='mx-[1px] flex flex-row pt-[10px] text-cardname text-shiftover-cardtext'>
                                    <div className='flex h-[51px] w-[115px] items-center justify-center rounded-[11px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                        <p>
                                            Time/
                                            <br />
                                            Shift
                                        </p>
                                    </div>
                                    <div className='flex h-[51px] w-[196px] items-center justify-center rounded-[11px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                        Focus
                                    </div>
                                    <div className='flex h-[51px] w-[725px] flex-col rounded-[11px] text-center shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                        <div>Progress note</div>
                                        <div className='flex flex-row justify-center text-shiftover-mediumblack'>
                                            <p>A: Assessment</p>
                                            <p className='ml-[15px]'>
                                                I: Intervention
                                            </p>
                                            <p className='ml-[15px]'>
                                                E: Evaluation
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-[1px] mt-[10px] flex flex-col gap-[10px] pb-[10px]'>
                                    {focusNote.map((val: any, index: any) => {
                                        return (
                                            <div
                                                className='flex flex-row'
                                                key={'Note' + val}
                                            >
                                                <div className='w-[115px]'>
                                                    <input
                                                        className='flex h-[51px] w-[107px] items-center justify-center rounded-[11px] px-[10px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'
                                                        value={
                                                            val['timeOrShift']
                                                        }
                                                        onChange={(e) => {
                                                            const updatedFocusNote =
                                                                [...focusNote];
                                                            updatedFocusNote[
                                                                index
                                                            ] = {
                                                                ...updatedFocusNote[
                                                                    index
                                                                ],
                                                                timeOrShift:
                                                                    e.target
                                                                        .value,
                                                            };
                                                            setFocusNote(
                                                                updatedFocusNote
                                                            );
                                                        }}
                                                    ></input>
                                                </div>
                                                <div className='flex w-[196px] justify-center'>
                                                    <input
                                                        className='flex h-[51px] w-[181px] items-center justify-center rounded-[11px] px-[10px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'
                                                        value={val['focus']}
                                                        onChange={(e) => {
                                                            const updatedFocusNote =
                                                                [...focusNote];
                                                            updatedFocusNote[
                                                                index
                                                            ] = {
                                                                ...updatedFocusNote[
                                                                    index
                                                                ],
                                                                focus: e.target
                                                                    .value,
                                                            };
                                                            setFocusNote(
                                                                updatedFocusNote
                                                            );
                                                        }}
                                                    ></input>
                                                </div>
                                                <div className='flex w-[725px] justify-center'>
                                                    <input
                                                        className='flex h-[51px] w-[714px] items-center justify-center rounded-[11px] px-[10px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'
                                                        value={
                                                            val['progressNote']
                                                        }
                                                        onChange={(e) => {
                                                            const updatedFocusNote =
                                                                [...focusNote];
                                                            updatedFocusNote[
                                                                index
                                                            ] = {
                                                                ...updatedFocusNote[
                                                                    index
                                                                ],
                                                                progressNote:
                                                                    e.target
                                                                        .value,
                                                            };
                                                            setFocusNote(
                                                                updatedFocusNote
                                                            );
                                                        }}
                                                    ></input>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </NursingList>
                    <NursingList name={'Nursing Focus List'}>
                        <div className='relative'>
                            <div className='ml-[20px] mt-[11px] h-[417px] overflow-y-auto text-shiftover-gray-text'>
                                <button
                                    onClick={addFocusList}
                                    className={`absolute bottom-[17px] right-[17px] flex h-[42px] w-[42px] items-center justify-center rounded-[200px] bg-shiftover-blue shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]`}
                                >
                                    <Image
                                        src='/assets/plus.svg'
                                        alt='plus'
                                        className='fill-blue-500'
                                        width={24}
                                        height={24}
                                    />
                                </button>
                                <DateInput></DateInput>
                                <div className='mx-[1px] flex flex-row pt-[10px] text-cardname text-shiftover-cardtext'>
                                    <div className='flex h-[51px] w-[56px] items-center justify-center rounded-[11px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                        No.
                                    </div>
                                    <div className='flex h-[51px] w-[196px] items-center justify-center rounded-[11px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                        Focus
                                    </div>
                                    <div className='flex h-[51px] w-[503px] items-center justify-center rounded-[11px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                        Goal/ Outcome
                                    </div>
                                    <div className='flex h-[51px] w-[143px] items-center justify-center rounded-[11px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                        Active
                                    </div>
                                    <div className='flex h-[51px] w-[138px] items-center justify-center rounded-[11px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                        Resolved
                                    </div>
                                </div>
                                <div className='mx-[1px] mt-[10px] flex flex-col gap-[10px] pb-[10px]'>
                                    {focusList.map((val: any, index: any) => {
                                        return (
                                            <div
                                                className='flex flex-row'
                                                key={'List' + val}
                                            >
                                                <div className='flex w-[56px] justify-center'>
                                                    <input
                                                        className='flex h-[51px] w-[44px] items-center justify-center rounded-[11px] px-[10px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'
                                                        value={val['no']}
                                                        onChange={(e) => {
                                                            const updatedFocusList =
                                                                [...focusList];
                                                            updatedFocusList[
                                                                index
                                                            ] = {
                                                                ...updatedFocusList[
                                                                    index
                                                                ],
                                                                no: e.target
                                                                    .value,
                                                            };
                                                            setFocusList(
                                                                updatedFocusList
                                                            );
                                                        }}
                                                    ></input>
                                                </div>
                                                <div className='flex w-[196px] justify-center'>
                                                    <input
                                                        className='flex h-[51px] w-[182px] items-center justify-center rounded-[11px] px-[10px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'
                                                        value={val['focus']}
                                                        onChange={(e) => {
                                                            const updatedFocusList =
                                                                [...focusList];
                                                            updatedFocusList[
                                                                index
                                                            ] = {
                                                                ...updatedFocusList[
                                                                    index
                                                                ],
                                                                focus: e.target
                                                                    .value,
                                                            };
                                                            setFocusList(
                                                                updatedFocusList
                                                            );
                                                        }}
                                                    ></input>
                                                </div>
                                                <div className='flex w-[503px] justify-center'>
                                                    <input
                                                        className='flex h-[51px] w-[489px] items-center justify-center rounded-[11px] px-[10px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'
                                                        value={val['goal']}
                                                        onChange={(e) => {
                                                            const updatedFocusList =
                                                                [...focusList];
                                                            updatedFocusList[
                                                                index
                                                            ] = {
                                                                ...updatedFocusList[
                                                                    index
                                                                ],
                                                                goal: e.target
                                                                    .value,
                                                            };
                                                            setFocusList(
                                                                updatedFocusList
                                                            );
                                                        }}
                                                    ></input>
                                                </div>
                                                <div className='flex w-[143px] justify-center'>
                                                    <input
                                                        className='flex h-[51px] w-[131px] items-center justify-center rounded-[11px] px-[10px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'
                                                        value={val['active']}
                                                        onChange={(e) => {
                                                            const updatedFocusList =
                                                                [...focusList];
                                                            updatedFocusList[
                                                                index
                                                            ] = {
                                                                ...updatedFocusList[
                                                                    index
                                                                ],
                                                                active: e.target
                                                                    .value,
                                                            };
                                                            setFocusList(
                                                                updatedFocusList
                                                            );
                                                        }}
                                                    ></input>
                                                </div>
                                                <div className='flex w-[138px] justify-center'>
                                                    <input
                                                        className='flex h-[51px] w-[124px] items-center justify-center rounded-[11px] px-[10px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'
                                                        value={val['resolved']}
                                                        onChange={(e) => {
                                                            const updatedFocusList =
                                                                [...focusList];
                                                            updatedFocusList[
                                                                index
                                                            ] = {
                                                                ...updatedFocusList[
                                                                    index
                                                                ],
                                                                resolved:
                                                                    e.target
                                                                        .value,
                                                            };
                                                            setFocusList(
                                                                updatedFocusList
                                                            );
                                                        }}
                                                    ></input>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </NursingList>
                    <NursingList name={'Nursing Discharge Summary Form'}>
                        <div className='mb-[33px] ml-[20px] mt-[10px] flex h-[452px] flex-col gap-[13px] overflow-y-auto text-cardname text-shiftover-cardtext'>
                            <div className='ml-[24px] mt-[19px] flex w-[985px] flex-col gap-[12px] rounded-[15px] pb-[28px] pl-[23px] pt-[20px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                <div className='flex flex-row'>
                                    <TextInput
                                        placeHolder='Name'
                                        value={name}
                                        onChange={setName}
                                        style={'w-[237px] mr-[37px]'}
                                    ></TextInput>
                                    <TextInput
                                        placeHolder='HN'
                                        value={hN}
                                        onChange={setHN}
                                        style={'w-[97px] mr-[32px]'}
                                    ></TextInput>
                                    <TextInput
                                        placeHolder='AN'
                                        value={aN}
                                        onChange={setAN}
                                        style={'w-[96px] mr-[35px]'}
                                    ></TextInput>
                                    <TextInput
                                        placeHolder='Ward'
                                        value={ward}
                                        onChange={setWard}
                                        style={'w-[96px] mr-[33px]'}
                                    ></TextInput>
                                    <TextInput
                                        placeHolder='Age'
                                        value={age}
                                        onChange={setAge}
                                        style={'w-[59px] '}
                                    ></TextInput>
                                </div>
                                <div className='flex flex-row'>
                                    <TextInput
                                        placeHolder='Resident/ Doctor'
                                        value={resident}
                                        onChange={setResident}
                                        style={'w-[230px] mr-[37px]'}
                                    ></TextInput>
                                    <TextInput
                                        placeHolder='Admittance/ Discharge Date'
                                        value={admittance}
                                        onChange={setAdmittance}
                                        style={'w-[330px]'}
                                    ></TextInput>
                                </div>
                                <div className='flex flex-row'>
                                    <TextInput
                                        placeHolder='Length of Stay'
                                        value={stay}
                                        onChange={setStay}
                                        style={'w-[230px] mr-[41px]'}
                                    ></TextInput>
                                    <TextInput
                                        placeHolder='Diagnosis'
                                        value={diagnosis}
                                        onChange={setDiagnosis}
                                        style={'w-[466px]'}
                                    ></TextInput>
                                </div>
                                <TextInput
                                    value={diagnosis}
                                    onChange={setDiagnosis}
                                    style={'w-[915px]'}
                                ></TextInput>
                                <TextInput
                                    placeHolder='Treatment/ Operation/ Delivery'
                                    value={treatment}
                                    onChange={setTreatment}
                                    style={'w-[705px]'}
                                ></TextInput>
                                <TextInput
                                    value={treatment}
                                    onChange={setTreatment}
                                    style={'w-[915px]'}
                                ></TextInput>
                            </div>
                            <div className='ml-[24px] w-[985px] rounded-[15px]'>
                                <div className='flex h-[46px] items-center justify-center rounded-t-[15px] bg-[#f5f2f2] text-cardheader'>
                                    Health Status before Discharge
                                </div>
                                <div className='flex h-[146px] flex-row'>
                                    <div className='w-[283px] rounded-bl-[15px] pl-[20px] pt-[10px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                        <p>Vital signs:</p>
                                        <div className='ml-[36px] mt-[5px] flex flex-col gap-[8px] text-cardnumber'>
                                            <TextInput
                                                placeHolder='Temp'
                                                unit='C'
                                                value={temp}
                                                onChange={setTemp}
                                                style={'w-[83px] mr-[5px]'}
                                            ></TextInput>
                                            <TextInput
                                                placeHolder='HR'
                                                unit='/ min'
                                                value={hR}
                                                onChange={setHR}
                                                style={'w-[96px] mr-[5px]'}
                                            ></TextInput>
                                            <TextInput
                                                placeHolder='Resp'
                                                unit='/ min'
                                                value={resp}
                                                onChange={setResp}
                                                style={'w-[82px] mr-[5px]'}
                                            ></TextInput>
                                            <TextInput
                                                placeHolder='BP'
                                                unit='mmHg'
                                                value={bP}
                                                onChange={setBP}
                                                style={'w-[88px] mr-[5px]'}
                                            ></TextInput>
                                        </div>
                                    </div>
                                    <div className='w-[340px] pl-[20px] pt-[10px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                        <p>Level of Consciousness:</p>
                                        <div className='ml-[35px] mt-[5px] flex flex-col gap-[8px] text-cardnumber'>
                                            <RadioButton
                                                value={consciousness}
                                                onChange={setConsciousness}
                                                name='Consciousness'
                                                placeHolder='Alert, Awake and Oriented'
                                                style='ml-[6px]'
                                            ></RadioButton>
                                            <RadioButton
                                                value={consciousness}
                                                onChange={setConsciousness}
                                                name='Consciousness'
                                                placeHolder='Lethargic'
                                                style='ml-[6px]'
                                            ></RadioButton>
                                            <RadioButton
                                                value={consciousness}
                                                onChange={setConsciousness}
                                                name='Consciousness'
                                                placeHolder='Stuporous'
                                                style='ml-[6px]'
                                            ></RadioButton>
                                            <RadioButton
                                                value={consciousness}
                                                onChange={setConsciousness}
                                                name='Consciousness'
                                                placeHolder='Comatose'
                                                style='ml-[6px]'
                                            ></RadioButton>
                                        </div>
                                    </div>
                                    <div className='w-[362px] rounded-br-[15px] pl-[20px] pt-[10px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                        <p>Therapeutic Device:</p>
                                        <div className='ml-[36px] mt-[5px] flex flex-row gap-[8px] text-cardnumber'>
                                            <div>
                                                <RadioButton
                                                    value={therapeutic}
                                                    onChange={setTherapeutic}
                                                    name='Therapeutic'
                                                    placeHolder='None'
                                                    style='ml-[6px]'
                                                ></RadioButton>
                                            </div>

                                            <div className='ml-[48px] flex flex-col gap-[8px]'>
                                                <RadioButton
                                                    value={therapeutic}
                                                    onChange={setTherapeutic}
                                                    name='Therapeutic'
                                                    placeHolder='NG Tube'
                                                    style='ml-[6px]'
                                                ></RadioButton>
                                                <RadioButton
                                                    value={therapeutic}
                                                    onChange={setTherapeutic}
                                                    name='Therapeutic'
                                                    placeHolder='Catheter'
                                                    style='ml-[6px]'
                                                >
                                                    <TextInput
                                                        placeHolder='Catheter'
                                                        value={
                                                            therapeuticCatheter
                                                        }
                                                        onChange={
                                                            setTherapeuticCatheter
                                                        }
                                                        disabled={
                                                            therapeutic !==
                                                            'Catheter'
                                                        }
                                                        style={'w-[59px]'}
                                                    ></TextInput>
                                                </RadioButton>
                                                <RadioButton
                                                    value={therapeutic}
                                                    onChange={setTherapeutic}
                                                    name='Therapeutic'
                                                    placeHolder='Ostomy'
                                                    style='ml-[6px]'
                                                >
                                                    <TextInput
                                                        placeHolder='Ostomy'
                                                        value={
                                                            therapeuticOstomy
                                                        }
                                                        onChange={
                                                            setTherapeuticOstomy
                                                        }
                                                        disabled={
                                                            therapeutic !==
                                                            'Ostomy'
                                                        }
                                                        style={'w-[66px]'}
                                                    ></TextInput>
                                                </RadioButton>
                                                <RadioButton
                                                    value={therapeutic}
                                                    onChange={setTherapeutic}
                                                    name='Therapeutic'
                                                    placeHolder='Other'
                                                    style='ml-[6px] mr-[5px]'
                                                >
                                                    <TextInput
                                                        placeHolder='Other'
                                                        value={therapeuticOther}
                                                        onChange={
                                                            setTherapeuticOther
                                                        }
                                                        disabled={
                                                            therapeutic !==
                                                            'Other'
                                                        }
                                                        style={'w-[80px]'}
                                                    ></TextInput>
                                                </RadioButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ml-[24px] w-[985px] rounded-[15px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                <div className='flex h-[46px] items-center justify-center rounded-t-[15px] bg-[#f5f2f2] text-cardheader'>
                                    Continuing Health Problems
                                </div>
                                <div className='h-[102px]'></div>
                            </div>
                            <div className='ml-[24px] w-[985px] rounded-[15px]'>
                                <div className='flex h-[46px] items-center justify-center rounded-t-[15px] bg-[#f5f2f2] text-cardheader'>
                                    Health Informations
                                </div>
                                <div className='flex flex-row'>
                                    <div className='flex w-[751px] flex-col gap-[8px] rounded-bl-[15px] pb-[27px] pl-[20px] pt-[10px] text-cardnumber shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                        <RadioButton
                                            value={health}
                                            onChange={setHealth}
                                            name='Health'
                                            placeHolder='Medication'
                                            style='ml-[6px]'
                                        >
                                            <TextInput
                                                placeHolder='Medication'
                                                value={healthMedication}
                                                onChange={setHealthMedication}
                                                disabled={
                                                    health !== 'Medication'
                                                }
                                                style={'w-[607px]'}
                                            ></TextInput>
                                        </RadioButton>

                                        <RadioButton
                                            value={health}
                                            onChange={setHealth}
                                            name='Health'
                                            placeHolder='Environment & Economic'
                                            style='ml-[6px]'
                                        >
                                            <TextInput
                                                placeHolder='Environment & Economic'
                                                value={healthEnvironment}
                                                onChange={setHealthEnvironment}
                                                disabled={
                                                    health !==
                                                    'Environment & Economic'
                                                }
                                                style={'w-[526px]'}
                                            ></TextInput>
                                        </RadioButton>
                                        <RadioButton
                                            value={health}
                                            onChange={setHealth}
                                            name='Health'
                                            placeHolder='Treatment'
                                            style='ml-[6px]'
                                        >
                                            <TextInput
                                                placeHolder='Treatment'
                                                value={healthTreatment}
                                                onChange={setHealthTreatment}
                                                disabled={
                                                    health !== 'Treatment'
                                                }
                                                style={'w-[614px]'}
                                            ></TextInput>
                                        </RadioButton>
                                        <RadioButton
                                            value={health}
                                            onChange={setHealth}
                                            name='Health'
                                            placeHolder='Health'
                                            style='ml-[6px]'
                                        >
                                            <TextInput
                                                placeHolder='Health'
                                                value={healthHealth}
                                                onChange={setHealthHealth}
                                                disabled={health !== 'Health'}
                                                style={'w-[635px]'}
                                            ></TextInput>
                                        </RadioButton>
                                        <RadioButton
                                            value={health}
                                            onChange={setHealth}
                                            name='Health'
                                            placeHolder='Outpatient Referral'
                                            style='ml-[6px]'
                                        >
                                            <TextInput
                                                placeHolder='Outpatient Referral'
                                                value={healthOutpatient}
                                                onChange={setHealthOutpatient}
                                                disabled={
                                                    health !==
                                                    'Outpatient Referral'
                                                }
                                                style={'w-[564px]'}
                                            ></TextInput>
                                        </RadioButton>
                                        <RadioButton
                                            value={health}
                                            onChange={setHealth}
                                            name='Health'
                                            placeHolder='Diet'
                                            style='ml-[6px]'
                                        >
                                            <TextInput
                                                placeHolder='Diet'
                                                value={healthDiet}
                                                onChange={setHealthDiet}
                                                disabled={health !== 'Diet'}
                                                style={'w-[651px]'}
                                            ></TextInput>
                                        </RadioButton>
                                    </div>
                                    <div className='w-[234px] rounded-br-[15px] pl-[20px] pt-[10px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                        <p>Information Provided to:</p>
                                        <div className='ml-[35px] mt-[5px] flex flex-col gap-[8px] text-cardnumber'>
                                            <RadioButton
                                                value={informationProvided}
                                                onChange={
                                                    setInformationProvided
                                                }
                                                name='Information Provided'
                                                placeHolder='Patient'
                                                style='ml-[6px]'
                                            ></RadioButton>
                                            <RadioButton
                                                value={informationProvided}
                                                onChange={
                                                    setInformationProvided
                                                }
                                                name='Information Provided'
                                                placeHolder='Family'
                                                style='ml-[6px]'
                                            ></RadioButton>
                                            <RadioButton
                                                value={informationProvided}
                                                onChange={
                                                    setInformationProvided
                                                }
                                                name='Information Provided'
                                                placeHolder='Other'
                                                style='ml-[6px]'
                                            >
                                                <TextInput
                                                    placeHolder='Other'
                                                    value={
                                                        informationProvidedOther
                                                    }
                                                    onChange={
                                                        setInformationProvidedOther
                                                    }
                                                    disabled={
                                                        informationProvided !==
                                                        'Other'
                                                    }
                                                    style={'w-[92px]'}
                                                ></TextInput>
                                            </RadioButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ml-[24px] mt-[19px] flex w-[985px] flex-col gap-[12px] rounded-[15px] pb-[28px] pl-[23px] pt-[20px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                <div className='flex flex-row'>
                                    <p className='mr-[35px] w-[133px]'>
                                        Discharged by:
                                    </p>
                                    <div className='flex flex-row gap-[56px]'>
                                        <RadioButton
                                            value={dischargedBy}
                                            onChange={setDischargedBy}
                                            name='Discharged by'
                                            placeHolder='Doctor Permission'
                                            style='ml-[6px]'
                                        ></RadioButton>
                                        <RadioButton
                                            value={dischargedBy}
                                            onChange={setDischargedBy}
                                            name='Discharged by'
                                            placeHolder='Involuntary'
                                            style='ml-[6px] mr-[1px]'
                                        ></RadioButton>
                                        <RadioButton
                                            value={dischargedBy}
                                            onChange={setDischargedBy}
                                            name='Discharged by'
                                            placeHolder='Escape'
                                            style='ml-[6px]'
                                        ></RadioButton>
                                        <RadioButton
                                            value={dischargedBy}
                                            onChange={setDischargedBy}
                                            name='Discharged by'
                                            placeHolder='Refer'
                                            style='ml-[6px]'
                                        >
                                            <TextInput
                                                placeHolder='Refer'
                                                value={dischargedByRefer}
                                                onChange={setDischargedByRefer}
                                                disabled={
                                                    dischargedBy !== 'Refer'
                                                }
                                                style={'w-[167px]'}
                                            ></TextInput>
                                        </RadioButton>
                                    </div>
                                </div>
                                <div className='flex flex-row'>
                                    <p className='mr-[35px] w-[133px]'>
                                        Discharged with:
                                    </p>
                                    <div className='flex flex-col gap-[12px]'>
                                        <div className='flex flex-row gap-[56px]'>
                                            <RadioButton
                                                value={dischargedWith}
                                                onChange={setDischargedWith}
                                                name='Discharged with'
                                                placeHolder='Patient ID Card'
                                                style='ml-[6px] mr-[23px]'
                                            ></RadioButton>
                                            <RadioButton
                                                value={dischargedWith}
                                                onChange={setDischargedWith}
                                                name='Discharged with'
                                                placeHolder='Medication'
                                                style='ml-[5px]'
                                            ></RadioButton>
                                            <RadioButton
                                                value={dischargedWith}
                                                onChange={setDischargedWith}
                                                name='Discharged with'
                                                placeHolder='Appointment Card'
                                                style='ml-[6px] mr-[7px]'
                                            ></RadioButton>
                                            <RadioButton
                                                value={dischargedWith}
                                                onChange={setDischargedWith}
                                                name='Discharged with'
                                                placeHolder='Medical Certificate'
                                                style='ml-[6px]'
                                            ></RadioButton>
                                        </div>
                                        <div className='flex flex-row gap-[56px]'>
                                            <RadioButton
                                                value={dischargedWith}
                                                onChange={setDischargedWith}
                                                name='Discharged with'
                                                placeHolder='Health Payment Receipt'
                                                style='ml-[6px]'
                                            ></RadioButton>
                                            <RadioButton
                                                value={dischargedWith}
                                                onChange={setDischargedWith}
                                                name='Discharged with'
                                                placeHolder="Patient's property"
                                                style='ml-[6px]'
                                            ></RadioButton>
                                            <RadioButton
                                                value={dischargedWith}
                                                onChange={setDischargedWith}
                                                name='Discharged with'
                                                placeHolder='Other'
                                                style='ml-[6px]'
                                            >
                                                <TextInput
                                                    placeHolder='Other'
                                                    value={dischargedWithOther}
                                                    onChange={
                                                        setDischargedWithOther
                                                    }
                                                    disabled={
                                                        dischargedWith !==
                                                        'Other'
                                                    }
                                                    style={'w-[207px]'}
                                                ></TextInput>
                                            </RadioButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ml-[24px] w-[985px] rounded-[15px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
                                <div className='flex h-[46px] items-center justify-center rounded-t-[15px] bg-[#f5f2f2] text-cardheader'>
                                    In Case of Death
                                </div>
                                <div className='flex flex-row pb-[25px] pl-[20px] pt-[10px]'>
                                    <div className='flex flex-col gap-[8px]'>
                                        <TextInput
                                            placeHolder='Date of Death'
                                            value={deathDate}
                                            onChange={setDeathDate}
                                            style={'w-[99px]'}
                                        ></TextInput>
                                        <div className='flex flex-row'>
                                            <p className='mr-[33px]'>
                                                Transfer to:
                                            </p>
                                            <RadioButton
                                                value={transfer}
                                                onChange={setTransfer}
                                                name='Transfer'
                                                placeHolder='Forensic'
                                                style='ml-[6px]'
                                            ></RadioButton>
                                        </div>
                                        <p className='mr-[31px]'>
                                            Patient&apos;s property was sent to:
                                        </p>
                                    </div>
                                    <div className='flex flex-col gap-[8px]'>
                                        <div className='flex flex-row'>
                                            <TextInput
                                                placeHolder='Time of Death'
                                                value={deathTime}
                                                onChange={setDeathTime}
                                                style={'w-[99px] mr-[45px]'}
                                            ></TextInput>
                                            <TextInput
                                                placeHolder='Doctor'
                                                value={doctor}
                                                onChange={setDoctor}
                                                style={'w-[99px]'}
                                            ></TextInput>
                                        </div>
                                        <div className='flex flex-row'>
                                            <RadioButton
                                                value={transfer}
                                                onChange={setTransfer}
                                                name='Transfer'
                                                placeHolder='Pathology'
                                                style='ml-[6px] mr-[59px]'
                                            ></RadioButton>
                                            <RadioButton
                                                value={transfer}
                                                onChange={setTransfer}
                                                name='Transfer'
                                                placeHolder='Other'
                                                style='ml-[6px]'
                                            >
                                                <TextInput
                                                    placeHolder='Other'
                                                    value={transferOther}
                                                    onChange={setTransferOther}
                                                    disabled={
                                                        transfer !== 'Other'
                                                    }
                                                    style={'w-[190px]'}
                                                ></TextInput>
                                            </RadioButton>
                                        </div>
                                        <RadioButton
                                            value={patientProp}
                                            onChange={setPatientProp}
                                            name='Patient Property'
                                            placeHolder='Family; Signature'
                                            style='ml-[6px]'
                                        >
                                            <TextInput
                                                placeHolder='Family; Signature'
                                                value={
                                                    patientPropFamilySignature
                                                }
                                                onChange={
                                                    setPatientPropFamilySignature
                                                }
                                                disabled={
                                                    patientProp !==
                                                    'Family; Signature'
                                                }
                                                style={'w-[259px]'}
                                            ></TextInput>
                                        </RadioButton>
                                        <div className='flex flex-row'>
                                            <RadioButton
                                                value={patientProp}
                                                onChange={setPatientProp}
                                                name='Patient Property'
                                                placeHolder='Other'
                                                style='ml-[6px]'
                                            >
                                                <TextInput
                                                    placeHolder='Other'
                                                    value={patientPropOther}
                                                    onChange={
                                                        setPatientPropOther
                                                    }
                                                    disabled={
                                                        patientProp !== 'Other'
                                                    }
                                                    style={'w-[78px]'}
                                                ></TextInput>
                                            </RadioButton>
                                            <p className='mr-[5px]'>;</p>
                                            <TextInput
                                                placeHolder='Signature'
                                                value={
                                                    patientPropOtherSignature
                                                }
                                                onChange={
                                                    setPatientPropOtherSignature
                                                }
                                                disabled={
                                                    patientProp !== 'Other'
                                                }
                                                style={'w-[174px]'}
                                            ></TextInput>
                                        </div>
                                    </div>
                                    <div className='ml-[45px] flex flex-col gap-[8px]'>
                                        <div className='h-[19px]'></div>
                                        <div className='h-[19px]'></div>
                                        <TextInput
                                            placeHolder='ID No.'
                                            value={patientPropFamilyID}
                                            onChange={setPatientPropFamilyID}
                                            disabled={
                                                patientProp !==
                                                'Family; Signature'
                                            }
                                            style={'w-[206px]'}
                                        ></TextInput>
                                        <TextInput
                                            placeHolder='ID No.'
                                            value={patientPropOtherID}
                                            onChange={setPatientPropOtherID}
                                            disabled={patientProp !== 'Other'}
                                            style={'w-[206px]'}
                                        ></TextInput>
                                    </div>
                                </div>
                            </div>
                            <div className='ml-[24px] mt-[40px] flex w-[990px] justify-end'>
                                <TextInput
                                    placeHolder='Discharge by RN'
                                    value={discharge}
                                    onChange={setDischarge}
                                    style={'w-[216px]'}
                                ></TextInput>
                            </div>
                        </div>
                    </NursingList>
                </div>
            </div>
            <div className='mb-[23px] mt-[23px]'>
                <SaveButton onClick={handleSubmit}></SaveButton>
            </div>
        </div>
    );
}
