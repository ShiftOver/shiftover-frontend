'use client';
import React, { useEffect } from 'react';
import { useDroppable } from '@dnd-kit/core';

export type SkinProps = {
    children: React.ReactNode;
    setIsOver: any;
    collide?: any;
    id: any;
    style: any;
};

export function Droppable({
    children,
    setIsOver,
    collide,
    id,
    style = '',
}: SkinProps) {
    const { isOver, setNodeRef } = useDroppable({
        id: id,
    });

    useEffect(() => {
        if (collide) {
            setIsOver(true);
        } else {
            setIsOver(isOver);
        }
    }, [collide, isOver, setIsOver]);

    return (
        <div ref={setNodeRef} className={'relative ' + style} id={id}>
            {children}
        </div>
    );
}
