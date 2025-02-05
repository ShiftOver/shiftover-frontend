import { useState } from 'react';
import CardHolder from '../../CardHolder';
import RadioButton from '../../Radiobutton';
import SaveButton from '../../SaveButton';
import TextInput from '../../TextInput';

export type MobilityTeachingProps = {
    id: any;
};

export default function MobilityTeaching({ id }: MobilityTeachingProps) {
    const [activity, setActivity] = useState('');
    const [activityOther, setActivityOther] = useState('');
    const [prosthetic, setProsthetic] = useState('');
    const [prostheticArtificial, setProstheticArtificial] = useState('');
    const [prostheticOther, setProstheticOther] = useState('');
    const [injury, setInjury] = useState('');
    const [injuryYes, setInjuryYes] = useState('');
    const [dominantHand, setDominantHand] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {};
        console.log(formData);
    };
    return (
        <div className='ml-[27px] mt-[23px] justify-items-center'>
            <div className='flex w-full flex-col justify-items-start gap-[31px]'>
                <CardHolder
                    path='jogging'
                    type='NurseAssessmentForm'
                    name='Mobility'
                >
                    <div className='ml-[14px] flex w-[986px] flex-row'>
                        <div className='m flex flex-col gap-[12px]'>
                            <p>Activity/ function</p>
                            <RadioButton
                                value={activity}
                                onChange={setActivity}
                                name='Activity'
                                placeHolder='Independent'
                                style='ml-[6px]'
                            ></RadioButton>
                            <RadioButton
                                value={activity}
                                onChange={setActivity}
                                name='Activity'
                                placeHolder='Requires Assistance in'
                                style='ml-[6px]'
                            ></RadioButton>
                            <div className='ml-[21px] grid grid-cols-2 gap-x-[31px] gap-y-[12px]'>
                                <p>u Eating</p>
                                <p>u Dressing</p>
                                <p>u Toileting</p>
                                <p>u Bed Mobility</p>
                                <p>u Transferring</p>
                                <p>u Ambulation</p>
                            </div>
                            <div className='ml-[21px]'>
                                <TextInput
                                    placeHolder='u Other'
                                    value={activityOther}
                                    onChange={setActivityOther}
                                    disabled={
                                        activity !== 'Requires Assistance in'
                                    }
                                    style={'w-[173px]'}
                                ></TextInput>
                            </div>
                        </div>
                        <div className='ml-[74px] flex flex-col gap-[12px]'>
                            <p>Prosthetic/ Assistive Devices:</p>
                            <p>(Only require assistive device)</p>
                            <RadioButton
                                value={prosthetic}
                                onChange={setProsthetic}
                                name='Prosthetic'
                                placeHolder='Cane'
                                style='ml-[6px]'
                            ></RadioButton>
                            <RadioButton
                                value={prosthetic}
                                onChange={setProsthetic}
                                name='Prosthetic'
                                placeHolder='Walker'
                                style='ml-[6px]'
                            ></RadioButton>
                            <RadioButton
                                value={prosthetic}
                                onChange={setProsthetic}
                                name='Prosthetic'
                                placeHolder='Wheel Chair'
                                style='ml-[6px]'
                            ></RadioButton>
                            <RadioButton
                                value={prosthetic}
                                onChange={setProsthetic}
                                name='Prosthetic'
                                placeHolder='Artificial Limb'
                                style='ml-[6px]'
                            >
                                <TextInput
                                    placeHolder='Artificial Limb'
                                    value={prostheticArtificial}
                                    onChange={setProstheticArtificial}
                                    disabled={prosthetic !== 'Artificial Limb'}
                                    style={'w-[145px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={prosthetic}
                                onChange={setProsthetic}
                                name='Prosthetic'
                                placeHolder='Other'
                                style='ml-[6px]'
                            >
                                <TextInput
                                    placeHolder='Other'
                                    value={prostheticOther}
                                    onChange={setProstheticOther}
                                    disabled={prosthetic !== 'Other'}
                                    style={'w-[198px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='ml-[60px] flex flex-col gap-[12px]'>
                            <p>Injury:</p>
                            <RadioButton
                                value={injury}
                                onChange={setInjury}
                                name='Injury'
                                placeHolder='No'
                                style='ml-[6px]'
                            ></RadioButton>
                            <RadioButton
                                value={injury}
                                onChange={setInjury}
                                name='Injury'
                                placeHolder='Yes'
                                style='ml-[6px]'
                            >
                                <TextInput
                                    placeHolder='Other'
                                    value={injuryYes}
                                    onChange={setInjuryYes}
                                    disabled={injury !== 'Yes'}
                                    style={'w-[242px]'}
                                ></TextInput>
                            </RadioButton>
                            <TextInput
                                value={injuryYes}
                                onChange={setInjuryYes}
                                disabled={injury !== 'Yes'}
                                style={'w-[303px]'}
                            ></TextInput>
                            <TextInput
                                value={injuryYes}
                                onChange={setInjuryYes}
                                disabled={injury !== 'Yes'}
                                style={'w-[303px]'}
                            ></TextInput>
                            <p>Dominant Hand:</p>
                            <div className='flex flex-row'>
                                <RadioButton
                                    value={dominantHand}
                                    onChange={setDominantHand}
                                    name='Dominant Hand'
                                    placeHolder='Right'
                                    style='ml-[6px] mr-[43px]'
                                ></RadioButton>
                                <RadioButton
                                    value={dominantHand}
                                    onChange={setDominantHand}
                                    name='Dominant Hand'
                                    placeHolder='Left'
                                    style='ml-[6px]'
                                ></RadioButton>
                            </div>
                        </div>
                    </div>
                </CardHolder>
                <CardHolder
                    path='information'
                    type='NurseAssessmentForm'
                    name='Information/ Teaching/ Learning'
                ></CardHolder>
            </div>
            <div className='mt-[23px]'>
                <SaveButton onClick={handleSubmit}></SaveButton>
            </div>
        </div>
    );
}
