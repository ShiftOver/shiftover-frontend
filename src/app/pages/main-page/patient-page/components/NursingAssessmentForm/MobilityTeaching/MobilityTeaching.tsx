import { useState } from 'react';
import CardHolder from '../../CardHolder';
import RadioButton from '../../Radiobutton';
import SaveButton from '../../SaveButton';
import TextInput from '../../TextInput';
import { useRecoilState } from 'recoil';
import { selectedMobility, selectedTeaching } from '@/recoil/atoms';

export type MobilityTeachingProps = {
    id: any;
    handleSubmit: any;
};

export default function MobilityTeaching({
    id,
    handleSubmit,
}: MobilityTeachingProps) {
    const [activity, setActivity] = useState('');
    const [activityOther, setActivityOther] = useState('');
    const [prosthetic, setProsthetic] = useState('');
    const [prostheticArtificial, setProstheticArtificial] = useState('');
    const [prostheticOther, setProstheticOther] = useState('');
    const [injury, setInjury] = useState('');
    const [injuryYes, setInjuryYes] = useState('');
    const [dominantHand, setDominantHand] = useState('');
    const [information, setInformation] = useState('');
    const [informationOther, setInformationOther] = useState('');

    const [mobility, setMobility] = useRecoilState<any>(selectedMobility);
    const useSyncMobility = () => {
        const update = (field: string, value: any) => {
            setMobility((prev: any) => ({
                ...prev,
                [field]: value,
            }));
        };

        return update;
    };
    const updateMobility = useSyncMobility();

    const [teaching, setTeaching] = useRecoilState<any>(selectedTeaching);

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
                >
                    <div className='ml-[14px] flex grid w-[986px] flex-col gap-[11px]'>
                        <div className='flex flex-row'>
                            <div className='mr-[75px] flex flex-col gap-[11px]'>
                                <RadioButton
                                    value={information}
                                    onChange={setInformation}
                                    name='Information'
                                    placeHolder='Orientation'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={information}
                                    onChange={setInformation}
                                    name='Information'
                                    placeHolder='Medication'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={information}
                                    onChange={setInformation}
                                    name='Information'
                                    placeHolder='Self Care'
                                    style='ml-[6px]'
                                ></RadioButton>
                            </div>
                            <div className='mr-[21px] flex flex-col gap-[11px]'>
                                <RadioButton
                                    value={information}
                                    onChange={setInformation}
                                    name='Information'
                                    placeHolder='Disease Process'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={information}
                                    onChange={setInformation}
                                    name='Information'
                                    placeHolder='Pre/ Post - Op. Teaching'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={information}
                                    onChange={setInformation}
                                    name='Information'
                                    placeHolder='Diet Changes'
                                    style='ml-[6px]'
                                ></RadioButton>
                            </div>
                            <div className='mr-[75px] flex flex-col gap-[11px]'>
                                <RadioButton
                                    value={information}
                                    onChange={setInformation}
                                    name='Information'
                                    placeHolder='Signs/ Symptoms to Report to Med. Staff'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={information}
                                    onChange={setInformation}
                                    name='Information'
                                    placeHolder='Infection Control'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <div className='flex flex-row gap-[95px]'>
                                    <RadioButton
                                        value={information}
                                        onChange={setInformation}
                                        name='Information'
                                        placeHolder='Activity'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={information}
                                        onChange={setInformation}
                                        name='Information'
                                        placeHolder='Equiptment'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[11px]'>
                                <RadioButton
                                    value={information}
                                    onChange={setInformation}
                                    name='Information'
                                    placeHolder='Test/ Process Treatment'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={information}
                                    onChange={setInformation}
                                    name='Information'
                                    placeHolder='Wound/ Ostomy Care'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={information}
                                    onChange={setInformation}
                                    name='Information'
                                    placeHolder='Safety'
                                    style='ml-[6px]'
                                ></RadioButton>
                            </div>
                        </div>
                        <RadioButton
                            value={information}
                            onChange={setInformation}
                            name='Information'
                            placeHolder='Other'
                            style='ml-[6px]'
                        >
                            <TextInput
                                placeHolder='Other'
                                value={informationOther}
                                onChange={setInformationOther}
                                disabled={information !== 'Other'}
                                style={'w-[883px]'}
                            ></TextInput>
                        </RadioButton>
                    </div>
                </CardHolder>
            </div>
            <div className='mb-[23px] mt-[23px]'>
                <SaveButton onClick={handleSubmit}></SaveButton>
            </div>
        </div>
    );
}
