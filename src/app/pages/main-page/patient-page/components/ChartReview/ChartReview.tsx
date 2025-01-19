'use client';
import React, { useState, useEffect } from 'react';
import { DndContext } from '@dnd-kit/core';

import { Droppable } from './Droppable';
import { Draggable } from './Draggable';
export type ChartReviewProps = {
    id: any;
};

export default function ChartReview({ id }: ChartReviewProps) {
    const [open, setOpen] = useState(false);
    const [isDropped, setIsDropped] = useState(false); // Track if the draggable is dropped
    const [isDropped2, setIsDropped2] = useState(false); // Track if the draggable is dropped
    const [isOver, setIsOver] = useState(false); // Track if the draggable is over droppable
    const [isOver2, setIsOver2] = useState(false); // Track if the draggable is over droppable
    const [position, setPosition] = useState(null); // Track the position for draggable

    const draggableMarkup = (
        <Draggable
            id='Type'
            isOver={isOver}
            isDropped={isDropped}
            position={position}
        >
            {isDropped || isOver ? (
                <div className={'h-[8rem] w-[6rem] rounded-21 bg-[#50d71e]'}>
                    <div>Name: Tassanai</div>
                    <div>Surname: Wijitjunyakul</div>
                </div>
            ) : (
                <div
                    className={'h-[3rem] w-[3rem] rounded-21 bg-[#adc213]'}
                ></div>
            )}
        </Draggable>
    );
    function handleDragStart() {
        // Reset the dragging state when the drag starts
        setIsDropped(false); // Reset dropped state to initial
    }

    function handleDragEnd(event: any) {
        // If the item was dropped inside the droppable
        if (event.over && event.over.id) {
            console.log(event.over.id);
            setIsDropped(true);
        } else {
            // Reset everything to initial if dropped outside
            setIsDropped(false);
        }
    }
    return (
        <div className='relative'>
            <button
                onClick={() => setOpen(!open)}
                className='fixed right-[25px] top-[163px] flex h-[42px] w-[42px] items-center justify-center rounded-[200px] bg-shiftover-blue shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'
            >
                <img
                    src='/assets/plus.svg'
                    alt='plus'
                    className='fill-blue-500 h-6 w-6'
                />
            </button>
            <div className='h-[1000px]'>
                <div style={{ margin: 10 }}>
                    <DndContext
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                    >
                        <div className='flex flex-row items-start'>
                            <Droppable
                                setIsOver={setIsOver}
                                setIsDropped={setIsDropped}
                                setPosition={setPosition}
                                id='1'
                            >
                                {isDropped ? draggableMarkup : ''}
                            </Droppable>
                            <div style={{ marginLeft: 10 }}>
                                {!isDropped ? draggableMarkup : null}
                            </div>
                        </div>
                    </DndContext>
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
                        <div>Monitoring Nursing Record</div>
                        <div>Medications</div>
                        <div>Nursing</div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
