'use client';
import React, { useEffect } from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable({ children, setIsOver, id, style = '' }: any) {
    const { isOver, setNodeRef } = useDroppable({
        id: id,
    });

    useEffect(() => {
        setIsOver(isOver);
    }, [isOver, setIsOver]);

    return (
        <div ref={setNodeRef} className={'relative p-[10px] ' + style}>
            {children}
        </div>
    );
}
