import { useState } from 'react';
import CardHolder from '../../CardHolder';
import SaveButton from '../../SaveButton';
import RadioButton from '../../Radiobutton';
import TextInput from '../../TextInput';

export type CardiopulmonaryProps = {
    id: any;
};

export default function Cardiopulmonary({ id }: CardiopulmonaryProps) {
    const [rate, setRate] = useState('');
    const [rhythm, setRhythm] = useState('');
    const [effort, setEffort] = useState('');
    const [effortOther, setEffortOther] = useState('');
    const [cough, setCough] = useState('');
    const [coughOther, setCoughOther] = useState('');
    const [sputum, setSuptum] = useState('');
    const [sputumColor, setSuptumColor] = useState('');
    const [sputumOther, setSuptumOther] = useState('');
    const [pulseRhythm, setPulseRhythm] = useState('');
    const [pulseAmplitude, setPulseAmplitude] = useState('');
    const [pulseAmplitudeWeak, setPulseAmplitudeWeak] = useState('');
    const [pulseAmplitudeAbsent, setPulseAmplitudeAbsent] = useState('');
    const [pulseRate, setPulseRate] = useState('');
    const [edema, setEdema] = useState('');
    const [edemaLocalized, setEdemaLocalized] = useState('');
    const [edemaPitting, setEdemaPitting] = useState('');
    const [neckVein, setNeckVein] = useState('');
    const [chestPain, setChestPain] = useState('');
    const [location, setLocation] = useState('');
    const [referredPain, setReferredPain] = useState('');
    const [duration, setDuration] = useState('');
    const [frequency, setFrequency] = useState('');
    const [current, setCurrent] = useState('');
    const [currentOther, setCurrentOther] = useState('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {};
        console.log(formData);
    };
    return (
        <div className='ml-[27px] mt-[23px] justify-items-center'>
            <div className='flex w-full flex-col justify-items-start gap-[17px]'>
                <div className='flex w-full flex-row gap-[40px]'>
                    <CardHolder
                        path='lung'
                        type='NurseAssessmentForm'
                        name='Pulmonary'
                    >
                        <div className='ml-[14px] flex w-[705px] flex-col gap-[12px]'>
                            <div className='flex flex-row'>
                                <p className='mr-[20px]'>Rate:</p>
                                <RadioButton
                                    value={rate}
                                    onChange={setRate}
                                    name='rate'
                                    placeHolder='Eupnea'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={rate}
                                    onChange={setRate}
                                    name='rate'
                                    placeHolder='Tachypnea'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={rate}
                                    onChange={setRate}
                                    name='rate'
                                    placeHolder='Bradypnea'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={rate}
                                    onChange={setRate}
                                    name='rate'
                                    placeHolder='Apnea'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                            </div>
                            <div className='flex flex-row'>
                                <p className='mr-[20px]'>Rhythm/ Depth:</p>
                                <RadioButton
                                    value={rhythm}
                                    onChange={setRhythm}
                                    name='Rhythm/ Depth'
                                    placeHolder='Regular'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={rhythm}
                                    onChange={setRhythm}
                                    name='Rhythm/ Depth'
                                    placeHolder='Irregular'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={rhythm}
                                    onChange={setRhythm}
                                    name='Rhythm/ Depth'
                                    placeHolder='Deep'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={rhythm}
                                    onChange={setRhythm}
                                    name='Rhythm/ Depth'
                                    placeHolder='Shallow'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                            </div>
                            <div className='flex flex-row'>
                                <p className='mr-[20px]'>Effort:</p>
                                <RadioButton
                                    value={effort}
                                    onChange={setEffort}
                                    name='Effort'
                                    placeHolder='Easy'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={effort}
                                    onChange={setEffort}
                                    name='Effort'
                                    placeHolder='Dyspnea'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={effort}
                                    onChange={setEffort}
                                    name='Effort'
                                    placeHolder='Orthropnea'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={effort}
                                    onChange={setEffort}
                                    name='Effort'
                                    placeHolder='Other'
                                    style='ml-[6px] mr-[20px]'
                                >
                                    <TextInput
                                        placeHolder='Other'
                                        value={effortOther}
                                        onChange={setEffortOther}
                                        disabled={effort !== 'Other'}
                                        style={'w-[83px]'}
                                    ></TextInput>
                                </RadioButton>
                            </div>
                            <div className='flex flex-row'>
                                <p className='mr-[20px]'>Cough:</p>
                                <RadioButton
                                    value={cough}
                                    onChange={setCough}
                                    name='Cough'
                                    placeHolder='None'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={cough}
                                    onChange={setCough}
                                    name='Cough'
                                    placeHolder='Dry'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={cough}
                                    onChange={setCough}
                                    name='Cough'
                                    placeHolder='Productive'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={cough}
                                    onChange={setCough}
                                    name='Cough'
                                    placeHolder='Other'
                                    style='ml-[6px] mr-[20px]'
                                >
                                    <TextInput
                                        placeHolder='Other'
                                        value={coughOther}
                                        onChange={setCoughOther}
                                        disabled={cough !== 'Other'}
                                        style={'w-[83px]'}
                                    ></TextInput>
                                </RadioButton>
                            </div>
                            <div className='flex flex-row'>
                                <p className='mr-[20px]'>Sputum:</p>
                                <RadioButton
                                    value={sputum}
                                    onChange={setSuptum}
                                    name='Sputum'
                                    placeHolder='None'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={sputum}
                                    onChange={setSuptum}
                                    name='Sputum'
                                    placeHolder='Hemoptysis'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={sputum}
                                    onChange={setSuptum}
                                    name='Sputum'
                                    placeHolder='Frothy'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={sputum}
                                    onChange={setSuptum}
                                    name='Sputum'
                                    placeHolder='Color'
                                    style='ml-[6px] mr-[11px]'
                                >
                                    <TextInput
                                        placeHolder='Color'
                                        value={sputumColor}
                                        onChange={setSuptumColor}
                                        disabled={sputum !== 'Color'}
                                        style={'w-[83px]'}
                                    ></TextInput>
                                </RadioButton>
                                <RadioButton
                                    value={sputum}
                                    onChange={setSuptum}
                                    name='Sputum'
                                    placeHolder='Other'
                                    style='ml-[6px] mr-[20px]'
                                >
                                    <TextInput
                                        placeHolder='Other'
                                        value={sputumOther}
                                        onChange={setSuptumOther}
                                        disabled={sputum !== 'Other'}
                                        style={'w-[83px]'}
                                    ></TextInput>
                                </RadioButton>
                            </div>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='boxinfo'
                        type='NurseAssessmentForm'
                        name='Current treatment'
                    >
                        <div className='ml-[14px] flex w-[218px] flex-col gap-[10px]'>
                            <div className='flex flex-row'>
                                <RadioButton
                                    value={current}
                                    onChange={setCurrent}
                                    name='Current treatment'
                                    placeHolder='None'
                                    style='ml-[6px] mr-[37px]'
                                ></RadioButton>
                                <RadioButton
                                    value={current}
                                    onChange={setCurrent}
                                    name='Current treatment'
                                    placeHolder='O2'
                                    style='ml-[6px]'
                                ></RadioButton>
                            </div>
                            <RadioButton
                                value={current}
                                onChange={setCurrent}
                                name='Current treatment'
                                placeHolder='ETT'
                                style='ml-[6px]'
                            ></RadioButton>
                            <RadioButton
                                value={current}
                                onChange={setCurrent}
                                name='Current treatment'
                                placeHolder='Tracheostomy'
                                style='ml-[6px]'
                            ></RadioButton>
                            <RadioButton
                                value={current}
                                onChange={setCurrent}
                                name='Current treatment'
                                placeHolder='Ventilator'
                                style='ml-[6px]'
                            ></RadioButton>
                            <RadioButton
                                value={current}
                                onChange={setCurrent}
                                name='Current treatment'
                                placeHolder='Chest tube'
                                style='ml-[6px]'
                            ></RadioButton>
                            <RadioButton
                                value={current}
                                onChange={setCurrent}
                                name='Current treatment'
                                placeHolder='Other'
                                style='ml-[6px]'
                            >
                                <TextInput
                                    placeHolder='Other'
                                    value={currentOther}
                                    onChange={setCurrentOther}
                                    disabled={current !== 'Other'}
                                    style={'w-[91px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                    </CardHolder>
                </div>
                <CardHolder
                    path='heart'
                    type='NurseAssessmentForm'
                    name='CardioVascular'
                >
                    <div className='ml-[14px] flex w-[705px] flex-col gap-[12px]'>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Pulse Rhythm:</p>
                            <RadioButton
                                value={pulseRhythm}
                                onChange={setPulseRhythm}
                                name='Pulse Rhythm'
                                placeHolder='Regular'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={pulseRhythm}
                                onChange={setPulseRhythm}
                                name='Pulse Rhythm'
                                placeHolder='Irregular'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Pulse Amplitude:</p>
                            <RadioButton
                                value={pulseAmplitude}
                                onChange={setPulseAmplitude}
                                name='Pulse Amplitude'
                                placeHolder='Strong'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={pulseAmplitude}
                                onChange={setPulseAmplitude}
                                name='Pulse Amplitude'
                                placeHolder='Weak'
                                style='ml-[6px] mr-[11px]'
                            >
                                <TextInput
                                    placeHolder='Weak'
                                    value={pulseAmplitudeWeak}
                                    onChange={setPulseAmplitudeWeak}
                                    disabled={pulseAmplitude !== 'Weak'}
                                    style={'w-[79px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={pulseAmplitude}
                                onChange={setPulseAmplitude}
                                name='Pulse Amplitude'
                                placeHolder='Absent'
                                style='ml-[6px]'
                            >
                                <TextInput
                                    placeHolder='Absent'
                                    value={pulseAmplitudeAbsent}
                                    onChange={setPulseAmplitudeAbsent}
                                    disabled={pulseAmplitude !== 'Absent'}
                                    style={'w-[79px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Pulse Rate:</p>
                            <RadioButton
                                value={pulseRate}
                                onChange={setPulseRate}
                                name='Pulse Rate'
                                placeHolder='Normal'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={pulseRate}
                                onChange={setPulseRate}
                                name='Pulse Rate'
                                placeHolder='Tachycardia'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={pulseRate}
                                onChange={setPulseRate}
                                name='Pulse Rate'
                                placeHolder='Bradycardia'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Edema:</p>
                            <RadioButton
                                value={edema}
                                onChange={setEdema}
                                name='Edema'
                                placeHolder='None'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={edema}
                                onChange={setEdema}
                                name='Edema'
                                placeHolder='Generalized'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={edema}
                                onChange={setEdema}
                                name='Edema'
                                placeHolder='Localized'
                                style='ml-[6px] mr-[11px]'
                            >
                                <TextInput
                                    placeHolder='Localized'
                                    value={edemaLocalized}
                                    onChange={setEdemaLocalized}
                                    disabled={edema !== 'Localized'}
                                    style={'w-[79px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={edema}
                                onChange={setEdema}
                                name='Edema'
                                placeHolder='Pitting'
                                style='ml-[6px] mr-[20px]'
                            >
                                <TextInput
                                    placeHolder='Pitting'
                                    value={edemaPitting}
                                    onChange={setEdemaPitting}
                                    disabled={edema !== 'Pitting'}
                                    style={'w-[79px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Neck Vien Engorged:</p>
                            <RadioButton
                                value={neckVein}
                                onChange={setNeckVein}
                                name='Neck Vien Engorged'
                                placeHolder='No'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={neckVein}
                                onChange={setNeckVein}
                                name='Neck Vien Engorged'
                                placeHolder='Yes'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <p>Chest Pain:</p>
                        <RadioButton
                            value={chestPain}
                            onChange={setChestPain}
                            name='Chest Pain'
                            placeHolder='No'
                            style='ml-[6px] mr-[20px]'
                        ></RadioButton>
                        <RadioButton
                            value={chestPain}
                            onChange={setChestPain}
                            name='Chest Pain'
                            placeHolder='Yes'
                            style='ml-[6px] mr-[20px]'
                        ></RadioButton>
                        <TextInput
                            placeHolder='Location'
                            value={location}
                            onChange={setLocation}
                            disabled={chestPain !== 'Yes'}
                            style={'w-[235px]'}
                        ></TextInput>
                        <TextInput
                            placeHolder='Reffered Pain'
                            value={referredPain}
                            onChange={setReferredPain}
                            disabled={chestPain !== 'Yes'}
                            style={'w-[201px]'}
                        ></TextInput>
                        <TextInput
                            placeHolder='Duration'
                            value={duration}
                            onChange={setDuration}
                            disabled={chestPain !== 'Yes'}
                            style={'w-[235px]'}
                        ></TextInput>
                        <TextInput
                            placeHolder='Frequency'
                            value={frequency}
                            onChange={setFrequency}
                            disabled={chestPain !== 'Yes'}
                            style={'w-[221px]'}
                        ></TextInput>
                    </div>
                </CardHolder>
            </div>
            <div className='mb-[23px] mt-[23px]'>
                <SaveButton onClick={handleSubmit}></SaveButton>
            </div>
        </div>
    );
}
