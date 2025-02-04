import { useState } from 'react';
import CardHolder from '../../CardHolder';
import SaveButton from '../../SaveButton';
import TextInput from '../../TextInput';

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {};
        console.log(formData);
    };
    return (
        <div className='justify-items-center'>
            <div className='w-full justify-items-start'>
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
                            <input
                                type='radio'
                                id='None'
                                name='supportSystem'
                                value='None'
                                checked={supportSystem === 'None'}
                                onChange={() => setSupportSystem('None')}
                            />
                            <p className='ml-[6px] mr-[20px]'>None</p>
                            <input
                                type='radio'
                                id='Parents'
                                name='supportSystem'
                                value='Parents'
                                checked={supportSystem === 'Parents'}
                                onChange={() => setSupportSystem('Parents')}
                            />
                            <p className='ml-[6px] mr-[20px]'>Parents</p>
                            <input
                                type='radio'
                                id='Spouse & Family'
                                name='supportSystem'
                                value='Spouse & Family'
                                checked={supportSystem === 'Spouse & Family'}
                                onChange={() =>
                                    setSupportSystem('Spouse & Family')
                                }
                            />
                            <p className='ml-[6px] mr-[20px]'>
                                Spouse & Family
                            </p>
                            <input
                                type='radio'
                                id='Friend(s)'
                                name='supportSystem'
                                value='Friend(s)'
                                checked={supportSystem === 'Friend(s)'}
                                onChange={() => setSupportSystem('Friend(s)')}
                            />
                            <p className='ml-[6px] mr-[20px]'>Friend(s)</p>
                            <input
                                type='radio'
                                id='Religious Activity'
                                name='supportSystem'
                                value='Religious Activity'
                                checked={supportSystem === 'Religious Activity'}
                                onChange={() =>
                                    setSupportSystem('Religious Activity')
                                }
                            />
                            <p className='ml-[6px] mr-[20px]'>
                                Religious Activity
                            </p>
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
            </div>
            <div className='mt-[23px]'>
                <SaveButton onClick={handleSubmit}></SaveButton>
            </div>
        </div>
    );
}
