import { useState } from 'react';
import CardHolder from '../../CardHolder';
import SaveButton from '../../SaveButton';
import TextInput from '../../TextInput';

export type PersonalDataProps = {
    id: any;
};

export default function PersonalData({ id }: PersonalDataProps) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [education, setEducation] = useState('');
    const [occupation, setOccupation] = useState('');
    const [admissionDate, setAdmissionDate] = useState('');
    const [time, setTime] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [modeOfArrival, setModeOfArrival] = useState('');
    const [modeOfArrivalOther, setModeOfArrivalOther] = useState('');
    const [admittedForm, setAdmittedForm] = useState('');
    const [admittedFormOther, setAdmittedFormOther] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [chiefComplaint, setChiefComplaint] = useState('');
    const [pastIllness, setPastIllness] = useState('');
    const [pastIllnessHistory, setPastIllnessHistory] = useState('');
    const [familyIllnessHistory, setFamilyIllnessHistory] = useState('');
    const [allergies, setAllergies] = useState('');
    const [reactions, setReactions] = useState('');
    const [temp, setTemp] = useState('');
    const [hr, setHr] = useState('');
    const [resp, setResp] = useState('');
    const [bP, setBP] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {
            name,
            admissionDate,
        };
        console.log(formData);
    };

    return (
        <div className='justify-items-center'>
            <div className='w-full justify-items-start'>
                <CardHolder
                    path='personalLogo'
                    type='NurseAssessmentForm'
                    name='Personal'
                >
                    <div className='ml-[12px] mr-[12px] flex'>
                        <img
                            src='https://picsum.photos/id/237/200/300'
                            className='border-full h-[84px] w-[86px]'
                        />
                        <div className='ml-[8px] flex flex-col gap-[12px] text-cardnumber text-shiftover-cardtext'>
                            <div className='flex flex-row'>
                                <TextInput
                                    placeHolder='Name'
                                    value={name}
                                    onChange={setName}
                                    style={'w-[186px]'}
                                ></TextInput>
                                <TextInput
                                    placeHolder='Age'
                                    value={age}
                                    onChange={setAge}
                                    style={'w-[61px]'}
                                ></TextInput>
                                <TextInput
                                    placeHolder='Sex'
                                    value={sex}
                                    onChange={setSex}
                                    style={'w-[50px]'}
                                ></TextInput>
                                <TextInput
                                    placeHolder='Eduction'
                                    value={education}
                                    onChange={setEducation}
                                    style={'w-[172px]'}
                                ></TextInput>
                                <TextInput
                                    placeHolder='Occupation'
                                    value={occupation}
                                    onChange={setOccupation}
                                    style={'w-[116px]'}
                                ></TextInput>
                            </div>
                            <div className='flex flex-row'>
                                <TextInput
                                    placeHolder='Admssion Date'
                                    value={admissionDate}
                                    onChange={setAdmissionDate}
                                    style={'w-[142px]'}
                                ></TextInput>
                                <TextInput
                                    placeHolder='Time'
                                    value={time}
                                    onChange={setTime}
                                    style={'w-[89px]'}
                                ></TextInput>
                                <TextInput
                                    placeHolder='Height'
                                    value={height}
                                    onChange={setHeight}
                                    style={'w-[89px]'}
                                ></TextInput>
                                <TextInput
                                    placeHolder='Weight'
                                    value={weight}
                                    onChange={setWeight}
                                    style={'w-[89px]'}
                                ></TextInput>
                            </div>
                            <div className='flex flex-row'>
                                <div className='mr-[20px]'>
                                    Mode of Arrival:
                                </div>
                                <input
                                    type='radio'
                                    id='Walk'
                                    name='modeOfArrival'
                                    value='Walk'
                                    checked={modeOfArrival === 'Walk'}
                                    onChange={() => setModeOfArrival('Walk')}
                                />
                                <p className='ml-[6px] mr-[20px]'>Walk</p>
                                <input
                                    type='radio'
                                    id='Wheel Chair'
                                    name='modeOfArrival'
                                    value='Wheel Chair'
                                    checked={modeOfArrival === 'Wheel Chair'}
                                    onChange={() =>
                                        setModeOfArrival('Wheel Chair')
                                    }
                                />
                                <p className='ml-[6px] mr-[20px]'>
                                    Wheel Chair
                                </p>
                                <input
                                    type='radio'
                                    id='Stretcher'
                                    name='modeOfArrival'
                                    value='Stretcher'
                                    checked={modeOfArrival === 'Stretcher'}
                                    onChange={() =>
                                        setModeOfArrival('Stretcher')
                                    }
                                />
                                <p className='ml-[6px] mr-[20px]'>Stretcher</p>
                                <input
                                    type='radio'
                                    className='mr-[6px]'
                                    id='Other'
                                    name='modeOfArrival'
                                    value='Other'
                                    checked={modeOfArrival === 'Other'}
                                    onChange={() => setModeOfArrival('Other')}
                                />
                                <TextInput
                                    placeHolder='Other'
                                    value={modeOfArrivalOther}
                                    onChange={setModeOfArrivalOther}
                                    disabled={modeOfArrival !== 'Other'}
                                    style={'w-[89px]'}
                                ></TextInput>
                            </div>
                            <div className='flex flex-row'>
                                <div className='mr-[25px]'>Admitted Form: </div>
                                <input
                                    type='radio'
                                    id='ER Trauma'
                                    name='admittedForm'
                                    value='ER Trauma'
                                    checked={admittedForm === 'Walk'}
                                    onChange={() => setAdmittedForm('Walk')}
                                />
                                <p className='ml-[6px] mr-[20px]'>ER Trauma</p>
                                <input
                                    type='radio'
                                    id='OPD'
                                    name='admittedForm'
                                    value='OPD'
                                    checked={admittedForm === 'OPD'}
                                    onChange={() => setAdmittedForm('OPD')}
                                />
                                <p className='ml-[6px] mr-[20px]'>OPD</p>
                                <input
                                    type='radio'
                                    id='Refer'
                                    name='admittedForm'
                                    value='Refer'
                                    checked={admittedForm === 'Refer'}
                                    onChange={() => setAdmittedForm('Refer')}
                                />
                                <p className='ml-[6px] mr-[20px]'>Refer</p>
                                <input
                                    type='radio'
                                    className='mr-[6px]'
                                    id='Other'
                                    name='admittedForm'
                                    value='Other'
                                    checked={admittedForm === 'Other'}
                                    onChange={() => setAdmittedForm('Other')}
                                />
                                <TextInput
                                    placeHolder='Other'
                                    value={admittedFormOther}
                                    onChange={setAdmittedFormOther}
                                    disabled={admittedForm !== 'Other'}
                                    style={'w-[89px]'}
                                ></TextInput>
                            </div>
                        </div>
                    </div>
                    <div className='ml-[12px] mt-[12px] flex w-[750px] flex-col gap-[12px]'>
                        <TextInput
                            placeHolder='Diagnosis'
                            value={diagnosis}
                            onChange={setDiagnosis}
                        ></TextInput>
                        <TextInput
                            placeHolder='Chief Complaint'
                            value={chiefComplaint}
                            onChange={setChiefComplaint}
                        ></TextInput>
                        <TextInput
                            placeHolder='Past Illness'
                            value={pastIllness}
                            onChange={setPastIllness}
                        ></TextInput>
                        <TextInput
                            placeHolder='Past Illness History'
                            value={pastIllnessHistory}
                            onChange={setPastIllnessHistory}
                        ></TextInput>
                        <TextInput
                            placeHolder='Family Illness History'
                            value={familyIllnessHistory}
                            onChange={setFamilyIllnessHistory}
                        ></TextInput>
                        <div className='flex flex-row gap-[5px]'>
                            <TextInput
                                placeHolder='Allergies (Drug, Food, Others)'
                                value={allergies}
                                onChange={setAllergies}
                                style={'w-[234px]'}
                                row={2}
                            ></TextInput>
                            <TextInput
                                placeHolder='Reactions'
                                value={reactions}
                                onChange={setReactions}
                                style={'w-[234px]'}
                                row={2}
                            ></TextInput>
                        </div>
                    </div>
                    <div className='absolute right-[10px] top-[100px] h-[174px] w-[201px] rounded-[5px] border-[1px] border-[#b7b1b1] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]'>
                        <div className='ml-[10px] mt-[10px]'>
                            Vital Sign:
                            <div className='ml-[7px] mt-[8px] flex flex-col gap-[15px]'>
                                <TextInput
                                    placeHolder='Temp'
                                    value={temp}
                                    onChange={setTemp}
                                    style='w-[82px]'
                                    unit='C'
                                ></TextInput>
                                <TextInput
                                    placeHolder='HR'
                                    value={hr}
                                    onChange={setHr}
                                    style='w-[82px]'
                                    unit='/ min'
                                ></TextInput>
                                <TextInput
                                    placeHolder='Resp'
                                    value={resp}
                                    onChange={setResp}
                                    style='w-[82px]'
                                    unit='/ min'
                                ></TextInput>
                                <TextInput
                                    placeHolder='Temp'
                                    value={bP}
                                    onChange={setBP}
                                    style='w-[82px]'
                                    unit='mmHg'
                                ></TextInput>
                            </div>
                        </div>
                    </div>
                </CardHolder>
            </div>
            <div className='mt-[23px]'>
                <SaveButton onClick={handleSubmit}></SaveButton>
            </div>
        </div>
    );
}
