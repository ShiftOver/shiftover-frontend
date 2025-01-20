'use client';
import React, { useState, useEffect } from 'react';
import { DndContext } from '@dnd-kit/core';

import { Droppable } from './Droppable';
import { Draggable } from './Draggable';
import SpiritualCulturalNeeds from './NursingAssessmentForm/SpiritualCulturalNeeds';
import NutritionalMetabolism from './NursingAssessmentForm/NutritionalMetabolism';
import Cardiopulmonary from './NursingAssessmentForm/Cardiopulmonary';
export type ChartReviewProps = {
    id: any;
};

export default function ChartReview({ id }: ChartReviewProps) {
    const [open, setOpen] = useState(false);
    const [isOver, setIsOver] = useState(false); // Track if the draggable is over droppable
    const [nurseAssessmentForm, setNurseAssessmentForm] = useState<{
        [key: string]: any;
    }>({
        SpiritualCulturalNeeds: false,
        NutritionalMetabolism: false,
        Cardiopulmonary: false,
    });

    const changeState = (id: any, value: any) => {
        setNurseAssessmentForm((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };
    const [notAvailable, setNotAvailable] = useState(<></>);
    const [available, setAvailable] = useState(<></>);
    useEffect(() => {
        const availableList = [];
        const notAvailableList = [];
        for (let key in nurseAssessmentForm) {
            if (nurseAssessmentForm[key]) {
                notAvailableList.push(find(key));
            } else {
                availableList.push(find(key));
            }
        }
        setAvailable(<div>{availableList}</div>);
        setNotAvailable(<div>{notAvailableList}</div>);
    }, [nurseAssessmentForm, isOver]);

    const find = (id: any) => {
        switch (id) {
            case 'SpiritualCulturalNeeds':
                return (
                    <SpiritualCulturalNeeds
                        id='SpiritualCulturalNeeds'
                        isOver={isOver}
                        isDropped={
                            nurseAssessmentForm['SpiritualCulturalNeeds']
                        }
                    ></SpiritualCulturalNeeds>
                );
            case 'NutritionalMetabolism':
                return (
                    <NutritionalMetabolism
                        id='NutritionalMetabolism'
                        isOver={isOver}
                        isDropped={nurseAssessmentForm['NutritionalMetabolism']}
                    ></NutritionalMetabolism>
                );
            case 'Cardiopulmonary':
                return (
                    <Cardiopulmonary
                        id='Cardiopulmonary'
                        isOver={isOver}
                        isDropped={nurseAssessmentForm['Cardiopulmonary']}
                    ></Cardiopulmonary>
                );
        }
    };

    function handleDragStart(event: any) {
        changeState(event.active.id, false);
    }

    function handleDragEnd(event: any) {
        if (event.over && event.over.id) {
            changeState(event.active.id, true);
        } else {
            changeState(event.active.id, false);
        }
    }

    useEffect(() => {
        isOver ? setOpen(false) : setOpen(true);
    }, [isOver]);

    return (
        <div className='relative'>
            <button
                onClick={() => setOpen(!open)}
                className='fixed right-[25px] top-[163px] z-10 flex h-[42px] w-[42px] items-center justify-center rounded-[200px] bg-shiftover-blue shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'
            >
                <img
                    src='/assets/plus.svg'
                    alt='plus'
                    className='fill-blue-500 h-6 w-6'
                />
            </button>
            <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                <div className='h-[1000px]'>
                    <div style={{ margin: 10 }}>
                        <div className='flex flex-row items-start'>
                            <Droppable
                                setIsOver={setIsOver}
                                id='1'
                                style={!open ? 'w-full' : 'w-[900px]'}
                            >
                                {notAvailable}
                            </Droppable>
                            <div style={{ marginLeft: 10 }}></div>
                        </div>
                    </div>
                </div>
                {open ? (
                    <div className='absolute right-[0px] top-[0px] z-50 h-[697px] w-[321px] rounded-l-[39px] bg-white shadow-[0_2px_2px_0_rgba(0,0,0,0.25)]'>
                        <button
                            onClick={() => setOpen(!open)}
                            className='ml-[25px] mt-[28px] flex h-[42px] w-[42px] items-center justify-center rounded-[200px] bg-shiftover-blue shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'
                        >
                            <img
                                src='/assets/minus.svg'
                                alt='minus'
                                className='fill-blue-500 h-6 w-6'
                            />
                        </button>
                        <div className='ml-[15px] mt-[41px] text-heavyname'>
                            <div>Nursing Assessment Form</div>
                            {available}
                            <div>Monitoring Nursing Record</div>
                            <div>Medications</div>
                            <div>Nursing</div>
                        </div>
                    </div>
                ) : (
                    <>{available}</>
                )}
            </DndContext>
        </div>
    );
}
