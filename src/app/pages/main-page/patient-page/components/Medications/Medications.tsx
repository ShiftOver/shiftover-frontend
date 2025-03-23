import { useState } from 'react';
import CardHolder from '../CardHolder';
import SaveButton from '../SaveButton';

import EachMedication from './EachMedication';

export type MedicationsProps = {
    id: any;
};

export default function Medications({ id }: MedicationsProps) {
    const [injection, setInjection] = useState([
        {
            type: '',
            medication: '',
            dose: '',
            route: '',
            frequency: '',
            time: '',
            signature: '',
        },
    ]);

    const [intravenous, setIntravenous] = useState([
        {
            type: '',
            medication: '',
            dose: '',
            route: '',
            frequency: '',
            time: '',
            signature: '',
        },
    ]);

    const [oral, setOral] = useState([
        {
            type: '',
            medication: '',
            dose: '',
            route: '',
            frequency: '',
            time: '',
            signature: '',
        },
    ]);

    const [tropical, setTropical] = useState([
        {
            type: '',
            medication: '',
            dose: '',
            route: '',
            frequency: '',
            time: '',
            signature: '',
        },
    ]);

    const [drop, setDrop] = useState([
        {
            type: '',
            medication: '',
            dose: '',
            route: '',
            frequency: '',
            time: '',
            signature: '',
        },
    ]);

    const [implant, setImplant] = useState([
        {
            type: '',
            medication: '',
            dose: '',
            route: '',
            frequency: '',
            time: '',
            signature: '',
        },
    ]);

    const [suppositories, setSuppositories] = useState([
        {
            type: '',
            medication: '',
            dose: '',
            route: '',
            frequency: '',
            time: '',
            signature: '',
        },
    ]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = { injection };
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
                        {injection.map((med, index) => (
                            <div key={index}>
                                <EachMedication
                                    index={index}
                                    onChange={setInjection}
                                />
                                {index === injection.length - 1 ? (
                                    <div className='ml-[15px] mr-[20px] mt-[2px] flex h-[23px] flex-row justify-end border-b-[1px] border-[#828080] pb-[3px]'>
                                        <button
                                            className='h-[20px] w-[20px] bg-[#f6f3f3]'
                                            onClick={() => {
                                                setInjection((prev) => {
                                                    return [
                                                        ...prev,
                                                        {
                                                            type: '',
                                                            medication: '',
                                                            dose: '',
                                                            route: '',
                                                            frequency: '',
                                                            time: '',
                                                            signature: '',
                                                        },
                                                    ];
                                                });
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    <div className='ml-[15px] mr-[20px] mt-[2px] flex h-[23px] flex-row justify-end border-b-[1px] border-[#828080] pb-[3px]'></div>
                                )}
                            </div>
                        ))}
                    </CardHolder>
                    <CardHolder
                        path='injection'
                        type='Medications'
                        name='Intravenous Medication'
                    >
                        {intravenous.map((med, index) => (
                            <div key={index}>
                                <EachMedication
                                    index={index}
                                    onChange={setIntravenous}
                                />
                                {index === intravenous.length - 1 ? (
                                    <div className='ml-[15px] mr-[20px] mt-[2px] flex h-[23px] flex-row justify-end border-b-[1px] border-[#828080] pb-[3px]'>
                                        <button
                                            className='h-[20px] w-[20px] bg-[#f6f3f3]'
                                            onClick={() => {
                                                setIntravenous((prev) => {
                                                    return [
                                                        ...prev,
                                                        {
                                                            type: '',
                                                            medication: '',
                                                            dose: '',
                                                            route: '',
                                                            frequency: '',
                                                            time: '',
                                                            signature: '',
                                                        },
                                                    ];
                                                });
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    <div className='ml-[15px] mr-[20px] mt-[2px] flex h-[23px] flex-row justify-end border-b-[1px] border-[#828080] pb-[3px]'></div>
                                )}
                            </div>
                        ))}
                    </CardHolder>
                </div>
                <div className='flex flex-row gap-[42px]'>
                    <CardHolder
                        path='capsule'
                        type='Medications'
                        name='Oral Medication'
                    >
                        {oral.map((med, index) => (
                            <div key={index}>
                                <EachMedication
                                    index={index}
                                    onChange={setOral}
                                />
                                {index === oral.length - 1 ? (
                                    <div className='ml-[15px] mr-[20px] mt-[2px] flex h-[23px] flex-row justify-end border-b-[1px] border-[#828080] pb-[3px]'>
                                        <button
                                            className='h-[20px] w-[20px] bg-[#f6f3f3]'
                                            onClick={() => {
                                                setOral((prev) => {
                                                    return [
                                                        ...prev,
                                                        {
                                                            type: '',
                                                            medication: '',
                                                            dose: '',
                                                            route: '',
                                                            frequency: '',
                                                            time: '',
                                                            signature: '',
                                                        },
                                                    ];
                                                });
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    <div className='ml-[15px] mr-[20px] mt-[2px] flex h-[23px] flex-row justify-end border-b-[1px] border-[#828080] pb-[3px]'></div>
                                )}
                            </div>
                        ))}
                    </CardHolder>
                    <CardHolder
                        path='claps'
                        type='Medications'
                        name='Tropical Medication'
                    >
                        {tropical.map((med, index) => (
                            <div key={index}>
                                <EachMedication
                                    index={index}
                                    onChange={setTropical}
                                />
                                {index === tropical.length - 1 ? (
                                    <div className='ml-[15px] mr-[20px] mt-[2px] flex h-[23px] flex-row justify-end border-b-[1px] border-[#828080] pb-[3px]'>
                                        <button
                                            className='h-[20px] w-[20px] bg-[#f6f3f3]'
                                            onClick={() => {
                                                setTropical((prev) => {
                                                    return [
                                                        ...prev,
                                                        {
                                                            type: '',
                                                            medication: '',
                                                            dose: '',
                                                            route: '',
                                                            frequency: '',
                                                            time: '',
                                                            signature: '',
                                                        },
                                                    ];
                                                });
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    <div className='ml-[15px] mr-[20px] mt-[2px] flex h-[23px] flex-row justify-end border-b-[1px] border-[#828080] pb-[3px]'></div>
                                )}
                            </div>
                        ))}
                    </CardHolder>
                </div>
                <div className='flex flex-row gap-[42px]'>
                    <CardHolder
                        path='drop'
                        type='Medications'
                        name='Drop Medication'
                    >
                        {drop.map((med, index) => (
                            <div key={index}>
                                <EachMedication
                                    index={index}
                                    onChange={setDrop}
                                />
                                {index === drop.length - 1 ? (
                                    <div className='ml-[15px] mr-[20px] mt-[2px] flex h-[23px] flex-row justify-end border-b-[1px] border-[#828080] pb-[3px]'>
                                        <button
                                            className='h-[20px] w-[20px] bg-[#f6f3f3]'
                                            onClick={() => {
                                                setDrop((prev) => {
                                                    return [
                                                        ...prev,
                                                        {
                                                            type: '',
                                                            medication: '',
                                                            dose: '',
                                                            route: '',
                                                            frequency: '',
                                                            time: '',
                                                            signature: '',
                                                        },
                                                    ];
                                                });
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    <div className='ml-[15px] mr-[20px] mt-[2px] flex h-[23px] flex-row justify-end border-b-[1px] border-[#828080] pb-[3px]'></div>
                                )}
                            </div>
                        ))}
                    </CardHolder>
                    <CardHolder
                        path='zip'
                        type='Medications'
                        name='Implant/ Patches Medication'
                    >
                        {implant.map((med, index) => (
                            <div key={index}>
                                <EachMedication
                                    index={index}
                                    onChange={setImplant}
                                />
                                {index === implant.length - 1 ? (
                                    <div className='ml-[15px] mr-[20px] mt-[2px] flex h-[23px] flex-row justify-end border-b-[1px] border-[#828080] pb-[3px]'>
                                        <button
                                            className='h-[20px] w-[20px] bg-[#f6f3f3]'
                                            onClick={() => {
                                                setImplant((prev) => {
                                                    return [
                                                        ...prev,
                                                        {
                                                            type: '',
                                                            medication: '',
                                                            dose: '',
                                                            route: '',
                                                            frequency: '',
                                                            time: '',
                                                            signature: '',
                                                        },
                                                    ];
                                                });
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    <div className='ml-[15px] mr-[20px] mt-[2px] flex h-[23px] flex-row justify-end border-b-[1px] border-[#828080] pb-[3px]'></div>
                                )}
                            </div>
                        ))}
                    </CardHolder>
                </div>
                <CardHolder
                    path='capsule'
                    type='Medications'
                    name='Suppositories Medication'
                >
                    {suppositories.map((med, index) => (
                        <div key={index}>
                            <EachMedication
                                index={index}
                                onChange={setSuppositories}
                            />
                            {index === suppositories.length - 1 ? (
                                <div className='ml-[15px] mr-[20px] mt-[2px] flex h-[23px] flex-row justify-end border-b-[1px] border-[#828080] pb-[3px]'>
                                    <button
                                        className='h-[20px] w-[20px] bg-[#f6f3f3]'
                                        onClick={() => {
                                            setSuppositories((prev) => {
                                                return [
                                                    ...prev,
                                                    {
                                                        type: '',
                                                        medication: '',
                                                        dose: '',
                                                        route: '',
                                                        frequency: '',
                                                        time: '',
                                                        signature: '',
                                                    },
                                                ];
                                            });
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                            ) : (
                                <div className='ml-[15px] mr-[20px] mt-[2px] flex h-[23px] flex-row justify-end border-b-[1px] border-[#828080] pb-[3px]'></div>
                            )}
                        </div>
                    ))}
                </CardHolder>
            </div>
            <div className='mb-[23px] mt-[23px]'>
                <SaveButton onClick={handleSubmit}></SaveButton>
            </div>
        </div>
    );
}
