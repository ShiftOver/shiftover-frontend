import CardHolder from '../../CardHolder';
import SaveButton from '../../SaveButton';
import RadioButton from '../../Radiobutton';
import TextInput from '../../TextInput';
import { useRecoilState } from 'recoil';
import {
    selectedCardioCurrentTreatment,
    selectedCardiovascular,
    selectedPulmonary,
} from '@/recoil/atoms';

export type CardiopulmonaryProps = {
    id: any;
    handleSubmit: any;
};

export default function Cardiopulmonary({
    id,
    handleSubmit,
}: CardiopulmonaryProps) {
    const [pulmonary, setPulmonary] = useRecoilState<any>(selectedPulmonary);
    const useSyncPulmonary = () => {
        const update = (field: string, value: any) => {
            setPulmonary((prev: any) => ({
                ...prev,
                [field]: value,
            }));
        };

        return update;
    };
    const updatePulmonary = useSyncPulmonary();
    const isEffortOther = pulmonary?.effort?.startsWith('Other:');
    const effortOther = isEffortOther ? pulmonary.effort.split(':')[1] : '';
    const handleEffortOtherChange = (value: string) => {
        updatePulmonary('effort', `Other:${value}`);
    };

    const isCoughOther = pulmonary?.cough?.startsWith('Other:');
    const coughOther = isCoughOther ? pulmonary.cough.split(':')[1] : '';
    const handleCoughOtherChange = (value: string) => {
        updatePulmonary('cough', `Other:${value}`);
    };

    const isSputumOther = pulmonary?.sputum?.startsWith('Other:');
    const sputumOther = isSputumOther ? pulmonary.sputum.split(':')[1] : '';
    const handleSputumOtherChange = (value: string) => {
        updatePulmonary('sputum', `Other:${value}`);
    };

    const isSputumColor = pulmonary?.sputum?.startsWith('Color:');
    const sputumColor = isSputumColor ? pulmonary.sputum.split(':')[1] : '';
    const handleSputumColorChange = (value: string) => {
        updatePulmonary('sputum', `Color:${value}`);
    };

    const [cardioCurrentTreatment, setCardioCurrentTreatment] =
        useRecoilState<any>(selectedCardioCurrentTreatment);
    const isCardioCurrentTreatmentOther =
        cardioCurrentTreatment?.startsWith('Other:');
    const cardioCurrentTreatmentOther = isCardioCurrentTreatmentOther
        ? cardioCurrentTreatment.split(':')[1]
        : '';
    const handleCardioCurrentTreatmentOtherChange = (value: string) => {
        setCardioCurrentTreatment(`Other:${value}`);
    };

    const [cardiovascular, setCardiovascular] = useRecoilState<any>(
        selectedCardiovascular
    );
    const useSyncCardiovascular = () => {
        const update = (field: string, value: any) => {
            setCardiovascular((prev: any) => ({
                ...prev,
                [field]: value,
            }));
        };

        return update;
    };
    const updateCardiovascular = useSyncCardiovascular();

    const isPulseAmplitudeWeak =
        cardiovascular?.pulseAmplitude?.startsWith('Weak:');
    const pulseAmplitudeWeak = isPulseAmplitudeWeak
        ? cardiovascular.pulseAmplitude.split(':')[1]
        : '';
    const handlePulseAmplitudeWeakChange = (value: string) => {
        updateCardiovascular('pulseAmplitude', `Weak:${value}`);
    };

    const isPulseAmplitudeAbsent =
        cardiovascular?.pulseAmplitude?.startsWith('Absent:');
    const pulseAmplitudeAbsent = isPulseAmplitudeAbsent
        ? cardiovascular.pulseAmplitude.split(':')[1]
        : '';
    const handlePulseAmplitudeAbsentChange = (value: string) => {
        updateCardiovascular('pulseAmplitude', `Absent:${value}`);
    };

    const isEdemaLocalized = cardiovascular?.edema?.startsWith('Localized:');
    const edemaLocalized = isEdemaLocalized
        ? cardiovascular.edema.split(':')[1]
        : '';
    const handleEdemaLocalizedChange = (value: string) => {
        updateCardiovascular('edema', `Localized:${value}`);
    };

    const isEdemaPitting = cardiovascular?.edema?.startsWith('Pitting:');
    const edemaPitting = isEdemaPitting
        ? cardiovascular.edema.split(':')[1]
        : '';
    const handleEdemaPittingChange = (value: string) => {
        updateCardiovascular('edema', `Pitting:${value}`);
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
                                    value={pulmonary?.rate}
                                    onChange={() =>
                                        updatePulmonary('rate', 'Eupnea')
                                    }
                                    name='rate'
                                    placeHolder='Eupnea'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={pulmonary?.rate}
                                    onChange={() =>
                                        updatePulmonary('rate', 'Tachypnea')
                                    }
                                    name='rate'
                                    placeHolder='Tachypnea'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={pulmonary?.rate}
                                    onChange={() =>
                                        updatePulmonary('rate', 'Bradypnea')
                                    }
                                    name='rate'
                                    placeHolder='Bradypnea'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={pulmonary?.rate}
                                    onChange={() =>
                                        updatePulmonary('rate', 'Apnea')
                                    }
                                    name='rate'
                                    placeHolder='Apnea'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                            </div>
                            <div className='flex flex-row'>
                                <p className='mr-[20px]'>Rhythm/ Depth:</p>
                                <RadioButton
                                    value={pulmonary?.rhythm}
                                    onChange={() =>
                                        updatePulmonary('rhythm', 'Regular')
                                    }
                                    name='Rhythm/ Depth'
                                    placeHolder='Regular'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={pulmonary?.rhythm}
                                    onChange={() =>
                                        updatePulmonary('rhythm', 'Irregular')
                                    }
                                    name='Rhythm/ Depth'
                                    placeHolder='Irregular'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={pulmonary?.rhythm}
                                    onChange={() =>
                                        updatePulmonary('rhythm', 'Deep')
                                    }
                                    name='Rhythm/ Depth'
                                    placeHolder='Deep'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={pulmonary?.rhythm}
                                    onChange={() =>
                                        updatePulmonary('rhythm', 'Shallow')
                                    }
                                    name='Rhythm/ Depth'
                                    placeHolder='Shallow'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                            </div>
                            <div className='flex flex-row'>
                                <p className='mr-[20px]'>Effort:</p>
                                <RadioButton
                                    value={pulmonary?.effort}
                                    onChange={() =>
                                        updatePulmonary('effort', 'Easy')
                                    }
                                    name='Effort'
                                    placeHolder='Easy'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={pulmonary?.effort}
                                    onChange={() =>
                                        updatePulmonary('effort', 'Dyspnea')
                                    }
                                    name='Effort'
                                    placeHolder='Dyspnea'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={pulmonary?.effort}
                                    onChange={() =>
                                        updatePulmonary('effort', 'Orthropnea')
                                    }
                                    name='Effort'
                                    placeHolder='Orthropnea'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={pulmonary?.effort}
                                    onChange={() =>
                                        updatePulmonary('effort', 'Other:')
                                    }
                                    checked={isEffortOther}
                                    name='Effort'
                                    placeHolder='Other'
                                    style='ml-[6px] mr-[20px]'
                                >
                                    <TextInput
                                        placeHolder='Other'
                                        value={effortOther}
                                        onChange={handleEffortOtherChange}
                                        disabled={!isEffortOther}
                                        style={'w-[83px]'}
                                    ></TextInput>
                                </RadioButton>
                            </div>
                            <div className='flex flex-row'>
                                <p className='mr-[20px]'>Cough:</p>
                                <RadioButton
                                    value={pulmonary?.cough}
                                    onChange={() =>
                                        updatePulmonary('cough', 'None')
                                    }
                                    name='Cough'
                                    placeHolder='None'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={pulmonary?.cough}
                                    onChange={() =>
                                        updatePulmonary('cough', 'Dry')
                                    }
                                    name='Cough'
                                    placeHolder='Dry'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={pulmonary?.cough}
                                    onChange={() =>
                                        updatePulmonary('cough', 'Productive')
                                    }
                                    name='Cough'
                                    placeHolder='Productive'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={pulmonary?.cough}
                                    onChange={() =>
                                        updatePulmonary('cough', 'Other:')
                                    }
                                    checked={isCoughOther}
                                    name='Cough'
                                    placeHolder='Other'
                                    style='ml-[6px] mr-[20px]'
                                >
                                    <TextInput
                                        placeHolder='Other'
                                        value={coughOther}
                                        onChange={handleCoughOtherChange}
                                        disabled={!isCoughOther}
                                        style={'w-[83px]'}
                                    ></TextInput>
                                </RadioButton>
                            </div>
                            <div className='flex flex-row'>
                                <p className='mr-[20px]'>Sputum:</p>
                                <RadioButton
                                    value={pulmonary?.sputum}
                                    onChange={() =>
                                        updatePulmonary('sputum', 'None')
                                    }
                                    name='Sputum'
                                    placeHolder='None'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={pulmonary?.sputum}
                                    onChange={() =>
                                        updatePulmonary('sputum', 'Hemoptysis')
                                    }
                                    name='Sputum'
                                    placeHolder='Hemoptysis'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={pulmonary?.sputum}
                                    onChange={() =>
                                        updatePulmonary('sputum', 'Frothy')
                                    }
                                    name='Sputum'
                                    placeHolder='Frothy'
                                    style='ml-[6px] mr-[20px]'
                                ></RadioButton>
                                <RadioButton
                                    value={pulmonary?.sputum}
                                    onChange={() =>
                                        updatePulmonary('sputum', 'Color:')
                                    }
                                    checked={isSputumColor}
                                    name='Sputum'
                                    placeHolder='Color'
                                    style='ml-[6px] mr-[11px]'
                                >
                                    <TextInput
                                        placeHolder='Color'
                                        value={sputumColor}
                                        onChange={handleSputumColorChange}
                                        disabled={!isSputumColor}
                                        style={'w-[83px]'}
                                    ></TextInput>
                                </RadioButton>
                                <RadioButton
                                    value={pulmonary?.sputum}
                                    onChange={() =>
                                        updatePulmonary('sputum', 'Other:')
                                    }
                                    checked={isSputumOther}
                                    name='Sputum'
                                    placeHolder='Other'
                                    style='ml-[6px] mr-[20px]'
                                >
                                    <TextInput
                                        placeHolder='Other'
                                        value={sputumOther}
                                        onChange={handleSputumOtherChange}
                                        disabled={!isSputumOther}
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
                                    value={cardioCurrentTreatment}
                                    onChange={() =>
                                        setCardioCurrentTreatment('None')
                                    }
                                    name='Current treatment'
                                    placeHolder='None'
                                    style='ml-[6px] mr-[37px]'
                                ></RadioButton>
                                <RadioButton
                                    value={cardioCurrentTreatment}
                                    onChange={() =>
                                        setCardioCurrentTreatment('O2')
                                    }
                                    name='Current treatment'
                                    placeHolder='O2'
                                    style='ml-[6px]'
                                ></RadioButton>
                            </div>
                            <RadioButton
                                value={cardioCurrentTreatment}
                                onChange={() =>
                                    setCardioCurrentTreatment('ETT')
                                }
                                name='Current treatment'
                                placeHolder='ETT'
                                style='ml-[6px]'
                            ></RadioButton>
                            <RadioButton
                                value={cardioCurrentTreatment}
                                onChange={() =>
                                    setCardioCurrentTreatment('Tracheostomy')
                                }
                                name='Current treatment'
                                placeHolder='Tracheostomy'
                                style='ml-[6px]'
                            ></RadioButton>
                            <RadioButton
                                value={cardioCurrentTreatment}
                                onChange={() =>
                                    setCardioCurrentTreatment('Ventilator')
                                }
                                name='Current treatment'
                                placeHolder='Ventilator'
                                style='ml-[6px]'
                            ></RadioButton>
                            <RadioButton
                                value={cardioCurrentTreatment}
                                onChange={() =>
                                    setCardioCurrentTreatment('Chest tube')
                                }
                                name='Current treatment'
                                placeHolder='Chest tube'
                                style='ml-[6px]'
                            ></RadioButton>
                            <RadioButton
                                value={cardioCurrentTreatment}
                                onChange={() =>
                                    setCardioCurrentTreatment('Other:')
                                }
                                checked={isCardioCurrentTreatmentOther}
                                name='Current treatment'
                                placeHolder='Other'
                                style='ml-[6px]'
                            >
                                <TextInput
                                    placeHolder='Other'
                                    value={cardioCurrentTreatmentOther}
                                    onChange={
                                        handleCardioCurrentTreatmentOtherChange
                                    }
                                    disabled={!isCardioCurrentTreatmentOther}
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
                                value={cardiovascular?.pulseRhythm}
                                onChange={() =>
                                    updateCardiovascular(
                                        'pulseRhythm',
                                        'Regular'
                                    )
                                }
                                name='Pulse Rhythm'
                                placeHolder='Regular'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={cardiovascular?.pulseRhythm}
                                onChange={() =>
                                    updateCardiovascular(
                                        'pulseRhythm',
                                        'Irregular'
                                    )
                                }
                                name='Pulse Rhythm'
                                placeHolder='Irregular'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Pulse Amplitude:</p>
                            <RadioButton
                                value={cardiovascular?.pulseAmplitude}
                                onChange={() =>
                                    updateCardiovascular(
                                        'pulseAmplitude',
                                        'Strong'
                                    )
                                }
                                name='Pulse Amplitude'
                                placeHolder='Strong'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={cardiovascular?.pulseAmplitude}
                                onChange={() =>
                                    updateCardiovascular(
                                        'pulseAmplitude',
                                        'Weak:'
                                    )
                                }
                                checked={isPulseAmplitudeWeak}
                                name='Pulse Amplitude'
                                placeHolder='Weak'
                                style='ml-[6px] mr-[11px]'
                            >
                                <TextInput
                                    placeHolder='Weak'
                                    value={pulseAmplitudeWeak}
                                    onChange={handlePulseAmplitudeWeakChange}
                                    disabled={!isPulseAmplitudeWeak}
                                    style={'w-[79px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={cardiovascular?.pulseAmplitude}
                                onChange={() =>
                                    updateCardiovascular(
                                        'pulseAmplitude',
                                        'Absent:'
                                    )
                                }
                                checked={isPulseAmplitudeAbsent}
                                name='Pulse Amplitude'
                                placeHolder='Absent'
                                style='ml-[6px]'
                            >
                                <TextInput
                                    placeHolder='Absent'
                                    value={pulseAmplitudeAbsent}
                                    onChange={handlePulseAmplitudeAbsentChange}
                                    disabled={!isPulseAmplitudeAbsent}
                                    style={'w-[79px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Pulse Rate:</p>
                            <RadioButton
                                value={cardiovascular?.pulseRate}
                                onChange={() =>
                                    updateCardiovascular('pulseRate', 'Normal')
                                }
                                name='Pulse Rate'
                                placeHolder='Normal'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={cardiovascular?.pulseRate}
                                onChange={() =>
                                    updateCardiovascular(
                                        'pulseRate',
                                        'Tachycardia'
                                    )
                                }
                                name='Pulse Rate'
                                placeHolder='Tachycardia'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={cardiovascular?.pulseRate}
                                onChange={() =>
                                    updateCardiovascular(
                                        'pulseRate',
                                        'Bradycardia'
                                    )
                                }
                                name='Pulse Rate'
                                placeHolder='Bradycardia'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Edema:</p>
                            <RadioButton
                                value={cardiovascular?.edema}
                                onChange={() =>
                                    updateCardiovascular('edema', 'None')
                                }
                                name='Edema'
                                placeHolder='None'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={cardiovascular?.edema}
                                onChange={() =>
                                    updateCardiovascular('edema', 'Generalized')
                                }
                                name='Edema'
                                placeHolder='Generalized'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={cardiovascular?.edema}
                                onChange={() =>
                                    updateCardiovascular('edema', 'Localized:')
                                }
                                checked={isEdemaLocalized}
                                name='Edema'
                                placeHolder='Localized'
                                style='ml-[6px] mr-[11px]'
                            >
                                <TextInput
                                    placeHolder='Localized'
                                    value={edemaLocalized}
                                    onChange={handleEdemaLocalizedChange}
                                    disabled={!isEdemaLocalized}
                                    style={'w-[79px]'}
                                ></TextInput>
                            </RadioButton>
                            <RadioButton
                                value={cardiovascular?.edema}
                                onChange={() =>
                                    updateCardiovascular('edema', 'Pitting:')
                                }
                                checked={isEdemaPitting}
                                name='Edema'
                                placeHolder='Pitting'
                                style='ml-[6px] mr-[20px]'
                            >
                                <TextInput
                                    placeHolder='Pitting'
                                    value={edemaPitting}
                                    onChange={handleEdemaPittingChange}
                                    disabled={!isEdemaPitting}
                                    style={'w-[79px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Neck Vien Engorged:</p>
                            <RadioButton
                                value={cardiovascular?.neckVeinEngorged}
                                onChange={() =>
                                    updateCardiovascular(
                                        'neckVeinEngorged',
                                        'No'
                                    )
                                }
                                name='Neck Vien Engorged'
                                placeHolder='No'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={cardiovascular?.neckVeinEngorged}
                                onChange={() =>
                                    updateCardiovascular(
                                        'neckVeinEngorged',
                                        'Yes'
                                    )
                                }
                                name='Neck Vien Engorged'
                                placeHolder='Yes'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                        </div>
                        <p>Chest Pain:</p>
                        <RadioButton
                            value={cardiovascular?.chestPain?.yes}
                            onChange={() =>
                                updateCardiovascular('chestPain', {
                                    ...cardiovascular?.chestPain,
                                    yes: false,
                                })
                            }
                            checked={!cardiovascular?.chestPain?.yes}
                            name='Chest Pain'
                            placeHolder='No'
                            style='ml-[6px] mr-[20px]'
                        ></RadioButton>
                        <RadioButton
                            value={cardiovascular?.chestPain?.yes}
                            onChange={() =>
                                updateCardiovascular('chestPain', {
                                    ...cardiovascular?.chestPain,
                                    yes: true,
                                })
                            }
                            checked={cardiovascular?.chestPain?.yes}
                            name='Chest Pain'
                            placeHolder='Yes'
                            style='ml-[6px] mr-[20px]'
                        ></RadioButton>
                        <TextInput
                            placeHolder='Location'
                            value={cardiovascular?.chestPain?.location}
                            onChange={(val: string) =>
                                updateCardiovascular('chestPain', {
                                    ...cardiovascular?.chestPain,
                                    location: val,
                                })
                            }
                            disabled={!cardiovascular?.chestPain?.yes}
                            style={'w-[235px]'}
                        ></TextInput>
                        <TextInput
                            placeHolder='Reffered Pain'
                            value={cardiovascular?.chestPain?.referredPain}
                            onChange={(val: string) =>
                                updateCardiovascular('chestPain', {
                                    ...cardiovascular?.chestPain,
                                    referredPain: val,
                                })
                            }
                            disabled={!cardiovascular?.chestPain?.yes}
                            style={'w-[201px]'}
                        ></TextInput>
                        <TextInput
                            placeHolder='Duration'
                            value={cardiovascular?.chestPain?.duration}
                            onChange={(val: string) =>
                                updateCardiovascular('chestPain', {
                                    ...cardiovascular?.chestPain,
                                    duration: val,
                                })
                            }
                            disabled={!cardiovascular?.chestPain?.yes}
                            style={'w-[235px]'}
                        ></TextInput>
                        <TextInput
                            placeHolder='Frequency'
                            value={cardiovascular?.chestPain?.frequency}
                            onChange={(val: string) =>
                                updateCardiovascular('chestPain', {
                                    ...cardiovascular?.chestPain,
                                    frequency: val,
                                })
                            }
                            disabled={!cardiovascular?.chestPain?.yes}
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
