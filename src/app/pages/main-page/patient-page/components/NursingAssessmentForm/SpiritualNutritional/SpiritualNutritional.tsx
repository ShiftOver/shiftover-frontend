import { useEffect, useState } from 'react';
import CardHolder from '../../CardHolder';
import SaveButton from '../../SaveButton';
import TextInput from '../../TextInput';
import RadioButton from '../../Radiobutton';
import { useRecoilState } from 'recoil';
import { selectedNutrition, selectedSpiritual } from '@/recoil/atoms';
import DoubleInput from '../../DoubleInput';

export type SpiritualNutritionalProps = {
    id: any;
    handleSubmit: any;
};

export default function SpiritualNutritional({
    id,
    handleSubmit,
}: SpiritualNutritionalProps) {
    const [spiritual, setSpiritual] = useRecoilState<any>(selectedSpiritual);
    const isAnxietyOther = spiritual?.anxiety?.startsWith('Other:');
    const anxietyOther = isAnxietyOther ? spiritual.anxiety.split(':')[1] : '';
    const handleAnxietyOtherChange = (value: string) => {
        updateSpiritual('anxiety', `Other:${value}`);
    };
    const isSupportSystemOther = spiritual?.supportSystem?.startsWith('Other:');
    const supportSystemOther = isSupportSystemOther
        ? spiritual.supportSystem.split(':')[1]
        : '';
    const handleSupportSystemOtherChange = (value: string) => {
        updateSpiritual('supportSystem', `Other:${value}`);
    };
    const useSyncSpiritual = () => {
        const update = (field: string, value: any) => {
            setSpiritual((prev: any) => ({
                ...prev,
                [field]: value,
            }));
        };

        return update;
    };
    const updateSpiritual = useSyncSpiritual();
    const [specialReligion, setSpecialReligion] = useState(
        spiritual?.specialConsideration
            ? 'Yes'
            : spiritual?.hasOwnProperty('specialConsideration')
              ? 'No'
              : ''
    );

    const [nutrition, setNutrition] = useRecoilState<any>(selectedNutrition);
    const useSyncNutrition = () => {
        const update = (field: string, value: any) => {
            setNutrition((prev: any) => ({
                ...prev,
                [field]: value,
            }));
        };

        return update;
    };
    const updateNutrition = useSyncNutrition();
    const updateWeightChange = (field: string, value: any) => {
        if (field === 'change' && value === '') {
            updateNutrition('weightChange', {
                ...nutrition?.weightChange,
                change: {},
            });
        } else {
            updateNutrition('weightChange', {
                ...nutrition?.weightChange,
                [field]: value,
            });
        }
    };
    const isSpecialDietOther = nutrition?.specialDiet?.startsWith('Other:');
    const specialDietOther = isSpecialDietOther
        ? nutrition.specialDiet.split(':')[1]
        : '';
    const handleSpecialDietOtherChange = (value: string) => {
        updateNutrition('specialDiet', `Other:${value}`);
    };

    const isGlProblemOther = nutrition?.glProblem?.startsWith('Other:');
    const glProblemOther = isGlProblemOther
        ? nutrition.glProblem.split(':')[1]
        : '';
    const handleisGlProblemOtherOtherChange = (value: string) => {
        updateNutrition('glProblem', `Other:${value}`);
    };
    useEffect(() => {
        if (nutrition?.weightChange?.status !== 'Yes') {
            updateWeightChange('change', {});
        }
    }, [nutrition?.weightChange?.status]);
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
                            value={spiritual?.religion}
                            onChange={(val: string) =>
                                updateSpiritual('religion', val)
                            }
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
                                value={spiritual?.specialConsideration}
                                onChange={(val: string) =>
                                    updateSpiritual('specialConsideration', val)
                                }
                                disabled={specialReligion !== 'Yes'}
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
                                checked={spiritual?.anxiety === 'None'}
                                onChange={() =>
                                    updateSpiritual('anxiety', 'None')
                                }
                            />
                            <p className='ml-[6px] mr-[24px]'>None</p>
                            <input
                                type='radio'
                                id='Illness'
                                name='Anxiety'
                                value='Illness'
                                checked={spiritual?.anxiety === 'Illness'}
                                onChange={() =>
                                    updateSpiritual('anxiety', 'Illness')
                                }
                            />
                            <p className='ml-[6px] mr-[24px]'>Illness</p>
                            <input
                                type='radio'
                                id='Finance'
                                name='Anxiety'
                                value='Finance'
                                checked={spiritual?.anxiety === 'Finance'}
                                onChange={() =>
                                    updateSpiritual('anxiety', 'Finance')
                                }
                            />
                            <p className='ml-[6px] mr-[24px]'>Finance</p>
                            <input
                                type='radio'
                                id='Family'
                                name='Anxiety'
                                value='Family'
                                checked={spiritual?.anxiety === 'Family'}
                                onChange={() =>
                                    updateSpiritual('anxiety', 'Family')
                                }
                            />
                            <p className='ml-[6px] mr-[24px]'>Family</p>
                            <input
                                type='radio'
                                id='Other'
                                name='Anxiety'
                                value='Other'
                                checked={isAnxietyOther}
                                onChange={() =>
                                    updateSpiritual('anxiety', 'Other:')
                                }
                            />
                            <div className='ml-[6px]'>
                                <TextInput
                                    placeHolder='Other'
                                    value={anxietyOther}
                                    onChange={handleAnxietyOtherChange}
                                    disabled={!isAnxietyOther}
                                    style={'w-[99px]'}
                                ></TextInput>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[30px]'>Support System:</p>
                            <RadioButton
                                value={spiritual?.supportSystem}
                                onChange={() =>
                                    updateSpiritual('supportSystem', 'None')
                                }
                                name='supportSystem'
                                placeHolder='None'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={spiritual?.supportSystem}
                                onChange={() =>
                                    updateSpiritual('supportSystem', 'Parents')
                                }
                                name='supportSystem'
                                placeHolder='Parents'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={spiritual?.supportSystem}
                                onChange={() =>
                                    updateSpiritual(
                                        'supportSystem',
                                        'Spouse & Family'
                                    )
                                }
                                name='supportSystem'
                                placeHolder='Spouse & Family'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={spiritual?.supportSystem}
                                onChange={() =>
                                    updateSpiritual(
                                        'supportSystem',
                                        'Friend(s)'
                                    )
                                }
                                name='supportSystem'
                                placeHolder='Friend(s)'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={spiritual?.supportSystem}
                                onChange={() =>
                                    updateSpiritual(
                                        'supportSystem',
                                        'Religious Activity'
                                    )
                                }
                                name='supportSystem'
                                placeHolder='Religious Activity'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <input
                                type='radio'
                                id='Other'
                                name='supportSystem'
                                value='Other'
                                checked={isSupportSystemOther}
                                onChange={() =>
                                    updateSpiritual('supportSystem', 'Other:')
                                }
                            />
                            <div className='ml-[6px]'>
                                <TextInput
                                    placeHolder='Other'
                                    value={supportSystemOther}
                                    onChange={handleSupportSystemOtherChange}
                                    disabled={!isSupportSystemOther}
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
                                value={nutrition?.dietType}
                                onChange={() =>
                                    updateNutrition('dietType', 'Ordinary Diet')
                                }
                                name='Diet'
                                placeHolder='Ordinary Diet'
                                style='ml-[6px] mr-[29px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.dietType}
                                onChange={() =>
                                    updateNutrition('dietType', 'Soft Diet')
                                }
                                name='Diet'
                                placeHolder='Soft Diet'
                                style='ml-[6px] mr-[29px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.dietType}
                                onChange={() =>
                                    updateNutrition('dietType', 'NPO')
                                }
                                name='Diet'
                                placeHolder='NPO'
                                style='ml-[6px] mr-[29px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[23px]'>Appetite:</p>
                            <RadioButton
                                value={nutrition?.appetite}
                                onChange={() =>
                                    updateNutrition('appetite', 'Good')
                                }
                                name='Appetite'
                                placeHolder='Good'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.appetite}
                                onChange={() =>
                                    updateNutrition('appetite', 'Fair')
                                }
                                name='Appetite'
                                placeHolder='Fair'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.appetite}
                                onChange={() =>
                                    updateNutrition('appetite', 'Poor')
                                }
                                name='Appetite'
                                placeHolder='Poor'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[23px]'>Special Diet:</p>
                            <RadioButton
                                value={nutrition?.specialDiet}
                                onChange={() =>
                                    updateNutrition('specialDiet', 'DM')
                                }
                                name='Special Diet'
                                placeHolder='DM'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.specialDiet}
                                onChange={() =>
                                    updateNutrition('specialDiet', 'Low Na')
                                }
                                name='Special Diet'
                                placeHolder='Low Na'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.specialDiet}
                                onChange={() =>
                                    updateNutrition('specialDiet', 'Low Prot.')
                                }
                                name='Special Diet'
                                placeHolder='Low Prot.'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.specialDiet}
                                onChange={() =>
                                    updateNutrition('specialDiet', 'High Prot.')
                                }
                                name='Special Diet'
                                placeHolder='High Prot.'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.specialDiet}
                                checked={isSpecialDietOther}
                                onChange={() =>
                                    updateNutrition('specialDiet', 'Other:')
                                }
                                name='Special Diet'
                                placeHolder='Other'
                                style='ml-[6px] mr-[20px]'
                            >
                                <TextInput
                                    placeHolder='Other'
                                    value={specialDietOther}
                                    onChange={handleSpecialDietOtherChange}
                                    disabled={!isSpecialDietOther}
                                    style={'w-[99px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Feeding:</p>
                            <RadioButton
                                value={nutrition?.feeding}
                                onChange={() =>
                                    updateNutrition('feeding', 'Self')
                                }
                                name='Feeding'
                                placeHolder='Self'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.feeding}
                                onChange={() =>
                                    updateNutrition('feeding', 'Assisted')
                                }
                                name='Feeding'
                                placeHolder='Assisted'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.feeding}
                                onChange={() =>
                                    updateNutrition('feeding', 'NG/ OG')
                                }
                                name='Feeding'
                                placeHolder='NG/ OG'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.feeding}
                                onChange={() =>
                                    updateNutrition(
                                        'feeding',
                                        'Gastronomy/ Jejunostomy tube'
                                    )
                                }
                                name='Feeding'
                                placeHolder='Gastronomy/ Jejunostomy tube'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.feeding}
                                onChange={() =>
                                    updateNutrition(
                                        'feeding',
                                        'Parenteral Nutrition'
                                    )
                                }
                                name='Feeding'
                                placeHolder='Parenteral Nutrition'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Swallowing Difficulty:</p>
                            <RadioButton
                                value={nutrition?.swallowing}
                                onChange={() =>
                                    updateNutrition('swallowing', 'None')
                                }
                                name='Swallowing Difficulty'
                                placeHolder='None'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.swallowing}
                                onChange={() =>
                                    updateNutrition('swallowing', 'Solid')
                                }
                                name='Swallowing Difficulty'
                                placeHolder='Solid'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.swallowing}
                                onChange={() =>
                                    updateNutrition('swallowing', 'Liquid')
                                }
                                name='Swallowing Difficulty'
                                placeHolder='Liquid'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>GI. Problem:</p>
                            <RadioButton
                                value={nutrition?.glProblem}
                                onChange={() =>
                                    updateNutrition('glProblem', 'None')
                                }
                                name='GI. Problem'
                                placeHolder='None'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.glProblem}
                                onChange={() =>
                                    updateNutrition('glProblem', 'Nausea')
                                }
                                name='GI. Problem'
                                placeHolder='Nausea'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.glProblem}
                                onChange={() =>
                                    updateNutrition('glProblem', 'Vomiting')
                                }
                                name='GI. Problem'
                                placeHolder='Vomiting'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.glProblem}
                                checked={isGlProblemOther}
                                onChange={() =>
                                    updateNutrition('glProblem', 'Other:')
                                }
                                name='GI. Problem'
                                placeHolder='Other'
                                style='ml-[6px] mr-[20px]'
                            >
                                <TextInput
                                    placeHolder='Other'
                                    value={glProblemOther}
                                    onChange={handleisGlProblemOtherOtherChange}
                                    disabled={!isGlProblemOther}
                                    style={'w-[99px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Weight Change:</p>
                            <RadioButton
                                value={nutrition?.weightChange?.status}
                                onChange={() =>
                                    updateWeightChange('status', 'Unknown')
                                }
                                name='Weight'
                                placeHolder='Unknown'
                                style='ml-[7px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.weightChange?.status}
                                onChange={() =>
                                    updateWeightChange('status', 'No')
                                }
                                name='Weight'
                                placeHolder='No'
                                style='ml-[7px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={nutrition?.weightChange?.status}
                                onChange={() =>
                                    updateWeightChange('status', 'Yes')
                                }
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
                                        value={
                                            nutrition?.weightChange?.change
                                                ?.type
                                        }
                                        onChange={() =>
                                            updateWeightChange('change', {
                                                ...nutrition?.weightChange
                                                    ?.change,
                                                type: 'Loss',
                                            })
                                        }
                                        name='Weight Change'
                                        placeHolder='Loss'
                                        style='ml-[6px]'
                                        disabled={
                                            nutrition?.weightChange?.status !=
                                            'Yes'
                                        }
                                    >
                                        {nutrition?.weightChange?.change
                                            ?.type === 'Loss' ? (
                                            <>
                                                <TextInput
                                                    placeHolder='Loss'
                                                    value={
                                                        nutrition?.weightChange
                                                            ?.change?.weight
                                                    }
                                                    onChange={(val: string) =>
                                                        updateWeightChange(
                                                            'change',
                                                            {
                                                                ...nutrition
                                                                    ?.weightChange
                                                                    ?.change,
                                                                weight: val,
                                                            }
                                                        )
                                                    }
                                                    disabled={
                                                        nutrition?.weightChange
                                                            ?.change?.type !==
                                                        'Loss'
                                                    }
                                                    style={'w-[75px]'}
                                                ></TextInput>
                                                <DoubleInput
                                                    placeHolder='kg/'
                                                    value={
                                                        nutrition?.weightChange
                                                            ?.change
                                                            ?.periodValue
                                                    }
                                                    onChange={(val: number) =>
                                                        updateWeightChange(
                                                            'change',
                                                            {
                                                                ...nutrition
                                                                    ?.weightChange
                                                                    ?.change,
                                                                periodValue:
                                                                    val,
                                                            }
                                                        )
                                                    }
                                                    disabled={
                                                        nutrition?.weightChange
                                                            ?.change?.type !==
                                                        'Loss'
                                                    }
                                                    style={'w-[92px]'}
                                                ></DoubleInput>
                                                <RadioButton
                                                    value={
                                                        nutrition?.weightChange
                                                            ?.change?.periodType
                                                    }
                                                    onChange={() =>
                                                        updateWeightChange(
                                                            'change',
                                                            {
                                                                ...nutrition
                                                                    ?.weightChange
                                                                    ?.change,
                                                                periodType:
                                                                    'wk/',
                                                            }
                                                        )
                                                    }
                                                    name='periodType'
                                                    placeHolder='wk/'
                                                    style='ml-[2px] mr-[2px]'
                                                ></RadioButton>
                                                <RadioButton
                                                    value={
                                                        nutrition?.weightChange
                                                            ?.change?.periodType
                                                    }
                                                    onChange={() =>
                                                        updateWeightChange(
                                                            'change',
                                                            {
                                                                ...nutrition
                                                                    ?.weightChange
                                                                    ?.change,
                                                                periodType:
                                                                    'mth/',
                                                            }
                                                        )
                                                    }
                                                    name='periodType'
                                                    placeHolder='mth/'
                                                    style='ml-[2px] mr-[2px]'
                                                ></RadioButton>
                                                <RadioButton
                                                    value={
                                                        nutrition?.weightChange
                                                            ?.change?.periodType
                                                    }
                                                    onChange={() =>
                                                        updateWeightChange(
                                                            'change',
                                                            {
                                                                ...nutrition
                                                                    ?.weightChange
                                                                    ?.change,
                                                                periodType:
                                                                    'yr',
                                                            }
                                                        )
                                                    }
                                                    name='periodType'
                                                    placeHolder='yr'
                                                    style='ml-[2px] mr-[2px]'
                                                ></RadioButton>
                                            </>
                                        ) : (
                                            <>
                                                <TextInput
                                                    placeHolder='Loss'
                                                    value={''}
                                                    onChange={() => {}}
                                                    disabled
                                                    style={'w-[75px]'}
                                                ></TextInput>
                                                <DoubleInput
                                                    placeHolder='kg/'
                                                    value={null}
                                                    onChange={() => {}}
                                                    disabled
                                                    style={'w-[92px]'}
                                                ></DoubleInput>
                                                <RadioButton
                                                    value={''}
                                                    onChange={() => {}}
                                                    disabled
                                                    name='periodType'
                                                    placeHolder='wk/'
                                                    style='ml-[2px] mr-[2px]'
                                                ></RadioButton>
                                                <RadioButton
                                                    value={''}
                                                    onChange={() => {}}
                                                    disabled
                                                    name='periodType'
                                                    placeHolder='mth/'
                                                    style='ml-[2px] mr-[2px]'
                                                ></RadioButton>
                                                <RadioButton
                                                    value={''}
                                                    onChange={() => {}}
                                                    name='periodType'
                                                    disabled
                                                    placeHolder='yr'
                                                    style='ml-[2px] mr-[2px]'
                                                ></RadioButton>
                                            </>
                                        )}
                                    </RadioButton>
                                </div>
                                <div className='flex flex-row'>
                                    <RadioButton
                                        value={
                                            nutrition?.weightChange?.change
                                                ?.type
                                        }
                                        onChange={() =>
                                            updateWeightChange('change', {
                                                ...nutrition?.weightChange
                                                    ?.change,
                                                type: 'Gain',
                                            })
                                        }
                                        name='Weight Change'
                                        placeHolder='Gain'
                                        style='ml-[6px] mr-[20px]'
                                        disabled={
                                            nutrition?.weightChange?.status !=
                                            'Yes'
                                        }
                                    >
                                        {nutrition?.weightChange?.change
                                            ?.type === 'Gain' ? (
                                            <>
                                                <TextInput
                                                    placeHolder='Gain'
                                                    value={
                                                        nutrition?.weightChange
                                                            ?.change?.weight
                                                    }
                                                    onChange={(val: string) =>
                                                        updateWeightChange(
                                                            'change',
                                                            {
                                                                ...nutrition
                                                                    ?.weightChange
                                                                    ?.change,
                                                                weight: val,
                                                            }
                                                        )
                                                    }
                                                    disabled={
                                                        nutrition?.weightChange
                                                            ?.change?.type !==
                                                        'Gain'
                                                    }
                                                    style={'w-[75px]'}
                                                ></TextInput>
                                                <DoubleInput
                                                    placeHolder='kg/'
                                                    value={
                                                        nutrition?.weightChange
                                                            ?.change
                                                            ?.periodValue
                                                    }
                                                    onChange={(val: number) =>
                                                        updateWeightChange(
                                                            'change',
                                                            {
                                                                ...nutrition
                                                                    ?.weightChange
                                                                    ?.change,
                                                                periodValue:
                                                                    val,
                                                            }
                                                        )
                                                    }
                                                    style={'w-[92px]'}
                                                ></DoubleInput>
                                                <RadioButton
                                                    value={
                                                        nutrition?.weightChange
                                                            ?.change?.periodType
                                                    }
                                                    onChange={() =>
                                                        updateWeightChange(
                                                            'change',
                                                            {
                                                                ...nutrition
                                                                    ?.weightChange
                                                                    ?.change,
                                                                periodType:
                                                                    'wk/',
                                                            }
                                                        )
                                                    }
                                                    name='periodType'
                                                    placeHolder='wk/'
                                                    style='ml-[2px] mr-[2px]'
                                                ></RadioButton>
                                                <RadioButton
                                                    value={
                                                        nutrition?.weightChange
                                                            ?.change?.periodType
                                                    }
                                                    onChange={() =>
                                                        updateWeightChange(
                                                            'change',
                                                            {
                                                                ...nutrition
                                                                    ?.weightChange
                                                                    ?.change,
                                                                periodType:
                                                                    'mth/',
                                                            }
                                                        )
                                                    }
                                                    name='periodType'
                                                    placeHolder='mth/'
                                                    style='ml-[2px] mr-[2px]'
                                                ></RadioButton>
                                                <RadioButton
                                                    value={
                                                        nutrition?.weightChange
                                                            ?.change?.periodType
                                                    }
                                                    onChange={() =>
                                                        updateWeightChange(
                                                            'change',
                                                            {
                                                                ...nutrition
                                                                    ?.weightChange
                                                                    ?.change,
                                                                periodType:
                                                                    'yr',
                                                            }
                                                        )
                                                    }
                                                    name='periodType'
                                                    placeHolder='yr'
                                                    style='ml-[2px] mr-[2px]'
                                                ></RadioButton>
                                            </>
                                        ) : (
                                            <>
                                                <TextInput
                                                    placeHolder='Gain'
                                                    value={''}
                                                    onChange={() => {}}
                                                    disabled
                                                    style={'w-[75px]'}
                                                ></TextInput>
                                                <DoubleInput
                                                    placeHolder='kg/'
                                                    value={null}
                                                    onChange={() => {}}
                                                    disabled
                                                    style={'w-[92px]'}
                                                ></DoubleInput>
                                                <RadioButton
                                                    value={''}
                                                    onChange={() => {}}
                                                    disabled
                                                    name='periodType'
                                                    placeHolder='wk/'
                                                    style='ml-[2px] mr-[2px]'
                                                ></RadioButton>
                                                <RadioButton
                                                    value={''}
                                                    onChange={() => {}}
                                                    disabled
                                                    name='periodType'
                                                    placeHolder='mth/'
                                                    style='ml-[2px] mr-[2px]'
                                                ></RadioButton>
                                                <RadioButton
                                                    value={''}
                                                    onChange={() => {}}
                                                    name='periodType'
                                                    disabled
                                                    placeHolder='yr'
                                                    style='ml-[2px] mr-[2px]'
                                                ></RadioButton>
                                            </>
                                        )}
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
