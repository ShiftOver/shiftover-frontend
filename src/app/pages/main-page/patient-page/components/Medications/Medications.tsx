import { useEffect, useRef, useState } from 'react';
import CardHolder from '../CardHolder';
import SaveButton from '../SaveButton';
import TextInput from '../TextInput';

export type MedicationsProps = {
    id: any;
};

export default function Medications({ id }: MedicationsProps) {
    const [medInjection, setMedInjection] = useState('');
    const [doseInjection, setDoseInjection] = useState('');
    const [routeInjection, setRouteInjection] = useState('');
    const [frequencyInjection, setFrequencyInjection] = useState('');
    const [timeInjection, setTimeInjection] = useState('');
    const [signatureInjection, setSignatureInjection] = useState('');
    const [typeInjection, setTypeInjection] = useState('');
    const [medIntravenous, setMedIntravenous] = useState('');
    const [doseIntravenous, setDoseIntravenous] = useState('');
    const [routeIntravenous, setRouteIntravenous] = useState('');
    const [frequencyIntravenous, setFrequencyIntravenous] = useState('');
    const [timeIntravenous, setTimeIntravenous] = useState('');
    const [signatureIntravenous, setSignatureIntravenous] = useState('');
    const [typeIntravenous, setTypeIntravenous] = useState('');
    const [open, setOpen] = useState('');
    const [medOral, setMedOral] = useState('');
    const [doseOral, setDoseOral] = useState('');
    const [routeOral, setRouteOral] = useState('');
    const [frequencyOral, setFrequencyOral] = useState('');
    const [timeOral, setTimeOral] = useState('');
    const [signatureOral, setSignatureOral] = useState('');
    const [typeOral, setTypeOral] = useState('');

    const [medTropical, setMedTropical] = useState('');
    const [doseTropical, setDoseTropical] = useState('');
    const [routeTropical, setRouteTropical] = useState('');
    const [frequencyTropical, setFrequencyTropical] = useState('');
    const [timeTropical, setTimeTropical] = useState('');
    const [signatureTropical, setSignatureTropical] = useState('');
    const [typeTropical, setTypeTropical] = useState('');

    const [medDrop, setMedDrop] = useState('');
    const [doseDrop, setDoseDrop] = useState('');
    const [routeDrop, setRouteDrop] = useState('');
    const [frequencyDrop, setFrequencyDrop] = useState('');
    const [timeDrop, setTimeDrop] = useState('');
    const [signatureDrop, setSignatureDrop] = useState('');
    const [typeDrop, setTypeDrop] = useState('');

    const [medImplant, setMedImplant] = useState('');
    const [doseImplant, setDoseImplant] = useState('');
    const [routeImplant, setRouteImplant] = useState('');
    const [frequencyImplant, setFrequencyImplant] = useState('');
    const [timeImplant, setTimeImplant] = useState('');
    const [signatureImplant, setSignatureImplant] = useState('');
    const [typeImplant, setTypeImplant] = useState('');

    const [medSuppositories, setMedSuppositories] = useState('');
    const [doseSuppositories, setDoseSuppositories] = useState('');
    const [routeSuppositories, setRouteSuppositories] = useState('');
    const [frequencySuppositories, setFrequencySuppositories] = useState('');
    const [timeSuppositories, setTimeSuppositories] = useState('');
    const [signatureSuppositories, setSignatureSuppositories] = useState('');
    const [typeSuppositories, setTypeSuppositories] = useState('');
    const typeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                typeRef.current &&
                !typeRef.current.contains(event.target as Node)
            ) {
                setOpen('');
            }
        }

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {};
        console.log(formData);
    };
    return (
        <div className='ml-[27px] mr-[29px] mt-[23px] justify-items-center'>
            <div className='flex w-full flex-col justify-items-start gap-[46px]'>
                <div className='flex flex-row gap-[42px]'>
                    <CardHolder
                        path='injection'
                        type='Medications'
                        name='Injection Medication'
                    >
                        <div className='ml-[15px] mr-[20px] w-[352px] text-carddescription text-shiftover-cardtext'>
                            <div className='mt-[2px] flex flex-row border-b-[1px] border-[#828080] pb-[3px]'>
                                <div className='relative flex w-[28px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Type
                                    </div>
                                    <button
                                        className={`ml-[2px] mt-[2px] h-[10px] w-[10px] border-[#b7b1b1] ${typeInjection == 'Miscellaneous' ? 'bg-[#ff0000]' : typeInjection == 'STAT dose' ? 'bg-[#73d2fe]' : 'border-[1px]'}`}
                                        onClick={() => setOpen('Injection')}
                                    />
                                    {open == 'Injection' ? (
                                        <div
                                            className='absolute top-[25px] w-[56px] bg-[#fff] text-medicineType'
                                            ref={typeRef}
                                        >
                                            <button
                                                className='flex h-[20.4px] w-[56px] flex-row items-center justify-start rounded-t-[3.4px] shadow-[0_0.4px_1.36px_0_rgba(0,0,0,0.25)]'
                                                onClick={() => {
                                                    setTypeInjection(
                                                        'Miscellaneous'
                                                    );
                                                    setOpen('');
                                                }}
                                            >
                                                <div className='ml-[3.4px] mr-[3px] h-[13.6px] w-[13.6px] bg-[#ff0000]'></div>
                                                <p>Miscellaneous</p>
                                            </button>
                                            <button
                                                className='flex h-[20.4px] w-[56px] flex-row items-center justify-start rounded-b-[3.4px] shadow-[0_0.4px_1.36px_0_rgba(0,0,0,0.25)]'
                                                onClick={() => {
                                                    setTypeInjection(
                                                        'STAT dose'
                                                    );
                                                    setOpen('');
                                                }}
                                            >
                                                <div className='ml-[3.4px] mr-[3px] h-[13.6px] w-[13.6px] bg-[#73d2fe]'></div>
                                                <p>STAT dose</p>
                                            </button>
                                        </div>
                                    ) : null}
                                </div>
                                <div className='mr-[4px] flex w-[78px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Medication
                                    </div>
                                    <TextInput
                                        value={medInjection}
                                        onChange={setMedInjection}
                                        height='h-[12px]'
                                    ></TextInput>
                                </div>
                                <div className='mr-[4px] flex w-[81px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Dose
                                    </div>
                                    <TextInput
                                        value={doseInjection}
                                        onChange={setDoseInjection}
                                        height='h-[12px]'
                                    ></TextInput>
                                </div>
                                <div className='mr-[4px] flex w-[90px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Route
                                    </div>
                                    <TextInput
                                        value={routeInjection}
                                        onChange={setRouteInjection}
                                        height='h-[12px]'
                                    ></TextInput>
                                </div>
                                <div className='mr-[4px] flex w-[60px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Frequency
                                    </div>
                                    <TextInput
                                        value={frequencyInjection}
                                        onChange={setFrequencyInjection}
                                        height='h-[12px]'
                                    ></TextInput>
                                </div>
                            </div>
                            <div className='mt-[2px] flex flex-row border-b-[1px] border-[#828080] pb-[3px]'>
                                <div className='flex w-[110px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Time
                                    </div>
                                    <TextInput
                                        value={timeInjection}
                                        onChange={setTimeInjection}
                                        height='h-[12px]'
                                        style='w-[80px]'
                                    ></TextInput>
                                </div>
                                <div className='mr-[4px] flex w-[78px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Signature
                                    </div>
                                    <TextInput
                                        value={signatureInjection}
                                        onChange={setSignatureInjection}
                                        height='h-[12px]'
                                    ></TextInput>
                                </div>
                            </div>
                            <div className='mt-[2px] flex h-[23px] flex-row justify-end border-b-[1px] border-[#828080] pb-[3px]'>
                                <button className='h-[20px] w-[20px] bg-[#f6f3f3]'>
                                    +
                                </button>
                            </div>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='injection'
                        type='Medications'
                        name='Intravenous Medication'
                    >
                        <div className='ml-[15px] mr-[20px] w-[352px] text-carddescription text-shiftover-cardtext'>
                            <div className='mt-[2px] flex flex-row border-b-[1px] border-[#828080] pb-[3px]'>
                                <div className='relative flex w-[28px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Type
                                    </div>
                                    <button
                                        className={`ml-[2px] mt-[2px] h-[10px] w-[10px] border-[#b7b1b1] ${typeIntravenous == 'Miscellaneous' ? 'bg-[#ff0000]' : typeIntravenous == 'STAT dose' ? 'bg-[#73d2fe]' : 'border-[1px]'}`}
                                        onClick={() => setOpen('Intravenous')}
                                    />
                                    {open == 'Intravenous' ? (
                                        <div
                                            className='absolute top-[25px] w-[56px] bg-[#fff] text-medicineType'
                                            ref={typeRef}
                                        >
                                            <button
                                                className='flex h-[20.4px] w-[56px] flex-row items-center justify-start rounded-t-[3.4px] shadow-[0_0.4px_1.36px_0_rgba(0,0,0,0.25)]'
                                                onClick={() => {
                                                    setTypeIntravenous(
                                                        'Miscellaneous'
                                                    );
                                                    setOpen('');
                                                }}
                                            >
                                                <div className='ml-[3.4px] mr-[3px] h-[13.6px] w-[13.6px] bg-[#ff0000]'></div>
                                                <p>Miscellaneous</p>
                                            </button>
                                            <button
                                                className='flex h-[20.4px] w-[56px] flex-row items-center justify-start rounded-b-[3.4px] shadow-[0_0.4px_1.36px_0_rgba(0,0,0,0.25)]'
                                                onClick={() => {
                                                    setTypeIntravenous(
                                                        'STAT dose'
                                                    );
                                                    setOpen('');
                                                }}
                                            >
                                                <div className='ml-[3.4px] mr-[3px] h-[13.6px] w-[13.6px] bg-[#73d2fe]'></div>
                                                <p>STAT dose</p>
                                            </button>
                                        </div>
                                    ) : null}
                                </div>
                                <div className='mr-[4px] flex w-[78px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Medication
                                    </div>
                                    <TextInput
                                        value={medIntravenous}
                                        onChange={setMedIntravenous}
                                        height='h-[12px]'
                                    ></TextInput>
                                </div>
                                <div className='mr-[4px] flex w-[81px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Dose
                                    </div>
                                    <TextInput
                                        value={doseIntravenous}
                                        onChange={setDoseIntravenous}
                                        height='h-[12px]'
                                    ></TextInput>
                                </div>
                                <div className='mr-[4px] flex w-[90px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Route
                                    </div>
                                    <TextInput
                                        value={routeIntravenous}
                                        onChange={setRouteIntravenous}
                                        height='h-[12px]'
                                    ></TextInput>
                                </div>
                                <div className='mr-[4px] flex w-[60px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Frequency
                                    </div>
                                    <TextInput
                                        value={frequencyIntravenous}
                                        onChange={setFrequencyIntravenous}
                                        height='h-[12px]'
                                    ></TextInput>
                                </div>
                            </div>
                            <div className='mt-[2px] flex flex-row border-b-[1px] border-[#828080] pb-[3px]'>
                                <div className='flex w-[110px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Time
                                    </div>
                                    <TextInput
                                        value={timeIntravenous}
                                        onChange={setTimeIntravenous}
                                        height='h-[12px]'
                                        style='w-[80px]'
                                    ></TextInput>
                                </div>
                                <div className='mr-[4px] flex w-[78px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Signature
                                    </div>
                                    <TextInput
                                        value={signatureIntravenous}
                                        onChange={setSignatureIntravenous}
                                        height='h-[12px]'
                                    ></TextInput>
                                </div>
                            </div>
                            <div className='mt-[2px] flex h-[23px] flex-row border-b-[1px] border-[#828080] pb-[3px]'></div>
                        </div>
                    </CardHolder>
                </div>
                <div className='flex flex-row gap-[42px]'>
                    <CardHolder
                        path='capsule'
                        type='Medications'
                        name='Oral Medication'
                    >
                        <div className='w-[387px]'>
                            <div className='ml-[15px] mr-[20px] w-[352px] text-carddescription text-shiftover-cardtext'>
                                <div className='mt-[2px] flex flex-row border-b-[1px] border-[#828080] pb-[3px]'>
                                    <div className='relative flex w-[28px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Type
                                        </div>
                                        <button
                                            className={`ml-[2px] mt-[2px] h-[10px] w-[10px] border-[#b7b1b1] ${typeOral == 'Miscellaneous' ? 'bg-[#ff0000]' : typeOral == 'STAT dose' ? 'bg-[#73d2fe]' : 'border-[1px]'}`}
                                            onClick={() => setOpen('Oral')}
                                        />
                                        {open == 'Oral' ? (
                                            <div
                                                className='absolute top-[25px] w-[56px] bg-[#fff] text-medicineType'
                                                ref={typeRef}
                                            >
                                                <button
                                                    className='flex h-[20.4px] w-[56px] flex-row items-center justify-start rounded-t-[3.4px] shadow-[0_0.4px_1.36px_0_rgba(0,0,0,0.25)]'
                                                    onClick={() => {
                                                        setTypeOral(
                                                            'Miscellaneous'
                                                        );
                                                        setOpen('');
                                                    }}
                                                >
                                                    <div className='ml-[3.4px] mr-[3px] h-[13.6px] w-[13.6px] bg-[#ff0000]'></div>
                                                    <p>Miscellaneous</p>
                                                </button>
                                                <button
                                                    className='flex h-[20.4px] w-[56px] flex-row items-center justify-start rounded-b-[3.4px] shadow-[0_0.4px_1.36px_0_rgba(0,0,0,0.25)]'
                                                    onClick={() => {
                                                        setTypeOral(
                                                            'STAT dose'
                                                        );
                                                        setOpen('');
                                                    }}
                                                >
                                                    <div className='ml-[3.4px] mr-[3px] h-[13.6px] w-[13.6px] bg-[#73d2fe]'></div>
                                                    <p>STAT dose</p>
                                                </button>
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className='mr-[4px] flex w-[78px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Medication
                                        </div>
                                        <TextInput
                                            value={medOral}
                                            onChange={setMedOral}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                    <div className='mr-[4px] flex w-[81px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Dose
                                        </div>
                                        <TextInput
                                            value={doseOral}
                                            onChange={setDoseOral}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                    <div className='mr-[4px] flex w-[90px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Route
                                        </div>
                                        <TextInput
                                            value={routeOral}
                                            onChange={setRouteOral}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                    <div className='mr-[4px] flex w-[60px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Frequency
                                        </div>
                                        <TextInput
                                            value={frequencyOral}
                                            onChange={setFrequencyOral}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                </div>
                                <div className='mt-[2px] flex flex-row border-b-[1px] border-[#828080] pb-[3px]'>
                                    <div className='flex w-[110px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Time
                                        </div>
                                        <TextInput
                                            value={timeOral}
                                            onChange={setTimeOral}
                                            height='h-[12px]'
                                            style='w-[80px]'
                                        ></TextInput>
                                    </div>
                                    <div className='mr-[4px] flex w-[78px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Signature
                                        </div>
                                        <TextInput
                                            value={signatureOral}
                                            onChange={setSignatureOral}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                </div>
                                <div className='mt-[2px] flex h-[23px] flex-row border-b-[1px] border-[#828080] pb-[3px]'></div>
                            </div>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='claps'
                        type='Medications'
                        name='Tropical Medication'
                    >
                        <div className='w-[387px]'>
                            <div className='ml-[15px] mr-[20px] w-[352px] text-carddescription text-shiftover-cardtext'>
                                <div className='mt-[2px] flex flex-row border-b-[1px] border-[#828080] pb-[3px]'>
                                    <div className='relative flex w-[28px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Type
                                        </div>
                                        <button
                                            className={`ml-[2px] mt-[2px] h-[10px] w-[10px] border-[#b7b1b1] ${typeTropical == 'Miscellaneous' ? 'bg-[#ff0000]' : typeTropical == 'STAT dose' ? 'bg-[#73d2fe]' : 'border-[1px]'}`}
                                            onClick={() => setOpen('Tropical')}
                                        />
                                        {open == 'Tropical' ? (
                                            <div
                                                className='absolute top-[25px] w-[56px] bg-[#fff] text-medicineType'
                                                ref={typeRef}
                                            >
                                                <button
                                                    className='flex h-[20.4px] w-[56px] flex-row items-center justify-start rounded-t-[3.4px] shadow-[0_0.4px_1.36px_0_rgba(0,0,0,0.25)]'
                                                    onClick={() => {
                                                        setTypeTropical(
                                                            'Miscellaneous'
                                                        );
                                                        setOpen('');
                                                    }}
                                                >
                                                    <div className='ml-[3.4px] mr-[3px] h-[13.6px] w-[13.6px] bg-[#ff0000]'></div>
                                                    <p>Miscellaneous</p>
                                                </button>
                                                <button
                                                    className='flex h-[20.4px] w-[56px] flex-row items-center justify-start rounded-b-[3.4px] shadow-[0_0.4px_1.36px_0_rgba(0,0,0,0.25)]'
                                                    onClick={() => {
                                                        setTypeTropical(
                                                            'STAT dose'
                                                        );
                                                        setOpen('');
                                                    }}
                                                >
                                                    <div className='ml-[3.4px] mr-[3px] h-[13.6px] w-[13.6px] bg-[#73d2fe]'></div>
                                                    <p>STAT dose</p>
                                                </button>
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className='mr-[4px] flex w-[78px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Medication
                                        </div>
                                        <TextInput
                                            value={medTropical}
                                            onChange={setMedTropical}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                    <div className='mr-[4px] flex w-[81px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Dose
                                        </div>
                                        <TextInput
                                            value={doseTropical}
                                            onChange={setDoseTropical}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                    <div className='mr-[4px] flex w-[90px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Route
                                        </div>
                                        <TextInput
                                            value={routeTropical}
                                            onChange={setRouteTropical}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                    <div className='mr-[4px] flex w-[60px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Frequency
                                        </div>
                                        <TextInput
                                            value={frequencyTropical}
                                            onChange={setFrequencyTropical}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                </div>
                                <div className='mt-[2px] flex flex-row border-b-[1px] border-[#828080] pb-[3px]'>
                                    <div className='flex w-[110px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Time
                                        </div>
                                        <TextInput
                                            value={timeTropical}
                                            onChange={setTimeTropical}
                                            height='h-[12px]'
                                            style='w-[80px]'
                                        ></TextInput>
                                    </div>
                                    <div className='mr-[4px] flex w-[78px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Signature
                                        </div>
                                        <TextInput
                                            value={signatureTropical}
                                            onChange={setSignatureTropical}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                </div>
                                <div className='mt-[2px] flex h-[23px] flex-row border-b-[1px] border-[#828080] pb-[3px]'></div>
                            </div>
                        </div>
                    </CardHolder>
                </div>
                <div className='flex flex-row gap-[42px]'>
                    <CardHolder
                        path='drop'
                        type='Medications'
                        name='Drop Medication'
                    >
                        <div className='w-[387px]'>
                            <div className='ml-[15px] mr-[20px] w-[352px] text-carddescription text-shiftover-cardtext'>
                                <div className='mt-[2px] flex flex-row border-b-[1px] border-[#828080] pb-[3px]'>
                                    <div className='relative flex w-[28px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Type
                                        </div>
                                        <button
                                            className={`ml-[2px] mt-[2px] h-[10px] w-[10px] border-[#b7b1b1] ${typeDrop == 'Miscellaneous' ? 'bg-[#ff0000]' : typeDrop == 'STAT dose' ? 'bg-[#73d2fe]' : 'border-[1px]'}`}
                                            onClick={() => setOpen('Drop')}
                                        />
                                        {open == 'Drop' ? (
                                            <div
                                                className='absolute top-[25px] w-[56px] bg-[#fff] text-medicineType'
                                                ref={typeRef}
                                            >
                                                <button
                                                    className='flex h-[20.4px] w-[56px] flex-row items-center justify-start rounded-t-[3.4px] shadow-[0_0.4px_1.36px_0_rgba(0,0,0,0.25)]'
                                                    onClick={() => {
                                                        setTypeDrop(
                                                            'Miscellaneous'
                                                        );
                                                        setOpen('');
                                                    }}
                                                >
                                                    <div className='ml-[3.4px] mr-[3px] h-[13.6px] w-[13.6px] bg-[#ff0000]'></div>
                                                    <p>Miscellaneous</p>
                                                </button>
                                                <button
                                                    className='flex h-[20.4px] w-[56px] flex-row items-center justify-start rounded-b-[3.4px] shadow-[0_0.4px_1.36px_0_rgba(0,0,0,0.25)]'
                                                    onClick={() => {
                                                        setTypeDrop(
                                                            'STAT dose'
                                                        );
                                                        setOpen('');
                                                    }}
                                                >
                                                    <div className='ml-[3.4px] mr-[3px] h-[13.6px] w-[13.6px] bg-[#73d2fe]'></div>
                                                    <p>STAT dose</p>
                                                </button>
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className='mr-[4px] flex w-[78px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Medication
                                        </div>
                                        <TextInput
                                            value={medDrop}
                                            onChange={setMedDrop}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                    <div className='mr-[4px] flex w-[81px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Dose
                                        </div>
                                        <TextInput
                                            value={doseDrop}
                                            onChange={setDoseDrop}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                    <div className='mr-[4px] flex w-[90px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Route
                                        </div>
                                        <TextInput
                                            value={routeDrop}
                                            onChange={setRouteDrop}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                    <div className='mr-[4px] flex w-[60px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Frequency
                                        </div>
                                        <TextInput
                                            value={frequencyDrop}
                                            onChange={setFrequencyDrop}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                </div>
                                <div className='mt-[2px] flex flex-row border-b-[1px] border-[#828080] pb-[3px]'>
                                    <div className='flex w-[110px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Time
                                        </div>
                                        <TextInput
                                            value={timeDrop}
                                            onChange={setTimeDrop}
                                            height='h-[12px]'
                                            style='w-[80px]'
                                        ></TextInput>
                                    </div>
                                    <div className='mr-[4px] flex w-[78px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Signature
                                        </div>
                                        <TextInput
                                            value={signatureDrop}
                                            onChange={setSignatureDrop}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                </div>
                                <div className='mt-[2px] flex h-[23px] flex-row border-b-[1px] border-[#828080] pb-[3px]'></div>
                            </div>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='zip'
                        type='Medications'
                        name='Implant/ Patches Medication'
                    >
                        <div className='w-[387px]'>
                            <div className='ml-[15px] mr-[20px] w-[352px] text-carddescription text-shiftover-cardtext'>
                                <div className='mt-[2px] flex flex-row border-b-[1px] border-[#828080] pb-[3px]'>
                                    <div className='relative flex w-[28px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Type
                                        </div>
                                        <button
                                            className={`ml-[2px] mt-[2px] h-[10px] w-[10px] border-[#b7b1b1] ${typeImplant == 'Miscellaneous' ? 'bg-[#ff0000]' : typeImplant == 'STAT dose' ? 'bg-[#73d2fe]' : 'border-[1px]'}`}
                                            onClick={() => setOpen('Implant')}
                                        />
                                        {open == 'Implant' ? (
                                            <div
                                                className='absolute top-[25px] w-[56px] bg-[#fff] text-medicineType'
                                                ref={typeRef}
                                            >
                                                <button
                                                    className='flex h-[20.4px] w-[56px] flex-row items-center justify-start rounded-t-[3.4px] shadow-[0_0.4px_1.36px_0_rgba(0,0,0,0.25)]'
                                                    onClick={() => {
                                                        setTypeImplant(
                                                            'Miscellaneous'
                                                        );
                                                        setOpen('');
                                                    }}
                                                >
                                                    <div className='ml-[3.4px] mr-[3px] h-[13.6px] w-[13.6px] bg-[#ff0000]'></div>
                                                    <p>Miscellaneous</p>
                                                </button>
                                                <button
                                                    className='flex h-[20.4px] w-[56px] flex-row items-center justify-start rounded-b-[3.4px] shadow-[0_0.4px_1.36px_0_rgba(0,0,0,0.25)]'
                                                    onClick={() => {
                                                        setTypeImplant(
                                                            'STAT dose'
                                                        );
                                                        setOpen('');
                                                    }}
                                                >
                                                    <div className='ml-[3.4px] mr-[3px] h-[13.6px] w-[13.6px] bg-[#73d2fe]'></div>
                                                    <p>STAT dose</p>
                                                </button>
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className='mr-[4px] flex w-[78px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Medication
                                        </div>
                                        <TextInput
                                            value={medImplant}
                                            onChange={setMedImplant}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                    <div className='mr-[4px] flex w-[81px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Dose
                                        </div>
                                        <TextInput
                                            value={doseImplant}
                                            onChange={setDoseImplant}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                    <div className='mr-[4px] flex w-[90px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Route
                                        </div>
                                        <TextInput
                                            value={routeImplant}
                                            onChange={setRouteImplant}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                    <div className='mr-[4px] flex w-[60px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Frequency
                                        </div>
                                        <TextInput
                                            value={frequencyImplant}
                                            onChange={setFrequencyImplant}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                </div>
                                <div className='mt-[2px] flex flex-row border-b-[1px] border-[#828080] pb-[3px]'>
                                    <div className='flex w-[110px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Time
                                        </div>
                                        <TextInput
                                            value={timeImplant}
                                            onChange={setTimeImplant}
                                            height='h-[12px]'
                                            style='w-[80px]'
                                        ></TextInput>
                                    </div>
                                    <div className='mr-[4px] flex w-[78px] flex-col'>
                                        <div className='text-medicineHeader text-shiftover-gray-text'>
                                            Signature
                                        </div>
                                        <TextInput
                                            value={signatureImplant}
                                            onChange={setSignatureImplant}
                                            height='h-[12px]'
                                        ></TextInput>
                                    </div>
                                </div>
                                <div className='mt-[2px] flex h-[23px] flex-row border-b-[1px] border-[#828080] pb-[3px]'></div>
                            </div>
                        </div>
                    </CardHolder>
                </div>
                <CardHolder
                    path='capsule'
                    type='Medications'
                    name='Suppositories Medication'
                >
                    <div className='w-[387px]'>
                        <div className='ml-[15px] mr-[20px] w-[352px] text-carddescription text-shiftover-cardtext'>
                            <div className='mt-[2px] flex flex-row border-b-[1px] border-[#828080] pb-[3px]'>
                                <div className='relative flex w-[28px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Type
                                    </div>
                                    <button
                                        className={`ml-[2px] mt-[2px] h-[10px] w-[10px] border-[#b7b1b1] ${typeSuppositories == 'Miscellaneous' ? 'bg-[#ff0000]' : typeSuppositories == 'STAT dose' ? 'bg-[#73d2fe]' : 'border-[1px]'}`}
                                        onClick={() => setOpen('Suppositories')}
                                    />
                                    {open == 'Suppositories' ? (
                                        <div
                                            className='absolute top-[25px] w-[56px] bg-[#fff] text-medicineType'
                                            ref={typeRef}
                                        >
                                            <button
                                                className='flex h-[20.4px] w-[56px] flex-row items-center justify-start rounded-t-[3.4px] shadow-[0_0.4px_1.36px_0_rgba(0,0,0,0.25)]'
                                                onClick={() => {
                                                    setTypeSuppositories(
                                                        'Miscellaneous'
                                                    );
                                                    setOpen('');
                                                }}
                                            >
                                                <div className='ml-[3.4px] mr-[3px] h-[13.6px] w-[13.6px] bg-[#ff0000]'></div>
                                                <p>Miscellaneous</p>
                                            </button>
                                            <button
                                                className='flex h-[20.4px] w-[56px] flex-row items-center justify-start rounded-b-[3.4px] shadow-[0_0.4px_1.36px_0_rgba(0,0,0,0.25)]'
                                                onClick={() => {
                                                    setTypeSuppositories(
                                                        'STAT dose'
                                                    );
                                                    setOpen('');
                                                }}
                                            >
                                                <div className='ml-[3.4px] mr-[3px] h-[13.6px] w-[13.6px] bg-[#73d2fe]'></div>
                                                <p>STAT dose</p>
                                            </button>
                                        </div>
                                    ) : null}
                                </div>
                                <div className='mr-[4px] flex w-[78px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Medication
                                    </div>
                                    <TextInput
                                        value={medSuppositories}
                                        onChange={setMedSuppositories}
                                        height='h-[12px]'
                                    ></TextInput>
                                </div>
                                <div className='mr-[4px] flex w-[81px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Dose
                                    </div>
                                    <TextInput
                                        value={doseSuppositories}
                                        onChange={setDoseSuppositories}
                                        height='h-[12px]'
                                    ></TextInput>
                                </div>
                                <div className='mr-[4px] flex w-[90px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Route
                                    </div>
                                    <TextInput
                                        value={routeSuppositories}
                                        onChange={setRouteSuppositories}
                                        height='h-[12px]'
                                    ></TextInput>
                                </div>
                                <div className='mr-[4px] flex w-[60px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Frequency
                                    </div>
                                    <TextInput
                                        value={frequencySuppositories}
                                        onChange={setFrequencySuppositories}
                                        height='h-[12px]'
                                    ></TextInput>
                                </div>
                            </div>
                            <div className='mt-[2px] flex flex-row border-b-[1px] border-[#828080] pb-[3px]'>
                                <div className='flex w-[110px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Time
                                    </div>
                                    <TextInput
                                        value={timeSuppositories}
                                        onChange={setTimeSuppositories}
                                        height='h-[12px]'
                                        style='w-[80px]'
                                    ></TextInput>
                                </div>
                                <div className='mr-[4px] flex w-[78px] flex-col'>
                                    <div className='text-medicineHeader text-shiftover-gray-text'>
                                        Signature
                                    </div>
                                    <TextInput
                                        value={signatureSuppositories}
                                        onChange={setSignatureSuppositories}
                                        height='h-[12px]'
                                    ></TextInput>
                                </div>
                            </div>
                            <div className='mt-[2px] flex h-[23px] flex-row border-b-[1px] border-[#828080] pb-[3px]'></div>
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
