'use client';
import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export type DropNoteProps = {
    children: React.ReactNode;
    id: any;
    style?: any;
};

export function DropNote({ children, id, style = '' }: DropNoteProps) {
    const { setNodeRef } = useDroppable({
        id: id,
    });

    return (
        <div ref={setNodeRef} className={'absolute ' + style}>
            {children}
        </div>
    );
}
