import { useState } from 'react';
import CardHolder from '../../CardHolder';
import RadioButton from '../../Radiobutton';
import SaveButton from '../../SaveButton';
import TextInput from '../../TextInput';

export type NeuromuscularProps = {
    id: any;
};

export default function Neuromuscular({ id }: NeuromuscularProps) {
    const [lOC, setLOC] = useState('');
    const [vision, setVision] = useState('');
    const [visionRT, setVisionRT] = useState('');
    const [visionLT, setVisionLT] = useState('');
    const [visionDevice, setVisionDevice] = useState('');
    const [hearingRT, setHearingRT] = useState('');
    const [hearingLT, setHearingLT] = useState('');
    const [hearing, setHearing] = useState('');
    const [hearingDevice, setHearingDevice] = useState('');
    const [speech, setSpeech] = useState('');
    const [speechDevice, setSpeechDevice] = useState('');
    const [smell, setSmell] = useState('');
    const [smellImpaired, setSmellImpaired] = useState('');
    const [sensation, setSensation] = useState('');
    const [sensationNumbess, setSensationNumbess] = useState('');
    const [sensationTingling, setSensationTingling] = useState('');
    const [hand, setHand] = useState('');
    const [joint, setJoint] = useState('');
    const [jointSwollen, setJointSwollen] = useState('');
    const [jointStiff, setJointStiff] = useState('');
    const [jointTender, setJointTender] = useState('');
    const [jointOther, setJointOther] = useState('');
    const [weakness, setWeakness] = useState('');
    const [weaknessYes, setWeaknessYes] = useState('');
    const [paralysis, setPatalysis] = useState('');
    const [paralysisYes, setPatalysisYes] = useState('');
    const [seizure, setSeizure] = useState('');
    const [seizureYes, setSeizureYes] = useState('');
    const [movement, setMovement] = useState('');
    const [movementAbnormal, setMovementAbnormal] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {};
        console.log(formData);
    };
    return (
        <div className='ml-[27px] mt-[23px] justify-items-center'>
            <div className='flex w-full flex-col justify-items-start gap-[37px]'>
                <CardHolder
                    path='brain'
                    type='NurseAssessmentForm'
                    name='Neurosensory'
                >
                    <div className='ml-[14px] flex w-[986px] flex-col gap-[12px]'>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>
                                Level of Consciousness (LOC):
                            </p>
                            <RadioButton
                                value={lOC}
                                onChange={setLOC}
                                name='LOC'
                                placeHolder='Alert, Awake and Oriented'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={lOC}
                                onChange={setLOC}
                                name='LOC'
                                placeHolder='Lethargic (sleepy but easily aroused)'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <RadioButton
                                value={lOC}
                                onChange={setLOC}
                                name='LOC'
                                placeHolder='Stuporous (responsive only to noxious stimuli)'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={lOC}
                                onChange={setLOC}
                                name='LOC'
                                placeHolder='Comatose (not responsive to noxious stimuli)'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Vision:</p>
                            <RadioButton
                                value={vision}
                                onChange={setVision}
                                name='vision'
                                placeHolder='Normal'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={vision}
                                onChange={setVision}
                                name='vision'
                                placeHolder='Impaired'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <TextInput
                                placeHolder='u RT'
                                value={visionRT}
                                onChange={setVisionRT}
                                style={'w-[104px] mr-[18px]'}
                            ></TextInput>
                            <TextInput
                                placeHolder='u Lt'
                                value={visionLT}
                                onChange={setVisionLT}
                                style={'w-[104px] mr-[18px]'}
                            ></TextInput>
                            <TextInput
                                placeHolder='Device'
                                value={visionDevice}
                                onChange={setVisionDevice}
                                style={'w-[104px]'}
                            ></TextInput>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Hearing:</p>
                            <RadioButton
                                value={hearing}
                                onChange={setHearing}
                                name='Hearing'
                                placeHolder='Normal'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={hearing}
                                onChange={setHearing}
                                name='Hearing'
                                placeHolder='Impaired'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <TextInput
                                placeHolder='u RT'
                                value={hearingRT}
                                onChange={setHearingRT}
                                style={'w-[104px] mr-[18px]'}
                            ></TextInput>
                            <TextInput
                                placeHolder='u Lt'
                                value={hearingLT}
                                onChange={setHearingLT}
                                style={'w-[104px] mr-[18px]'}
                            ></TextInput>
                            <TextInput
                                placeHolder='Device'
                                value={hearingDevice}
                                onChange={setHearingDevice}
                                style={'w-[104px]'}
                            ></TextInput>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Speech:</p>
                            <RadioButton
                                value={speech}
                                onChange={setSpeech}
                                name='Speech'
                                placeHolder='Normal'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={speech}
                                onChange={setSpeech}
                                name='Speech'
                                placeHolder='Impaired'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <TextInput
                                placeHolder='Device'
                                value={speechDevice}
                                onChange={setSpeechDevice}
                                style={'w-[104px]'}
                            ></TextInput>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Smell:</p>
                            <RadioButton
                                value={smell}
                                onChange={setSmell}
                                name='Smell'
                                placeHolder='Normal'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={smell}
                                onChange={setSmell}
                                name='Smell'
                                placeHolder='Impaired'
                                style='ml-[6px] mr-[20px]'
                            >
                                <TextInput
                                    placeHolder='Impaired'
                                    value={smellImpaired}
                                    onChange={setSmellImpaired}
                                    disabled={smell !== 'Impaired'}
                                    style={'w-[104px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Sensation:</p>
                            <RadioButton
                                value={sensation}
                                onChange={setSensation}
                                name='Sensation'
                                placeHolder='Normal'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={sensation}
                                onChange={setSensation}
                                name='Sensation'
                                placeHolder='Numbness'
                                style='ml-[6px] mr-[20px]'
                            >
                                <TextInput
                                    placeHolder='Numbness'
                                    value={sensationNumbess}
                                    onChange={setSensationNumbess}
                                    disabled={sensation !== 'Numbness'}
                                    style={'w-[104px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={sensation}
                                onChange={setSensation}
                                name='Sensation'
                                placeHolder='Tingling'
                                style='ml-[6px] mr-[20px]'
                            >
                                <TextInput
                                    placeHolder='Tingling'
                                    value={sensationTingling}
                                    onChange={setSensationTingling}
                                    disabled={sensation !== 'Tingling'}
                                    style={'w-[104px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                    </div>
                </CardHolder>
                <CardHolder
                    path='muscle'
                    type='NurseAssessmentForm'
                    name='Musculo-skeletal'
                >
                    <div className='ml-[14px] flex w-[986px] flex-col gap-[12px]'>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Hand Grasps:</p>
                            <RadioButton
                                value={hand}
                                onChange={setHand}
                                name='Hand Grasps'
                                placeHolder='Strong'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={hand}
                                onChange={setHand}
                                name='Hand Grasps'
                                placeHolder='Week u Rt u Lt'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={hand}
                                onChange={setHand}
                                name='Hand Grasps'
                                placeHolder='Absent u Rt u Lt'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Joint:</p>
                            <RadioButton
                                value={joint}
                                onChange={setJoint}
                                name='Joint'
                                placeHolder='WNL'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={joint}
                                onChange={setJoint}
                                name='Joint'
                                placeHolder='Swollen'
                                style='ml-[6px] mr-[9px]'
                            >
                                <TextInput
                                    placeHolder='Swollen'
                                    value={jointSwollen}
                                    onChange={setJointSwollen}
                                    disabled={joint !== 'Swollen'}
                                    style={'w-[94px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={joint}
                                onChange={setJoint}
                                name='Joint'
                                placeHolder='Stiff'
                                style='ml-[6px] mr-[9px]'
                            >
                                <TextInput
                                    placeHolder='Stiff'
                                    value={jointStiff}
                                    onChange={setJointStiff}
                                    disabled={joint !== 'Stiff'}
                                    style={'w-[94px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={joint}
                                onChange={setJoint}
                                name='Joint'
                                placeHolder='Tender'
                                style='ml-[6px] mr-[9px]'
                            >
                                <TextInput
                                    placeHolder='Tender'
                                    value={jointTender}
                                    onChange={setJointTender}
                                    disabled={joint !== 'Tender'}
                                    style={'w-[94px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={joint}
                                onChange={setJoint}
                                name='Joint'
                                placeHolder='Other'
                                style='ml-[6px] mr-[9px]'
                            >
                                <TextInput
                                    placeHolder='Other'
                                    value={jointOther}
                                    onChange={setJointOther}
                                    disabled={joint !== 'Other'}
                                    style={'w-[94px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Weakness:</p>
                            <RadioButton
                                value={weakness}
                                onChange={setWeakness}
                                name='Weakness'
                                placeHolder='No'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={weakness}
                                onChange={setWeakness}
                                name='Weakness'
                                placeHolder='Yes'
                                style='ml-[6px] mr-[20px]'
                            >
                                <TextInput
                                    placeHolder='Yes'
                                    value={weaknessYes}
                                    onChange={setWeaknessYes}
                                    disabled={weakness !== 'Yes'}
                                    style={'w-[94px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Paralysis:</p>
                            <RadioButton
                                value={paralysis}
                                onChange={setPatalysis}
                                name='Paralysis'
                                placeHolder='No'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={paralysis}
                                onChange={setPatalysis}
                                name='Paralysis'
                                placeHolder='Yes'
                                style='ml-[6px] mr-[20px]'
                            >
                                <TextInput
                                    placeHolder='Yes'
                                    value={paralysisYes}
                                    onChange={setPatalysisYes}
                                    disabled={paralysis !== 'Yes'}
                                    style={'w-[94px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Seizure:</p>
                            <RadioButton
                                value={seizure}
                                onChange={setSeizure}
                                name='Seizure'
                                placeHolder='No'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={seizure}
                                onChange={setSeizure}
                                name='Seizure'
                                placeHolder='Yes'
                                style='ml-[6px] mr-[20px]'
                            >
                                <TextInput
                                    placeHolder='Yes'
                                    value={seizureYes}
                                    onChange={setSeizureYes}
                                    disabled={seizure !== 'Yes'}
                                    style={'w-[94px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Movement:</p>
                            <RadioButton
                                value={movement}
                                onChange={setMovement}
                                name='Movement'
                                placeHolder='Normal'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={movement}
                                onChange={setMovement}
                                name='Movement'
                                placeHolder='Abnormal'
                                style='ml-[6px] mr-[20px]'
                            >
                                <TextInput
                                    placeHolder='Abnormal'
                                    value={movementAbnormal}
                                    onChange={setMovementAbnormal}
                                    disabled={movement !== 'Abnormal'}
                                    style={'w-[94px]'}
                                ></TextInput>
                            </RadioButton>
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
