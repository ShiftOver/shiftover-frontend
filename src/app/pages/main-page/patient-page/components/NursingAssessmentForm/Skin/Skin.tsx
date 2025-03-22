import { useEffect, useState } from 'react';
import CardHolder from '../../CardHolder';
import SaveButton from '../../SaveButton';
import RadioButton from '../../Radiobutton';
import TextInput from '../../TextInput';
import { DndContext } from '@dnd-kit/core';
import { DroppableSkin } from './DroppableSkin';
import { DraggableSkin } from './DraggableSkin';

export type SkinProps = {
    id: any;
};

export default function Skin({ id }: SkinProps) {
    const [age, setAge] = useState('Adult');
    const [sex, setSex] = useState('Male');
    const [temperature, setTemperature] = useState('');
    const [moisture, setMoisture] = useState('');
    const [dermal, setDermal] = useState('');
    const [color, setColor] = useState('');
    const [colorCyanosis, setColorCyanosis] = useState('');
    const [turgor, setTurgor] = useState('');
    const [skinRadiation, setSkinRadiation] = useState('');
    const [pressureStage, setPressureStage] = useState('');
    const [initialScrollY, setInitialScrollY] = useState(0);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = { droppedItems };
        console.log(formData);
    };
    const [droppedItems, setDroppedItems] = useState<
        Record<
            string,
            { label: string; x: number; y: number; droppableId: string }
        >
    >({});

    function handleDragStart(event: any) {
        if (event.activatorEvent) {
            setInitialScrollY(
                window.scrollY || document.documentElement.scrollTop
            );
        }
        event.activatorEvent.offsetX;
        event.activatorEvent.offsetY;
    }

    function handleDragEnd(event: any) {
        const { active, over, delta, activatorEvent } = event;
        if (event.active.id in droppedItems) {
            if (
                droppedItems[event.active.id].droppableId != over?.id ||
                !over
            ) {
                setDroppedItems((prev) => {
                    const updated = { ...prev };
                    delete updated[event.active.id];
                    return updated;
                });
            } else {
                setDroppedItems((prev) => {
                    return {
                        ...prev,
                        [event.active.id]: {
                            label: prev[event.active.id].label,
                            x: (prev[event.active.id]?.x || 0) + delta.x,
                            y: (prev[event.active.id]?.y || 0) + delta.y,
                            droppableId: over.id,
                        },
                    };
                });
            }
        } else if (over) {
            const currentScrollY =
                window.scrollY || document.documentElement.scrollTop;

            // Calculate the difference in scroll position (can be positive or negative)
            const scrollDiffY = currentScrollY - initialScrollY;

            const x =
                activatorEvent.clientX +
                delta.x -
                over.rect.left -
                activatorEvent.offsetX;
            const y =
                activatorEvent.clientY +
                delta.y -
                over.rect.top -
                scrollDiffY -
                activatorEvent.offsetY;
            setDroppedItems((prev) => {
                const existingNumbers = Object.keys(prev)
                    .filter((key) => key.startsWith(active.id))
                    .map((key) => parseInt(key.replace(active.id, ''), 10))
                    .filter((num) => !isNaN(num)) // Remove NaN values
                    .sort((a, b) => a - b); // Sort in ascending order

                // Find the smallest missing number
                let newNumber = 1;
                for (let i = 0; i < existingNumbers.length; i++) {
                    if (existingNumbers[i] !== i + 1) {
                        newNumber = i + 1;
                        break;
                    }
                    newNumber = existingNumbers.length + 1;
                }

                const newId = `${active.id}${newNumber}`;

                return {
                    ...prev,
                    [newId]: {
                        label:
                            draggableItems.find((item) => item.id === active.id)
                                ?.label || '',
                        x: x,
                        y: y,
                        droppableId: over.id as string,
                    },
                };
            });
        }
    }

    const draggableItems = [
        { id: 'A', label: 'A', fullName: 'Abrasion' },
        { id: 'B', label: 'B', fullName: 'Burn' },
        { id: 'C', label: 'C', fullName: 'Contusion' },
        { id: 'E', label: 'E', fullName: 'Ecchymosis' },
        { id: 'H', label: 'H', fullName: 'Hematoma' },
        { id: 'L', label: 'L', fullName: 'Laceration' },
        { id: 'M', label: 'M', fullName: 'Mass' },
        { id: 'P', label: 'P', fullName: 'Petechiae' },
        { id: 'PS', label: 'PS', fullName: 'Pressure sore Stage' },
        { id: 'R', label: 'R', fullName: 'Rash' },
        { id: 'S', label: 'S', fullName: 'Suture' },
        { id: 'Sc', label: 'Sc', fullName: 'Scar' },
        { id: 'SR', label: 'SR', fullName: 'Skin reaction from radiation' },
    ];

    useEffect(() => {
        setDroppedItems({});
    }, [sex, age]);

    return (
        <div>
            <div className='relative mt-[12.98px] flex h-[26px] flex-row text-subheader text-shiftover-oldgreen'>
                <button
                    className='w-[105.08px] shadow-[0_1.27px_1.27px_0px_rgba(0,0,0,0.25)]'
                    onClick={() => {
                        setAge('Adult');
                    }}
                >
                    Adult
                    {age == 'Adult' ? (
                        <div className='absolute mt-[3.2px] w-[105.08px] rounded-[1.9px] border-[1.9px] border-solid border-[rgba(139,185,191,1)]'></div>
                    ) : (
                        <></>
                    )}
                </button>
                <button
                    className='w-[105.08px] shadow-[0_1.27px_1.27px_0px_rgba(0,0,0,0.25)]'
                    onClick={() => {
                        setAge('Pediatric');
                    }}
                >
                    Pediatric
                    {age == 'Pediatric' ? (
                        <div className='absolute mt-[3.2px] w-[105px] rounded-[1.9px] border-[1.9px] border-solid border-[rgba(139,185,191,1)]'></div>
                    ) : (
                        <></>
                    )}
                </button>
            </div>
            <div className='ml-[27px] mt-[23px] justify-items-center'>
                <div className='flex w-full flex-col justify-items-start gap-[31px]'>
                    <CardHolder
                        path='human'
                        type='NurseAssessmentForm'
                        name='Skin'
                    >
                        <div className='flex w-[1000px] flex-col gap-[12px]'>
                            <div className='ml-[14px] flex flex-row gap-[20px]'>
                                <p>Dermal Assessment:</p>
                                <RadioButton
                                    value={dermal}
                                    onChange={setDermal}
                                    name='Dermal'
                                    placeHolder='WNL'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={dermal}
                                    onChange={setDermal}
                                    name='Dermal'
                                    placeHolder='Abnormal: Use letter to indicate type and location on diagram'
                                    style='ml-[6px]'
                                ></RadioButton>
                            </div>
                            <div className='ml-[14px] flex flex-row gap-[20px]'>
                                <RadioButton
                                    value={dermal}
                                    onChange={setDermal}
                                    name='Dermal'
                                    placeHolder='Stuporous (responsive only to noxious stimuli)'
                                    style='ml-[6px]'
                                ></RadioButton>
                                <RadioButton
                                    value={dermal}
                                    onChange={setDermal}
                                    name='Dermal'
                                    placeHolder='Comatose (not responsive to noxious stimuli)'
                                    style='ml-[6px]'
                                ></RadioButton>
                            </div>
                            <div className='flex flex-row'>
                                <DndContext
                                    onDragEnd={handleDragEnd}
                                    onDragStart={handleDragStart}
                                    autoScroll={true}
                                >
                                    <div className='flex w-[706px] flex-row'>
                                        {age == 'Adult' ? (
                                            <div className='flex flex-col'>
                                                <button
                                                    className={`h-[23px] w-[53px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${sex == 'Male' ? 'bg-[#ADDCE3] text-[#ffffff]' : 'bg-[#ffffff]'}`}
                                                    onClick={() => {
                                                        setSex('Male');
                                                    }}
                                                >
                                                    Male
                                                </button>
                                                <button
                                                    className={`h-[23px] w-[70px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${sex == 'Female' ? 'bg-[#ADDCE3] text-[#ffffff]' : 'bg-[#ffffff]'}`}
                                                    onClick={() => {
                                                        setSex('Female');
                                                    }}
                                                >
                                                    Female
                                                </button>
                                            </div>
                                        ) : (
                                            <div className='flex flex-col'>
                                                <button
                                                    className={`h-[23px] w-[46px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${sex == 'Male' ? 'bg-[#ADDCE3] text-[#ffffff]' : 'bg-[#ffffff]'}`}
                                                    onClick={() => {
                                                        setSex('Male');
                                                    }}
                                                >
                                                    Boy
                                                </button>
                                                <button
                                                    className={`h-[23px] w-[45px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${sex == 'Female' ? 'bg-[#ADDCE3] text-[#ffffff]' : 'bg-[#ffffff]'}`}
                                                    onClick={() => {
                                                        setSex('Female');
                                                    }}
                                                >
                                                    Girl
                                                </button>
                                            </div>
                                        )}
                                        <div className='flex w-[636px] flex-row justify-center gap-[110px]'>
                                            <div className='relative flex w-[636px] flex-row justify-center gap-[110px]'>
                                                {/* Front View */}
                                                <div className='relative'>
                                                    <DroppableSkin
                                                        id='DroppableSkinFront'
                                                        style='content-center'
                                                    >
                                                        <img
                                                            src={`/assets/Front${age + sex}.svg`}
                                                            alt={`Front${age + sex}`}
                                                            className='z-1'
                                                        />
                                                    </DroppableSkin>
                                                    {Object.entries(
                                                        droppedItems
                                                    )
                                                        .filter(
                                                            ([id, item]) =>
                                                                item.droppableId ===
                                                                'DroppableSkinFront'
                                                        )
                                                        .map(([id, item]) => (
                                                            <div
                                                                key={id}
                                                                className='z-5 absolute flex items-center justify-center text-white'
                                                                style={{
                                                                    left: `${item.x}px`,
                                                                    top: `${item.y}px`,
                                                                    zIndex: 10,
                                                                }}
                                                            >
                                                                <DraggableSkin
                                                                    id={id}
                                                                >
                                                                    <div className='h-[15px] w-[15px] content-center rounded-[15px] bg-[#1FA9C4] text-carddescription text-[#ffffff]'>
                                                                        {
                                                                            item.label
                                                                        }
                                                                    </div>
                                                                </DraggableSkin>
                                                            </div>
                                                        ))}
                                                </div>

                                                {/* Back View */}
                                                <div className='relative'>
                                                    <DroppableSkin
                                                        id='DroppableSkinBack'
                                                        style='content-center'
                                                    >
                                                        <img
                                                            src={`/assets/Back${age + sex}.svg`}
                                                            alt={`Back${age + sex}`}
                                                            className='z-1'
                                                        />
                                                    </DroppableSkin>
                                                    {Object.entries(
                                                        droppedItems
                                                    )
                                                        .filter(
                                                            ([id, item]) =>
                                                                item.droppableId ===
                                                                'DroppableSkinBack'
                                                        )
                                                        .map(([id, item]) => (
                                                            <div
                                                                key={id}
                                                                className='z-5 absolute flex items-center justify-center text-white'
                                                                style={{
                                                                    left: `${item.x}px`,
                                                                    top: `${item.y}px`,
                                                                    zIndex: 10,
                                                                }}
                                                            >
                                                                <DraggableSkin
                                                                    id={id}
                                                                >
                                                                    <div className='h-[15px] w-[15px] content-center rounded-[15px] bg-[#1FA9C4] text-carddescription text-[#ffffff]'>
                                                                        {
                                                                            item.label
                                                                        }
                                                                    </div>
                                                                </DraggableSkin>
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-[14px] flex flex-col gap-[12px]'>
                                        {draggableItems.map((item) => (
                                            <div
                                                key={item.id}
                                                className='flex flex-row gap-[3px]'
                                            >
                                                <DraggableSkin id={item.id}>
                                                    <div className='h-[15px] w-[15px] content-center rounded-[15px] bg-[#1FA9C4] text-carddescription text-[#ffffff]'>
                                                        {item.label}
                                                    </div>
                                                </DraggableSkin>
                                                <p>{item.fullName}</p>
                                                {item.id === 'PS' && (
                                                    <TextInput
                                                        value={pressureStage}
                                                        onChange={
                                                            setPressureStage
                                                        }
                                                        style={
                                                            'w-[35px] ml-[3px]'
                                                        }
                                                    />
                                                )}
                                            </div>
                                        ))}
                                        <div className='flex flex-row'>
                                            <TextInput
                                                value={skinRadiation}
                                                onChange={setSkinRadiation}
                                                style={'w-[107px]'}
                                            />
                                            <p>ostomy</p>
                                        </div>
                                    </div>
                                </DndContext>
                            </div>
                            <div className='ml-[14px] flex flex-row gap-[30px]'>
                                <div className='flex flex-col gap-[11px]'>
                                    <p>Temperature:</p>
                                    <RadioButton
                                        value={temperature}
                                        onChange={setTemperature}
                                        name='Temperature'
                                        placeHolder='Warm'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={temperature}
                                        onChange={setTemperature}
                                        name='Temperature'
                                        placeHolder='Hot'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={temperature}
                                        onChange={setTemperature}
                                        name='Temperature'
                                        placeHolder='Cool'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                </div>
                                <div className='flex flex-col gap-[11px]'>
                                    <p>Moisture:</p>
                                    <RadioButton
                                        value={moisture}
                                        onChange={setMoisture}
                                        name='Moisture'
                                        placeHolder='Moist'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={moisture}
                                        onChange={setMoisture}
                                        name='Moisture'
                                        placeHolder='Dry'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                </div>
                                <div className='flex flex-col gap-[11px]'>
                                    <p>Color:</p>
                                    <RadioButton
                                        value={color}
                                        onChange={setColor}
                                        name='Color'
                                        placeHolder='Normal'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={color}
                                        onChange={setColor}
                                        name='Color'
                                        placeHolder='Pale'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={color}
                                        onChange={setColor}
                                        name='Color'
                                        placeHolder='Cyanosis'
                                        style='ml-[6px]'
                                    >
                                        <TextInput
                                            placeHolder='Cyanosis'
                                            value={colorCyanosis}
                                            onChange={setColorCyanosis}
                                            disabled={color !== 'Cyanosis'}
                                            style={'w-[87px]'}
                                        ></TextInput>
                                    </RadioButton>
                                    <RadioButton
                                        value={color}
                                        onChange={setColor}
                                        name='Color'
                                        placeHolder='Jaundice'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                </div>
                                <div className='flex flex-col gap-[11px]'>
                                    <p>Turgor:</p>
                                    <RadioButton
                                        value={turgor}
                                        onChange={setTurgor}
                                        name='Turgor'
                                        placeHolder='Good'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                    <RadioButton
                                        value={turgor}
                                        onChange={setTurgor}
                                        name='Turgor'
                                        placeHolder='Poor'
                                        style='ml-[6px]'
                                    ></RadioButton>
                                </div>
                            </div>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='human'
                        type='NurseAssessmentForm'
                        name='Pressure Ulcer Staging'
                    >
                        <div className='ml-[14px] flex w-[986px] flex-col gap-[12px]'>
                            <p>
                                Stage 1 Persistent redness (in lightly pigmented
                                skin). Persistent red, blue, or purple hues (in
                                dark skin)
                            </p>
                            <p>
                                Stage 2 Skin loss: Abrasion, blister or shallow
                                crater.
                            </p>
                            <p>
                                Stage 3 Deep crater: not extend down through
                                underlying fascia.
                            </p>
                            <p>
                                Stage 4 Deep Crater: damage to muscle, bone or
                                supporting structures.
                            </p>
                        </div>
                    </CardHolder>
                </div>
                <div className='mb-[23px] mt-[23px]'>
                    <SaveButton onClick={handleSubmit}></SaveButton>
                </div>
            </div>
        </div>
    );
}
