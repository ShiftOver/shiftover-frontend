import { use, useEffect, useState } from 'react';
import CardHolder from '../../CardHolder';
import RadioButton from '../../Radiobutton';
import SaveButton from '../../SaveButton';
import TextInput from '../../TextInput';

export type EliminationPainManagementProps = {
    id: any;
};

export default function EliminationPainManagement({
    id,
}: EliminationPainManagementProps) {
    const [oralCavity, setOralCavity] = useState('');
    const [oralCavityOther, setOralCavityOther] = useState('');
    const [abdomen, setAbdomen] = useState('');
    const [abdomenTender, setAbdomenTender] = useState('');
    const [abdomenOther, setAbdomenOther] = useState('');
    const [bowel, setBowel] = useState('');
    const [bowelDay, setBowelDay] = useState('');
    const [elimination, setElimination] = useState('');
    const [eliminationOther, setEliminationOther] = useState('');
    const [bladder, setBladder] = useState('');
    const [bladderOther, setBladderOther] = useState('');
    const [voiding, setVoiding] = useState('');
    const [voidingTime, setVoidingTime] = useState('');
    const [voidingDysuria, setVoidingDysuria] = useState('');
    const [voidingCatheter, setVoidingCatheter] = useState('');
    const [voidingOther, setVoidingOther] = useState('');
    const [urine, setUrine] = useState('');
    const [urineOther, setUrineOther] = useState('');
    const [genital, setGenital] = useState('');
    const [genitalAbnormal, setGenitalAbnormal] = useState('');
    const [breast, setBreast] = useState('');
    const [breastAbnormal, setBreastAbnormal] = useState('');
    const [menstrual, setMenstrual] = useState('');
    const [menstrualYes, setMenstrualYes] = useState('');
    const [menstrualLMP, setMenstrualLMP] = useState('');
    const [pain, setPain] = useState('');
    const [painNo, setPainNo] = useState('');
    const [painWhen, setPainWhen] = useState('');
    const [painCause, setPainCause] = useState('');
    const [pattern, setPattern] = useState('');
    const [patternOther, setPatternOther] = useState('');
    const [painDescribe, setPainDescribe] = useState('');
    const [painDescribeOther, setPainDescribeOther] = useState('');
    const [intensity, setIntensity] = useState<number | null>(null);
    const [intensityPart, setIntensityPart] = useState([<></>]);
    const [painAffect, setPainAffect] = useState('');
    const [painRelieves, setPainRelieves] = useState('');
    const [painRelievesOther, setPainRelievesOther] = useState('');
    const [painRelievesMedication, setPainRelievesMedication] = useState('');
    const intensityDiv = (num: number, bool?: number | null) => {
        let description;
        switch (num) {
            case 0:
                description = (
                    <p className='text-center'>
                        No
                        <br />
                        pain
                    </p>
                );
                break;
            case 2:
                description = (
                    <p className='text-center'>
                        Mild
                        <br />
                        pain
                    </p>
                );
                break;
            case 5:
                description = (
                    <p className='text-center'>
                        Moderate
                        <br />
                        pain
                    </p>
                );
                break;
            case 8:
                description = (
                    <p className='text-center'>
                        Very
                        <br />
                        severe
                        <br />
                        pain
                    </p>
                );
                break;
            case 10:
                description = (
                    <p className='text-center'>
                        Worst
                        <br />
                        possible
                        <br />
                        pain
                    </p>
                );
                break;
        }
        return (
            <button
                className='flex flex-1 flex-col items-center justify-end'
                onClick={() => {
                    setIntensity(num);
                }}
            >
                {description ? description : <></>}
                {num == bool ? (
                    <div className='radius-[40px] my-[3px] h-[19px] w-[5px] bg-[#828080]' />
                ) : (
                    <div className='my-[3px] h-[19px] w-[1px] border border-[#828080]' />
                )}

                <p>{num}</p>
            </button>
        );
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {};
        console.log(formData);
    };
    useEffect(() => {
        let intensityList = [];
        for (let i = 0; i <= 10; i++) {
            intensityList.push(intensityDiv(i));
        }
        setIntensityPart(intensityList);
    }, []);
    useEffect(() => {
        let intensityList = [];
        for (let i = 0; i <= 10; i++) {
            intensityList.push(intensityDiv(i, intensity));
        }
        setIntensityPart(intensityList);
    }, [intensity]);
    return (
        <div className='ml-[27px] mt-[23px] justify-items-center'>
            <div className='flex w-full flex-col justify-items-start gap-[15px]'>
                <CardHolder
                    path='stomach'
                    type='NurseAssessmentForm'
                    name='Gastrointestinal'
                >
                    <div className='ml-[14px] flex w-[986px] flex-row'>
                        <div className='mr-[59px]'>
                            <p>Oral Cavity:</p>
                            <div className='my-[11px] flex flex-row'>
                                <div className='flex flex-col gap-[12px]'>
                                    <RadioButton
                                        value={oralCavity}
                                        onChange={setOralCavity}
                                        name='OralCavity'
                                        placeHolder='Moist'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={oralCavity}
                                        onChange={setOralCavity}
                                        name='OralCavity'
                                        placeHolder='Abrasion'
                                        style='ml-[6px] mr-[53px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={oralCavity}
                                        onChange={setOralCavity}
                                        name='OralCavity'
                                        placeHolder='Denture'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                </div>
                                <div className='flex flex-col gap-[12px]'>
                                    <RadioButton
                                        value={oralCavity}
                                        onChange={setOralCavity}
                                        name='OralCavity'
                                        placeHolder='Dry'
                                        style='ml-[6px]'
                                    ></RadioButton>

                                    <RadioButton
                                        value={oralCavity}
                                        onChange={setOralCavity}
                                        name='OralCavity'
                                        placeHolder='Tumor'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                </div>
                            </div>
                            <RadioButton
                                value={oralCavity}
                                onChange={setOralCavity}
                                name='OralCavity'
                                placeHolder='Other'
                                style='ml-[6px]'
                            >
                                <TextInput
                                    placeHolder='Other'
                                    value={oralCavityOther}
                                    onChange={setOralCavityOther}
                                    disabled={oralCavity !== 'Other'}
                                    style={'w-[156px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='mr-[73px]'>
                            <p>Abdomen:</p>
                            <div className='my-[11px] flex flex-col gap-y-[11px]'>
                                <RadioButton
                                    value={abdomen}
                                    onChange={setAbdomen}
                                    name='Abdomen'
                                    placeHolder='Soft'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={abdomen}
                                    onChange={setAbdomen}
                                    name='Abdomen'
                                    placeHolder='Tender'
                                    style='ml-[6px]'
                                >
                                    <TextInput
                                        placeHolder='Tender'
                                        value={abdomenTender}
                                        onChange={setAbdomenTender}
                                        disabled={abdomen !== 'Tender'}
                                        style={'w-[147px]'}
                                    ></TextInput>
                                </RadioButton>
                                <RadioButton
                                    value={abdomen}
                                    onChange={setAbdomen}
                                    name='Abdomen'
                                    placeHolder='Other'
                                    style='ml-[6px]'
                                >
                                    <TextInput
                                        placeHolder='Other'
                                        value={abdomenOther}
                                        onChange={setAbdomenOther}
                                        disabled={abdomen !== 'Other'}
                                        style={'w-[157px]'}
                                    ></TextInput>
                                </RadioButton>
                                <TextInput
                                    value={abdomenOther}
                                    onChange={setAbdomenOther}
                                    disabled={abdomen !== 'Other'}
                                    style={'w-[219px]'}
                                ></TextInput>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[12px]'>
                            <div className='flex flex-row'>
                                <TextInput
                                    placeHolder='Bowel Pattern:'
                                    value={bowel}
                                    onChange={setBowel}
                                    style={'w-[74px]'}
                                ></TextInput>
                                <TextInput
                                    value={bowelDay}
                                    placeHolder='time/'
                                    onChange={setBowelDay}
                                    style={'w-[74px]'}
                                ></TextInput>
                                <p>day</p>
                            </div>
                            <p>Elimination Problem:</p>

                            <div className='flex flex-col gap-y-[11px]'>
                                <div className='flex flex-row gap-[62px]'>
                                    <div className='flex flex-col gap-y-[11px]'>
                                        <RadioButton
                                            value={elimination}
                                            onChange={setElimination}
                                            name='Elimination'
                                            placeHolder='None'
                                            style='ml-[6px]'
                                        ></RadioButton>
                                        <RadioButton
                                            value={elimination}
                                            onChange={setElimination}
                                            name='Elimination'
                                            placeHolder='Constipation'
                                            style='ml-[6px]'
                                        ></RadioButton>
                                    </div>

                                    <div className='flex flex-col gap-y-[11px]'>
                                        <RadioButton
                                            value={elimination}
                                            onChange={setElimination}
                                            name='Elimination'
                                            placeHolder='Diarrhea'
                                            style='ml-[6px]'
                                        ></RadioButton>
                                        <RadioButton
                                            value={elimination}
                                            onChange={setElimination}
                                            name='Elimination'
                                            placeHolder='Incontinent'
                                            style='ml-[6px]'
                                        ></RadioButton>
                                    </div>
                                </div>
                                <RadioButton
                                    value={elimination}
                                    onChange={setElimination}
                                    name='Elimination'
                                    placeHolder='Other'
                                    style='ml-[6px]'
                                >
                                    <TextInput
                                        placeHolder='Other'
                                        value={eliminationOther}
                                        onChange={setEliminationOther}
                                        disabled={elimination !== 'Other'}
                                        style={'w-[312px]'}
                                    ></TextInput>
                                </RadioButton>
                            </div>
                        </div>
                    </div>
                </CardHolder>
                <div className='flex flex-row gap-[14px]'>
                    <CardHolder
                        path='stomach'
                        type='NurseAssessmentForm'
                        name='Genito - Urinary'
                    >
                        <div className='ml-[14px] flex w-[467px] flex-row'>
                            <div className='mr-[11px]'>
                                <p className='mb-[12px]'>Bladder:</p>
                                <div className='flex flex-col gap-[11px]'>
                                    <RadioButton
                                        value={bladder}
                                        onChange={setBladder}
                                        name='Bladder'
                                        placeHolder='Soft'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={bladder}
                                        onChange={setBladder}
                                        name='Bladder'
                                        placeHolder='Distented'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={bladder}
                                        onChange={setBladder}
                                        name='Bladder'
                                        placeHolder='Other'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <TextInput
                                        value={bladderOther}
                                        onChange={setBladderOther}
                                        disabled={bladder !== 'Other'}
                                        style={'w-[103px]'}
                                    ></TextInput>
                                    <TextInput
                                        value={bladderOther}
                                        onChange={setBladderOther}
                                        disabled={bladder !== 'Other'}
                                        style={'w-[103px]'}
                                    ></TextInput>
                                </div>
                            </div>
                            <div className='mr-[34px]'>
                                <div className='mb-[12px] flex flex-row'>
                                    <p>Voiding:</p>
                                    <TextInput
                                        value={voidingTime}
                                        onChange={setVoidingTime}
                                        style={'w-[22px]'}
                                    ></TextInput>
                                    <TextInput
                                        value={voidingTime}
                                        onChange={setVoidingTime}
                                        style={'w-[22px]'}
                                    ></TextInput>
                                    <p>(Day:Night)</p>
                                </div>
                                <div className='my-[11px] flex flex-col gap-y-[11px]'>
                                    <RadioButton
                                        value={voiding}
                                        onChange={setVoiding}
                                        name='Voiding'
                                        placeHolder='Continent'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={voiding}
                                        onChange={setVoiding}
                                        name='Voiding'
                                        placeHolder='Incontinent'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={voiding}
                                        onChange={setVoiding}
                                        name='Voiding'
                                        placeHolder='Dysuria'
                                        style='ml-[6px]'
                                    >
                                        <TextInput
                                            placeHolder='Dysuria'
                                            value={voidingDysuria}
                                            onChange={setVoidingDysuria}
                                            disabled={voiding !== 'Dysuria'}
                                            style={'w-[115px]'}
                                        ></TextInput>
                                    </RadioButton>
                                    <RadioButton
                                        value={voiding}
                                        onChange={setVoiding}
                                        name='Voiding'
                                        placeHolder='Catheter'
                                        style='ml-[6px]'
                                    >
                                        <TextInput
                                            placeHolder='Catheter'
                                            value={voidingCatheter}
                                            onChange={setVoidingCatheter}
                                            disabled={voiding !== 'Catheter'}
                                            style={'w-[108px]'}
                                        ></TextInput>
                                    </RadioButton>
                                    <RadioButton
                                        value={voiding}
                                        onChange={setVoiding}
                                        name='Voiding'
                                        placeHolder='Other'
                                        style='ml-[6px]'
                                    >
                                        <TextInput
                                            placeHolder='Other'
                                            value={voidingOther}
                                            onChange={setVoidingOther}
                                            disabled={abdomen !== 'Other'}
                                            style={'w-[128px]'}
                                        ></TextInput>
                                    </RadioButton>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <p>Urine:</p>
                                <div className='my-[13px] flex flex-col gap-y-[11px]'>
                                    <RadioButton
                                        value={urine}
                                        onChange={setUrine}
                                        name='Urine'
                                        placeHolder='Clear'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={urine}
                                        onChange={setUrine}
                                        name='Urine'
                                        placeHolder='Cloudy'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={urine}
                                        onChange={setUrine}
                                        name='Urine'
                                        placeHolder='Bloody'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={urine}
                                        onChange={setUrine}
                                        name='Urine'
                                        placeHolder='Other'
                                        style='ml-[6px]'
                                    >
                                        <TextInput
                                            placeHolder='Other'
                                            value={urineOther}
                                            onChange={setUrineOther}
                                            disabled={urine !== 'Other'}
                                            style={'w-[46px]'}
                                        ></TextInput>
                                    </RadioButton>
                                    <TextInput
                                        value={urineOther}
                                        onChange={setUrineOther}
                                        disabled={urine !== 'Other'}
                                        style={'w-[107px]'}
                                    ></TextInput>
                                </div>
                            </div>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='stomach'
                        type='NurseAssessmentForm'
                        name='Reproductive'
                    >
                        <div className='ml-[14px] flex w-[467px] flex-row'>
                            <div className='mr-[31px]'>
                                <p className='mb-[12px]'>Genital Organ:</p>
                                <div className='flex flex-col gap-[11px]'>
                                    <RadioButton
                                        value={genital}
                                        onChange={setGenital}
                                        name='Genital'
                                        placeHolder='Normal'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={genital}
                                        onChange={setGenital}
                                        name='Genital'
                                        placeHolder='Abnormal'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <TextInput
                                        value={genitalAbnormal}
                                        onChange={setGenitalAbnormal}
                                        disabled={genital !== 'Abnormal'}
                                        style={'w-[109px]'}
                                    ></TextInput>
                                    <TextInput
                                        value={genitalAbnormal}
                                        onChange={setGenitalAbnormal}
                                        disabled={genital !== 'Abnormal'}
                                        style={'w-[109px]'}
                                    ></TextInput>
                                    <TextInput
                                        value={genitalAbnormal}
                                        onChange={setGenitalAbnormal}
                                        disabled={genital !== 'Abnormal'}
                                        style={'w-[109px]'}
                                    ></TextInput>
                                </div>
                            </div>
                            <div className='mr-[31px]'>
                                <p className='mb-[12px]'>Breast:</p>
                                <div className='flex flex-col gap-[11px]'>
                                    <RadioButton
                                        value={breast}
                                        onChange={setBreast}
                                        name='Breast'
                                        placeHolder='Normal'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={breast}
                                        onChange={setBreast}
                                        name='Breast'
                                        placeHolder='Abnormal'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <TextInput
                                        value={breastAbnormal}
                                        onChange={setBreastAbnormal}
                                        disabled={breast !== 'Abnormal'}
                                        style={'w-[109px]'}
                                    ></TextInput>
                                    <TextInput
                                        value={breastAbnormal}
                                        onChange={setBreastAbnormal}
                                        disabled={breast !== 'Abnormal'}
                                        style={'w-[109px]'}
                                    ></TextInput>
                                    <TextInput
                                        value={breastAbnormal}
                                        onChange={setBreastAbnormal}
                                        disabled={breast !== 'Abnormal'}
                                        style={'w-[109px]'}
                                    ></TextInput>
                                </div>
                            </div>
                            <div className='mr-[31px]'>
                                <p className='mb-[11px]'>Menstrual Problem:</p>
                                <p className='mb-[11px] ml-[21px]'>
                                    (Female Only)
                                </p>
                                <div className='flex flex-col gap-[11px]'>
                                    <RadioButton
                                        value={menstrual}
                                        onChange={setMenstrual}
                                        name='Menstrual'
                                        placeHolder='No'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={menstrual}
                                        onChange={setMenstrual}
                                        name='Menstrual'
                                        placeHolder='Yes'
                                        style='ml-[6px]'
                                    >
                                        <TextInput
                                            placeHolder='Yes'
                                            value={menstrualYes}
                                            onChange={setMenstrualYes}
                                            disabled={menstrual !== 'Yes'}
                                            style={'w-[124px]'}
                                        ></TextInput>
                                    </RadioButton>
                                    <TextInput
                                        value={menstrualYes}
                                        onChange={setMenstrualYes}
                                        disabled={menstrual !== 'Yes'}
                                        style={'w-[172px]'}
                                    ></TextInput>
                                    <TextInput
                                        placeHolder='LMP:'
                                        value={menstrualLMP}
                                        onChange={setMenstrualLMP}
                                        style={'w-[134px]'}
                                    ></TextInput>
                                </div>
                            </div>
                        </div>
                    </CardHolder>
                </div>

                <CardHolder
                    path='exclamation'
                    type='NurseAssessmentForm'
                    name='Pain Management'
                >
                    <div className='ml-[14px] flex w-[986px] flex-col gap-[11px]'>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>Pain:</p>
                            <RadioButton
                                value={pain}
                                onChange={setPain}
                                name='Pain'
                                placeHolder='Yes'
                                style='ml-[6px] mr-[29px]'
                            ></RadioButton>
                            <RadioButton
                                value={pain}
                                onChange={setPain}
                                name='Pain'
                                placeHolder='No'
                                style='ml-[6px] mr-[42px]'
                            >
                                <TextInput
                                    placeHolder='No'
                                    value={painNo}
                                    onChange={setPainNo}
                                    disabled={pain !== 'No'}
                                    style={'w-[338px] ml-[21px]'}
                                ></TextInput>
                            </RadioButton>
                            <TextInput
                                placeHolder='When'
                                value={painWhen}
                                onChange={setPainWhen}
                                style={'w-[338px]'}
                            ></TextInput>
                        </div>
                        <TextInput
                            placeHolder='What cause pain to increase?'
                            value={painCause}
                            onChange={setPainCause}
                            style={'w-[755px]'}
                        ></TextInput>
                        <div className='flex flex-row'>
                            <p className='mr-[29px]'>Pattern:</p>
                            <RadioButton
                                value={pattern}
                                onChange={setPattern}
                                name='Pattern'
                                placeHolder='Intermittent'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={pattern}
                                onChange={setPattern}
                                name='Pattern'
                                placeHolder='Constant'
                                style='ml-[6px] mr-[29px]'
                            ></RadioButton>
                            <RadioButton
                                value={pattern}
                                onChange={setPattern}
                                name='Pattern'
                                placeHolder='Other'
                                style='ml-[6px] mr-[29px]'
                            >
                                <TextInput
                                    placeHolder='Other'
                                    value={patternOther}
                                    onChange={setPatternOther}
                                    disabled={pattern !== 'Other'}
                                    style={'w-[590px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[30px]'>
                                How does patient describe the pain:
                            </p>
                            <RadioButton
                                value={painDescribe}
                                onChange={setPainDescribe}
                                name='Pain Describe'
                                placeHolder='Burning'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={painDescribe}
                                onChange={setPainDescribe}
                                name='Pain Describe'
                                placeHolder='Dull'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={painDescribe}
                                onChange={setPainDescribe}
                                name='Pain Describe'
                                placeHolder='Sharp'
                                style='ml-[6px] mr-[20px]'
                            ></RadioButton>
                            <RadioButton
                                value={painDescribe}
                                onChange={setPainDescribe}
                                name='Pain Describe'
                                placeHolder='Other'
                                style='ml-[6px] mr-[20px]'
                            >
                                <TextInput
                                    placeHolder='Other'
                                    value={painDescribeOther}
                                    onChange={setPainDescribeOther}
                                    disabled={painDescribe !== 'Other'}
                                    style={'w-[392px]'}
                                ></TextInput>
                            </RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[21px]'>intensity:</p>
                            <div className='flex w-[824px] flex-row'>
                                {intensityPart.map((div) => div)}
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[13px]'>
                                Does pain affect patient&apos;s ability to:
                            </p>
                            <RadioButton
                                value={painAffect}
                                onChange={setPainAffect}
                                name='Pain Affect'
                                placeHolder='Eat'
                                style='ml-[6px] mr-[10px]'
                            ></RadioButton>
                            <RadioButton
                                value={painAffect}
                                onChange={setPainAffect}
                                name='Pain Affect'
                                placeHolder='Activity'
                                style='ml-[6px] mr-[10px]'
                            ></RadioButton>
                            <RadioButton
                                value={painAffect}
                                onChange={setPainAffect}
                                name='Pain Affect'
                                placeHolder='Sleep'
                                style='ml-[6px] mr-[10px]'
                            ></RadioButton>
                            <RadioButton
                                value={painAffect}
                                onChange={setPainAffect}
                                name='Pain Affect'
                                placeHolder='Elimination'
                                style='ml-[6px] mr-[10px]'
                            ></RadioButton>
                            <RadioButton
                                value={painAffect}
                                onChange={setPainAffect}
                                name='Pain Affect'
                                placeHolder='Mood'
                                style='ml-[6px] mr-[10px]'
                            ></RadioButton>
                            <RadioButton
                                value={painAffect}
                                onChange={setPainAffect}
                                name='Pain Affect'
                                placeHolder='Self Image'
                                style='ml-[6px] mr-[10px]'
                            ></RadioButton>
                            <RadioButton
                                value={painAffect}
                                onChange={setPainAffect}
                                name='Pain Affect'
                                placeHolder='Sexuality'
                                style='ml-[6px] mr-[10px]'
                            ></RadioButton>
                            <RadioButton
                                value={painAffect}
                                onChange={setPainAffect}
                                name='Pain Affect'
                                placeHolder='Social Interaction'
                                style='ml-[6px] mr-[10px]'
                            ></RadioButton>
                        </div>
                        <div className='flex flex-row'>
                            <p className='mr-[20px]'>What relieves pain:</p>
                            <div className='flex flex-col gap-[12px]'>
                                <div className='flex flex-row'>
                                    <RadioButton
                                        value={painRelieves}
                                        onChange={setPainRelieves}
                                        name='Pain Relieves'
                                        placeHolder='Cold Compression'
                                        style='ml-[6px] mr-[20px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={painRelieves}
                                        onChange={setPainRelieves}
                                        name='Pain Relieves'
                                        placeHolder='Hot Compression'
                                        style='ml-[6px] mr-[20px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={painRelieves}
                                        onChange={setPainRelieves}
                                        name='Pain Relieves'
                                        placeHolder='Message'
                                        style='ml-[6px] mr-[20px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={painRelieves}
                                        onChange={setPainRelieves}
                                        name='Pain Relieves'
                                        placeHolder='Relaxation'
                                        style='ml-[6px] mr-[20px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={painRelieves}
                                        onChange={setPainRelieves}
                                        name='Pain Relieves'
                                        placeHolder='Reposition'
                                        style='ml-[6px] mr-[20px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={painRelieves}
                                        onChange={setPainRelieves}
                                        name='Pain Relieves'
                                        placeHolder='Rest/ Sleep'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                </div>
                                <div className='flex flex-row'>
                                    <RadioButton
                                        value={painRelieves}
                                        onChange={setPainRelieves}
                                        name='Pain Relieves'
                                        placeHolder='Medication'
                                        style='ml-[6px] mr-[20px]'
                                    >
                                        <TextInput
                                            placeHolder='Medication'
                                            value={painRelievesMedication}
                                            onChange={setPainRelievesMedication}
                                            disabled={
                                                painRelieves !== 'Medication'
                                            }
                                            style={'w-[209px]'}
                                        ></TextInput>
                                    </RadioButton>
                                    <RadioButton
                                        value={painRelieves}
                                        onChange={setPainRelieves}
                                        name='Pain Relieves'
                                        placeHolder='Other'
                                        style='ml-[6px] mr-[20px]'
                                    >
                                        <TextInput
                                            placeHolder='Other'
                                            value={painRelievesMedication}
                                            onChange={setPainRelievesMedication}
                                            disabled={painRelieves !== 'Other'}
                                            style={'w-[209px]'}
                                        ></TextInput>
                                    </RadioButton>
                                </div>
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
