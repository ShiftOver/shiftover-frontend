'use client';
import React, { useEffect } from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable({
    children,
    setIsOver,
    setIsDropped,
    setPosition,
    id,
}: any) {
    const { isOver, setNodeRef } = useDroppable({
        id: id,
    });

    useEffect(() => {
        setIsOver(isOver);
        if (isOver) {
            setPosition([20, 20]); // Example position when hovering over
        } else {
            setPosition(null); // Reset position when not hovering
        }
    }, [isOver, setIsOver, setPosition]);

    const style: React.CSSProperties = {
        width: 70,
        height: 70,
        backgroundColor: 'red',
        padding: 10,
        zIndex: 1, // Ensure droppable is behind draggable
        position: 'relative', // Explicitly cast to string
    };

    return (
        <div ref={setNodeRef} style={style}>
            {children}
        </div>
    );
}
