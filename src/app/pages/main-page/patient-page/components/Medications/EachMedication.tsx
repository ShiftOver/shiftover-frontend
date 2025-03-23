import { useEffect, useRef, useState } from 'react';
import TextInput from '../TextInput';

export type EachMedicationProps = {
    index: any;
    onChange: any;
};

export default function EachMedication({
    index,
    onChange,
}: EachMedicationProps) {
    const [med, setMed] = useState('');
    const [dose, setDose] = useState('');
    const [route, setRoute] = useState('');
    const [frequency, setFrequency] = useState('');
    const [time, setTime] = useState('');
    const [signature, setSignature] = useState('');
    const [type, setType] = useState('');
    const [open, setOpen] = useState(false);
    const typeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                typeRef.current &&
                !typeRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
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

    useEffect(() => {
        onChange((prev: any) => {
            const updated = [...prev];
            updated[index] = {
                type,
                medication: med,
                dose,
                route,
                frequency,
                time,
                signature,
            };
            return updated;
        });
    }, [med, dose, route, frequency, time, signature, type]);

    return (
        <div className='ml-[15px] mr-[20px] w-[352px] text-carddescription text-shiftover-cardtext'>
            <div className='mt-[2px] flex flex-row border-b-[1px] border-[#828080] pb-[3px]'>
                <div className='relative flex w-[28px] flex-col'>
                    <div className='text-medicineHeader text-shiftover-gray-text'>
                        Type
                    </div>
                    <button
                        className={`ml-[2px] mt-[2px] h-[10px] w-[10px] border-[#b7b1b1] ${type == 'Miscellaneous' ? 'bg-[#ff0000]' : type == 'STAT dose' ? 'bg-[#73d2fe]' : 'border-[1px]'}`}
                        onClick={() => setOpen(true)}
                    />
                    {open ? (
                        <div
                            className='absolute top-[25px] w-[56px] bg-[#fff] text-medicineType'
                            ref={typeRef}
                        >
                            <button
                                className='flex h-[20.4px] w-[56px] flex-row items-center justify-start rounded-t-[3.4px] shadow-[0_0.4px_1.36px_0_rgba(0,0,0,0.25)]'
                                onClick={() => {
                                    setType('Miscellaneous');
                                    setOpen(false);
                                }}
                            >
                                <div className='ml-[3.4px] mr-[3px] h-[13.6px] w-[13.6px] bg-[#ff0000]'></div>
                                <p>Miscellaneous</p>
                            </button>
                            <button
                                className='flex h-[20.4px] w-[56px] flex-row items-center justify-start rounded-b-[3.4px] shadow-[0_0.4px_1.36px_0_rgba(0,0,0,0.25)]'
                                onClick={() => {
                                    setType('STAT dose');
                                    setOpen(false);
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
                        value={med}
                        onChange={setMed}
                        height='h-[12px]'
                    ></TextInput>
                </div>
                <div className='mr-[4px] flex w-[81px] flex-col'>
                    <div className='text-medicineHeader text-shiftover-gray-text'>
                        Dose
                    </div>
                    <TextInput
                        value={dose}
                        onChange={setDose}
                        height='h-[12px]'
                    ></TextInput>
                </div>
                <div className='mr-[4px] flex w-[90px] flex-col'>
                    <div className='text-medicineHeader text-shiftover-gray-text'>
                        Route
                    </div>
                    <TextInput
                        value={route}
                        onChange={setRoute}
                        height='h-[12px]'
                    ></TextInput>
                </div>
                <div className='mr-[4px] flex w-[60px] flex-col'>
                    <div className='text-medicineHeader text-shiftover-gray-text'>
                        Frequency
                    </div>
                    <TextInput
                        value={frequency}
                        onChange={setFrequency}
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
                        value={time}
                        onChange={setTime}
                        height='h-[12px]'
                        style='w-[80px]'
                    ></TextInput>
                </div>
                <div className='mr-[4px] flex w-[78px] flex-col'>
                    <div className='text-medicineHeader text-shiftover-gray-text'>
                        Signature
                    </div>
                    <TextInput
                        value={signature}
                        onChange={setSignature}
                        height='h-[12px]'
                    ></TextInput>
                </div>
            </div>
        </div>
    );
}
