'use client';
import React, { useEffect } from 'react';
import { useDroppable } from '@dnd-kit/core';

export type DropNoteProps = {
    children: React.ReactNode;
    id: any;
    style?: any;
};

export function DropNote({ children, id, style = '' }: DropNoteProps) {
    const { isOver, setNodeRef } = useDroppable({
        id: id,
    });

    useEffect(() => {}, [isOver]);

    return (
        <div ref={setNodeRef} className={'absolute ' + style}>
            {children}
        </div>
    );
}
