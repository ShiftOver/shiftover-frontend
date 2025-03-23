'use client';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Droppable } from './Droppable';
import {
    DndContext,
    DragOverlay,
    KeyboardSensor,
    MouseSensor,
    PointerSensor,
    pointerWithin,
    rectIntersection,
    TouchSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import { createSnapModifier } from '@dnd-kit/modifiers';
import {
    Cardiopulmonary,
    SpiritualCulturalNeeds,
    PersonalData,
    DischargePlanCare,
    EliminationReproductive,
    PainManagement,
    NutritionalMetabolism,
    Mobility,
    Skin,
    Neuromuscular,
    TeachingLearningNeeds,
} from './NursingAssessmentForm';
import {
    BloodPressure,
    FetalHeartRateMin,
    FluidIntakeOutput,
    HeartRateMin,
    NeurologicalFunction,
    OxygenSaturation,
    PainScore,
    Remark,
    RespirationMin,
    Temperature,
} from './MonitoringNursingRecord';
import {
    DropsMedication,
    ImplantPatchesMedication,
    InjectionsMedications,
    IntravenousInfusion,
    OralMedication,
    SuppositoriesMedication,
    TropicalMedication,
} from './Medications';
import ActivityFlow from './Nursing/ActivityFlow';
import DischargeForm from './Nursing/DischargeForm';
import FocusList from './Nursing/FocusList';
import FocusNote from './Nursing/FocusNote';
import {
    restrictToParentElement,
    restrictToVerticalAxis,
    restrictToWindowEdges,
} from '@dnd-kit/modifiers';
import { DroppableCollision } from './DroppableCollision';
import Image from 'next/image';

export type ChartReviewProps = {
    id: any;
};

interface ComponentProps {
    id: string;
    isOver?: boolean;
    isDropped?: boolean;
    isDrag?: string;
    isCollide?: boolean;
}

const COMPONENTS: Record<
    | 'cardiopulmonary'
    | 'nutritionalMetabolism'
    | 'neuromuscular'
    | 'spiritualCulturalNeeds'
    | 'dischargePlanCare'
    | 'personalData'
    | 'painManagement'
    | 'mobility'
    | 'skin'
    | 'teachingLearningNeeds'
    | 'bloodPressure'
    | 'fetalHeartRateMin'
    | 'fluidIntakeOutput'
    | 'heartRateMin'
    | 'neurologicalFunction'
    | 'oxygenSaturation'
    | 'painScore'
    | 'remark'
    | 'respirationMin'
    | 'temperature'
    | 'dropsMedication'
    | 'activityFlow'
    | 'eliminationReproductive'
    | 'implantPatchesMedication'
    | 'injectionsMedications'
    | 'intravenousInfusion'
    | 'oralMedication'
    | 'suppositoriesMedication'
    | 'tropicalMedication'
    | 'dischargeForm'
    | 'focusList'
    | 'focusNote',
    React.FC<ComponentProps>
> = {
    personalData: PersonalData,
    spiritualCulturalNeeds: SpiritualCulturalNeeds,
    nutritionalMetabolism: NutritionalMetabolism,
    skin: Skin,
    cardiopulmonary: Cardiopulmonary,
    neuromuscular: Neuromuscular,
    mobility: Mobility,
    eliminationReproductive: EliminationReproductive,
    painManagement: PainManagement,
    teachingLearningNeeds: TeachingLearningNeeds,
    dischargePlanCare: DischargePlanCare,
    bloodPressure: BloodPressure,
    fetalHeartRateMin: FetalHeartRateMin,
    fluidIntakeOutput: FluidIntakeOutput,
    heartRateMin: HeartRateMin,
    neurologicalFunction: NeurologicalFunction,
    oxygenSaturation: OxygenSaturation,
    painScore: PainScore,
    remark: Remark,
    respirationMin: RespirationMin,
    temperature: Temperature,
    activityFlow: ActivityFlow,
    implantPatchesMedication: ImplantPatchesMedication,
    injectionsMedications: InjectionsMedications,
    intravenousInfusion: IntravenousInfusion,
    oralMedication: OralMedication,
    suppositoriesMedication: SuppositoriesMedication,
    tropicalMedication: TropicalMedication,
    dischargeForm: DischargeForm,
    focusList: FocusList,
    focusNote: FocusNote,
    dropsMedication: DropsMedication,
};

const SECTION_MAP: Record<string, string> = {
    personalData: 'Nursing Assessment Form',
    spiritualCulturalNeeds: 'Nursing Assessment Form',
    nutritionalMetabolism: 'Nursing Assessment Form',
    dischargePlanCare: 'Nursing Assessment Form',
    neuromuscular: 'Nursing Assessment Form',
    eliminationReproductive: 'Nursing Assessment Form',
    painManagement: 'Nursing Assessment Form',
    skin: 'Nursing Assessment Form',
    mobility: 'Nursing Assessment Form',
    teachingLearningNeeds: 'Nursing Assessment Form',
    cardiopulmonary: 'Nursing Assessment Form',
    bloodPressure: 'Monitoring Nursing Record',
    fetalHeartRateMin: 'Monitoring Nursing Record',
    fluidIntakeOutput: 'Monitoring Nursing Record',
    heartRateMin: 'Monitoring Nursing Record',
    neurologicalFunction: 'Monitoring Nursing Record',
    oxygenSaturation: 'Monitoring Nursing Record',
    painScore: 'Monitoring Nursing Record',
    remark: 'Monitoring Nursing Record',
    respirationMin: 'Monitoring Nursing Record',
    temperature: 'Monitoring Nursing Record',
    dropsMedication: 'Medications',
    implantPatchesMedication: 'Medications',
    tropicalMedication: 'Medications',
    injectionsMedications: 'Medications',
    intravenousInfusion: 'Medications',
    oralMedication: 'Medications',
    suppositoriesMedication: 'Medications',
    activityFlow: 'Nursing',
    dischargeForm: 'Nursing',
    focusList: 'Nursing',
    focusNote: 'Nursing',
};

export default function ChartReview({ id }: ChartReviewProps) {
    const [open, setOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [isButtonFixed, setIsButtonFixed] = useState(false);
    const [isOver, setIsOver] = useState(false);
    const [isCollide, setIsCollide] = useState(false);
    const [isDrag, setIsDrag] = useState('');
    const [isOut, setIsOut] = useState(false);
    const [droppedComponents, setDroppedComponents] = useState<{
        [key: string]: { left: number; top: number };
    }>({});
    const sensors = useSensors(
        // useSensor(MouseSensor)
        useSensor(TouchSensor)
        // useSensor(KeyboardSensor),
        // useSensor(PointerSensor)
    );
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [initialScrollY, setInitialScrollY] = useState(0);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [sidebarScrollY, setSidebarScrollY] = useState(0);
    useEffect(() => {
        const handleWindowScroll = () => {
            const scrollY =
                window.scrollY || document.documentElement.scrollTop;
            setIsFixed(scrollY > 130);
            setIsButtonFixed(scrollY > 150);
        };

        window.addEventListener('scroll', handleWindowScroll);

        return () => {
            window.removeEventListener('scroll', handleWindowScroll);
        };
    }, []);

    const gridSize = 20; // pixels
    const snapToGridModifier = createSnapModifier(gridSize);

    function handleDragStart(event: any) {
        setIsDrag(event.active.id);
        const target = document.querySelector(
            `[data-draggable-id="${event.active.id}"]`
        );
        if (sidebarRef.current && target) {
            setSidebarScrollY(sidebarRef.current.scrollTop);
            const rect = target.getBoundingClientRect(); // Get actual bounding box

            if (event.activatorEvent?.targetTouches?.length > 0) {
                setOffsetX(
                    event.activatorEvent.targetTouches[0].clientX - rect.left
                );
                setOffsetY(
                    event.activatorEvent.targetTouches[0].clientY - rect.top
                );
            } else {
            }

            // setOffsetX(event.activatorEvent.clientX - rect.left);
            // setOffsetY(event.activatorEvent.clientY - rect.top);
        }
    }

    function handleDragMove(event: any) {
        if (event.collisions.length > 1 && !isCollide) {
            setIsCollide(true);
        } else if (event.collisions.length == 1 && isCollide) {
            setIsCollide(false);
        }
        const { x, y } = event.delta;
        if (
            event.active.id in droppedComponents &&
            //     (Math.ceil(
            //     (droppedComponents[event.active.id].left + x) / gridSize
            // ) *
            //     gridSize <
            //     0
            (droppedComponents[event.active.id].left + x < 0 ||
                // Math.ceil(
                //     (droppedComponents[event.active.id].top + y) / gridSize
                // ) *
                //     gridSize <
                //     0)
                droppedComponents[event.active.id].top + y < 0)
        ) {
            setIsOut(true);
        } else {
            setIsOut(false);
        }
    }

    function handleDragEnd(event: any) {
        const currentScrollY =
            window.scrollY || document.documentElement.scrollTop;

        if (event.over && event.over.id == 'big') {
            const { x, y } = event.delta;
            if (!(event.active.id in droppedComponents)) {
                if (!isCollide) {
                    setDroppedComponents((prev) => ({
                        ...prev,
                        [event.active.id]: {
                            left:
                                // event.activatorEvent.clientX +
                                event.activatorEvent.targetTouches[0].clientX +
                                x -
                                event.over.rect.left -
                                offsetX,
                            top:
                                // event.activatorEvent.clientY +
                                event.activatorEvent.targetTouches[0].clientY +
                                y -
                                event.over.rect.top -
                                offsetY -
                                currentScrollY +
                                sidebarScrollY,
                        },
                    }));
                }
            } else if (!isOut) {
                if (!isCollide) {
                    setDroppedComponents((prev) => ({
                        ...prev,
                        [event.active.id]: {
                            left:
                                // Math.ceil(
                                //     ((prev[event.active.id]?.left || 0) + x) /
                                //         gridSize
                                // ) * gridSize,
                                (prev[event.active.id]?.left || 0) + x,
                            top:
                                // Math.ceil(
                                //     ((prev[event.active.id]?.top || 0) + y) /
                                //         gridSize
                                // ) * gridSize,
                                (prev[event.active.id]?.top || 0) + y,
                        },
                    }));
                }
            } else {
                setDroppedComponents((prev) => {
                    const updated = { ...prev };
                    delete updated[event.active.id];
                    return updated;
                });
            }
        } else {
            if (!isCollide && event.active.id in droppedComponents) {
                setDroppedComponents((prev) => {
                    const updated = { ...prev };
                    delete updated[event.active.id];
                    return updated;
                });
            }
        }
        setIsDrag('');
        setIsOver(false);
        setIsCollide(false);
    }

    useEffect(() => {
        if (isOver) {
            setOpen(false);
        }
    }, [isOver]);

    return (
        <div className='relative'>
            <DndContext
                onDragStart={handleDragStart}
                onDragMove={handleDragMove}
                onDragEnd={handleDragEnd}
                // modifiers={[snapToGridModifier]}
                collisionDetection={rectIntersection}
                // autoScroll={false}
                sensors={sensors}
            >
                <div className='h-[2800px]'>
                    <Droppable
                        setIsOver={setIsOver}
                        id='big'
                        collide={isCollide}
                        style={
                            'h-full bg-[#111111] ' +
                            (!open ? 'w-full' : 'w-[400px]')
                        }
                    >
                        <div className='relative'>
                            {Object.entries(droppedComponents).map(
                                ([key, position]) => {
                                    const Component =
                                        COMPONENTS[
                                            key as keyof typeof COMPONENTS
                                        ];
                                    return (
                                        Component &&
                                        isDrag !== key && (
                                            <div
                                                key={key}
                                                className='absolute'
                                                style={{
                                                    left: `${position.left}px`,
                                                    top: `${position.top}px`,
                                                }}
                                            >
                                                <DroppableCollision id={key}>
                                                    <Component
                                                        id={key}
                                                        isOver={isOver}
                                                        isDropped={true}
                                                    />
                                                </DroppableCollision>
                                            </div>
                                        )
                                    );
                                }
                            )}
                        </div>
                    </Droppable>
                </div>
                {open ? (
                    <div
                        className={`${
                            isFixed ? 'fixed top-0' : 'absolute top-0'
                        } right-0 z-40 h-full max-h-screen w-[321px] overflow-y-auto rounded-l-[39px] bg-white shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] transition-all duration-300`}
                        ref={sidebarRef}
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className='ml-[25px] mt-[28px] flex h-[42px] w-[42px] items-center justify-center rounded-[200px] bg-shiftover-blue shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'
                        >
                            <Image
                                src='/assets/minus.svg'
                                alt='minus'
                                className='fill-blue-500'
                                width={24}
                                height={24}
                            />
                        </button>
                        <div className='ml-[15px] mt-[41px] text-heavyname'>
                            {[
                                'Nursing Assessment Form',
                                'Monitoring Nursing Record',
                                'Medications',
                                'Nursing',
                            ].map((section) => (
                                <div key={section} className='z-50 mb-[23px]'>
                                    <div className='mb-[11px]'>{section}</div>
                                    {Object.keys(COMPONENTS).map((key) =>
                                        SECTION_MAP[key] === section &&
                                        !droppedComponents[key]
                                            ? React.createElement(
                                                  COMPONENTS[
                                                      key as keyof typeof COMPONENTS
                                                  ],
                                                  {
                                                      id: key,
                                                      isOver: isOver,
                                                      isDropped: false,
                                                  }
                                              )
                                            : null
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => setOpen(true)}
                        className={`${
                            isButtonFixed
                                ? 'fixed right-[25px] top-[20px]'
                                : 'absolute right-[25px] top-[25px]'
                        } flex h-[42px] w-[42px] items-center justify-center rounded-[200px] bg-shiftover-blue shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]`}
                    >
                        <Image
                            src='/assets/plus.svg'
                            alt='plus'
                            className='fill-blue-500'
                            width={24}
                            height={24}
                        />
                    </button>
                )}
                <DragOverlay>
                    {isDrag ? (
                        React.createElement(
                            COMPONENTS[isDrag as keyof typeof COMPONENTS],
                            {
                                id: isDrag,
                                isOver: droppedComponents[isDrag]
                                    ? true
                                    : isOver,
                                isDropped: false,
                                isCollide: isCollide,
                            }
                        )
                    ) : (
                        <></>
                    )}
                </DragOverlay>
            </DndContext>
        </div>
    );
}
