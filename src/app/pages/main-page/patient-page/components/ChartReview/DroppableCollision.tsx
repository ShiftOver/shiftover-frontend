'use client';
import React, { useEffect } from 'react';
import { useDroppable } from '@dnd-kit/core';

export function DroppableCollision({ children, id, style = '' }: any) {
    const { isOver, setNodeRef } = useDroppable({
        id: id,
    });

    return (
        <div ref={setNodeRef} className={'relative ' + style}>
            {children}
        </div>
    );
}
