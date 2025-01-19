'use client';
import React, { useState, useEffect } from 'react';
import { DndContext } from '@dnd-kit/core';

import { Droppable } from './Droppable';
import { Draggable } from './Draggable';

function App() {
    const [isDropped, setIsDropped] = useState(false); // Track if the draggable is dropped
    const [isDropped2, setIsDropped2] = useState(false); // Track if the draggable is dropped
    const [isOver, setIsOver] = useState(false); // Track if the draggable is over droppable
    const [isOver2, setIsOver2] = useState(false); // Track if the draggable is over droppable
    const [position, setPosition] = useState(null); // Track the position for draggable

    useEffect(() => {
        console.log(position);
    }, [position]);

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

    return (
        <div style={{ margin: 10 }}>
            <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
}

export default App;
