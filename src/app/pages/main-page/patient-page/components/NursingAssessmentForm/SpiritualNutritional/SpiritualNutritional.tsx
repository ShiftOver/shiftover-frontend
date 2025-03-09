import { useState } from 'react';
import CardHolder from '../../CardHolder';
import SaveButton from '../../SaveButton';
import TextInput from '../../TextInput';
import RadioButton from '../../Radiobutton';

export type SpiritualNutritionalProps = {
    id: any;
};

export default function SpiritualNutritional({
    id,
}: SpiritualNutritionalProps) {
    const [religion, setReligion] = useState('');
    const [specialReligion, setSpecialReligion] = useState('');
    const [specialReligionDescription, setSpecialReligionDescription] =
        useState('');
    const [anxiety, setAnxiety] = useState('');
    const [anxietyOther, setAnxietyOther] = useState('');
    const [supportSystem, setSupportSystem] = useState('');
    const [supportSystemOther, setSupportSystemOther] = useState('');
    const [diet, setDiet] = useState('');
    const [appetite, setAppetite] = useState('');
    const [specialDiet, setSpecialDiet] = useState('');
    const [specialDietOther, setSpecialDietOther] = useState('');
    const [feeding, setFeeding] = useState('');
    const [swallowing, setSwallowing] = useState('');
    const [gI, setGI] = useState('');
    const [gIOther, setGIOther] = useState('');
    const [weight, setWeight] = useState('');
    const [weightChange, setWeightChange] = useState('');
    const [weightLoss, setWeightLoss] = useState('');
    const [weightLossDuration, setWeightLossDuration] = useState('');
    const [weightGain, setWeightGain] = useState('');
    const [weightGainDuration, setWeightGainDuration] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {};
        console.log(formData);
    };
    return (
        <div className='ml-[27px] mt-[23px] justify-items-center'>
            <div className='flex w-full flex-col justify-items-start gap-[31px]'>
                <CardHolder
                    path='personalLogo'
                    type='NurseAssessmentForm'
                    name='Spiritual/ Cultural Needs/ Emotional support'
                >
                    <div className='ml-[14px] flex w-[986px] flex-col gap-[12px]'>
                        <TextInput
                            placeHolder='Religion'
                            value={religion}
                            onChange={setReligion}
                            style={'w-[174px]'}
                        ></TextInput>
                        <div className='flex flex-row'>
                            <p className='mr-[25px]'>
                                Special Religious/ Cultural considerations for
                                hospitalization:
                            </p>
                            <input
                                type='radio'
                                id='Yes'
                                name='specialReligion'
                                value='Yes'
                                checked={specialReligion === 'Yes'}
                                onChange={() => setSpecialReligion('Yes')}
                            />
                            <p className='ml-[6px] mr-[29px]'>Yes</p>
                            <input
                                type='radio'
                                id='No'
                                name='specialReligion'
                                value='No'
                                checked={specialReligion === 'No'}
                                onChange={() => setSpecialReligion('No')}
                            />
                            <p className='ml-[6px] mr-[29px]'>No</p>
                        </div>
                        <div className='flex flex-row'>
                            <TextInput
                                placeHolder='( If yes, describe '
                                value={specialReligionDescription}
                                onChange={setSpecialReligionDescription}
                                disabled={specialReligion === 'No'}
                                style={'w-[813px]'}
                            ></TextInput>
                            {')'}
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[30px]'>Anxiety:</p>
                            <input
                                type='radio'
                                id='None'
                                name='Anxiety'
                                value='None'
                                checked={anxiety === 'None'}
                                onChange={() => setAnxiety('None')}
                            />
                            <p className='ml-[6px] mr-[24px]'>None</p>
                            <input
                                type='radio'
                                id='Illness'
                                name='Anxiety'
                                value='Illness'
                                checked={anxiety === 'Illness'}
                                onChange={() => setAnxiety('Illness')}
                            />
                            <p className='ml-[6px] mr-[24px]'>Illness</p>
                            <input
                                type='radio'
                                id='Finance'
                                name='Anxiety'
                                value='Finance'
                                checked={anxiety === 'Finance'}
                                onChange={() => setAnxiety('Finance')}
                            />
                            <p className='ml-[6px] mr-[24px]'>Finance</p>
                            <input
                                type='radio'
                                id='Family'
                                name='Anxiety'
                                value='Family'
                                checked={anxiety === 'Family'}
                                onChange={() => setAnxiety('Family')}
                            />
                            <p className='ml-[6px] mr-[24px]'>Family</p>
                            <input
                                type='radio'
                                id='Other'
                                name='Anxiety'
                                value='Other'
                                checked={anxiety === 'Other'}
                                onChange={() => setAnxiety('Other')}
                            />
                            <div className='ml-[6px]'>
                                <TextInput
                                    placeHolder='Other'
                                    value={anxietyOther}
                                    onChange={setAnxietyOther}
                                    disabled={anxiety !== 'Other'}
                                    style={'w-[99px]'}
                                ></TextInput>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[30px]'>Support System:</p>
                            <RadioButton
                                value={supportSystem}
                                onChange={setSupportSystem}
                                name='supportSystem'
                                placeHolder='None'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={supportSystem}
                                onChange={setSupportSystem}
                                name='supportSystem'
                                placeHolder='Parents'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={supportSystem}
                                onChange={setSupportSystem}
                                name='supportSystem'
                                placeHolder='Spouse & Family'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={supportSystem}
                                onChange={setSupportSystem}
                                name='supportSystem'
                                placeHolder='Friend(s)'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={supportSystem}
                                onChange={setSupportSystem}
                                name='supportSystem'
                                placeHolder='Religious Activity'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <input
                                type='radio'
                                id='Other'
                                name='supportSystem'
                                value='Other'
                                checked={supportSystem === 'Other'}
                                onChange={() => setSupportSystem('Other')}
                            />
                            <div className='ml-[6px]'>
                                <TextInput
                                    placeHolder='Other'
                                    value={supportSystemOther}
                                    onChange={setSupportSystemOther}
                                    disabled={supportSystem !== 'Other'}
                                    style={'w-[99px]'}
                                ></TextInput>
                            </div>
                        </div>
                    </div>
                </CardHolder>
                <CardHolder
                    path='stomach'
                    type='NurseAssessmentForm'
                    name='Nutrition/ Metabolism'
                >
                    <div className='ml-[19px] flex w-[986px] flex-col gap-[12px]'>
                        <div className='flex flex-row'>
                            <RadioButton
                                value={diet}
                                onChange={setDiet}
                                name='Diet'
                                placeHolder='Ordinary Diet'
                                style='ml-[6px] mr-[29px]'
                            ></RadioButton>
                            <RadioButton
                                value={diet}
                                onChange={setDiet}
                                name='Diet'
                                placeHolder='Soft Diet'
                                style='ml-[6px] mr-[29px]'
                            ></RadioButton>
                            <RadioButton
                                value={diet}
                                onChange={setDiet}
                                name='Diet'
                                placeHolder='NPO'
                                style='ml-[6px] mr-[29px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[23px]'>Appetite:</p>
                            <RadioButton
                                value={appetite}
                                onChange={setAppetite}
                                name='Appetite'
                                placeHolder='Good'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={appetite}
                                onChange={setAppetite}
                                name='Appetite'
                                placeHolder='Fair'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={appetite}
                                onChange={setAppetite}
                                name='Appetite'
                                placeHolder='Poor'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[23px]'>Special Diet:</p>
                            <RadioButton
                                value={specialDiet}
                                onChange={setSpecialDiet}
                                name='Special Diet'
                                placeHolder='DM'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={specialDiet}
                                onChange={setSpecialDiet}
                                name='Special Diet'
                                placeHolder='Low Na'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={specialDiet}
                                onChange={setSpecialDiet}
                                name='Special Diet'
                                placeHolder='Low Prot.'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={specialDiet}
                                onChange={setSpecialDiet}
                                name='Special Diet'
                                placeHolder='High Prot.'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={specialDiet}
                                onChange={setSpecialDiet}
                                name='Special Diet'
                                placeHolder='Other'
                                style='ml-[6px] mr-[20px]'
                            >
                                <TextInput
                                    placeHolder='Other'
                                    value={specialDietOther}
                                    onChange={setSpecialDietOther}
                                    disabled={specialDiet !== 'Other'}
                                    style={'w-[99px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Feeding:</p>
                            <RadioButton
                                value={feeding}
                                onChange={setFeeding}
                                name='Feeding'
                                placeHolder='Self'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={feeding}
                                onChange={setFeeding}
                                name='Feeding'
                                placeHolder='Assisted'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={feeding}
                                onChange={setFeeding}
                                name='Feeding'
                                placeHolder='NG/ OG'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={feeding}
                                onChange={setFeeding}
                                name='Feeding'
                                placeHolder='Gastronomy/ Jejunostomy tube'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={feeding}
                                onChange={setFeeding}
                                name='Feeding'
                                placeHolder='Parenteral Nutrition'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Swallowing Difficulty:</p>
                            <RadioButton
                                value={swallowing}
                                onChange={setSwallowing}
                                name='Swallowing Difficulty'
                                placeHolder='None'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={swallowing}
                                onChange={setSwallowing}
                                name='Swallowing Difficulty'
                                placeHolder='Solid'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={swallowing}
                                onChange={setSwallowing}
                                name='Swallowing Difficulty'
                                placeHolder='Liquid'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>GI. Problem:</p>
                            <RadioButton
                                value={gI}
                                onChange={setGI}
                                name='GI. Problem'
                                placeHolder='None'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={gI}
                                onChange={setGI}
                                name='GI. Problem'
                                placeHolder='Nausea'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={gI}
                                onChange={setGI}
                                name='GI. Problem'
                                placeHolder='Vomiting'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={gI}
                                onChange={setGI}
                                name='GI. Problem'
                                placeHolder='Other'
                                style='ml-[6px] mr-[20px]'
                            >
                                <TextInput
                                    placeHolder='Other'
                                    value={gIOther}
                                    onChange={setGIOther}
                                    disabled={gI !== 'Other'}
                                    style={'w-[99px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Weight Change:</p>
                            <RadioButton
                                value={weight}
                                onChange={setWeight}
                                name='Weight'
                                placeHolder='Unknown'
                                style='ml-[7px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={weight}
                                onChange={setWeight}
                                name='Weight'
                                placeHolder='No'
                                style='ml-[7px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={weight}
                                onChange={setWeight}
                                name='Weight'
                                placeHolder='Yes'
                                style='ml-[7px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='ml-[14px] mr-[20px]'>If yes:</p>
                            <div className='flex flex-col gap-[12px]'>
                                <div className='flex flex-row'>
                                    <RadioButton
                                        value={weightChange}
                                        onChange={setWeightChange}
                                        name='Weight Change'
                                        placeHolder='Loss'
                                        style='ml-[6px]'
                                    >
                                        <TextInput
                                            placeHolder='Loss'
                                            value={weightLoss}
                                            onChange={setWeightLoss}
                                            disabled={weightChange !== 'Loss'}
                                            style={'w-[75px]'}
                                        ></TextInput>
                                        <TextInput
                                            placeHolder='kg/'
                                            value={weightLossDuration}
                                            onChange={setWeightLossDuration}
                                            disabled={weightChange !== 'Loss'}
                                            style={'w-[92px]'}
                                        ></TextInput>
                                        wk/ mth/ yr
                                    </RadioButton>
                                </div>
                                <div className='flex flex-row'>
                                    <RadioButton
                                        value={weightChange}
                                        onChange={setWeightChange}
                                        name='Weight Change'
                                        placeHolder='Gain'
                                        style='ml-[6px] mr-[20px]'
                                    >
                                        <TextInput
                                            placeHolder='Gain'
                                            value={weightGain}
                                            onChange={setWeightGain}
                                            disabled={weightChange !== 'Gain'}
                                            style={'w-[75px]'}
                                        ></TextInput>
                                        <TextInput
                                            placeHolder='kg/'
                                            value={weightGainDuration}
                                            onChange={setWeightGainDuration}
                                            disabled={weightChange !== 'Gain'}
                                            style={'w-[92px]'}
                                        ></TextInput>
                                        wk/ mth/ yr
                                    </RadioButton>
                                </div>
                            </div>
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
