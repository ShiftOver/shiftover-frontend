'use client';
import React, { useEffect } from 'react';
import { useDroppable } from '@dnd-kit/core';

export type DroppableSkinProps = {
    children: React.ReactNode;
    id: any;
    style?: any;
};

export function DroppableSkin({
    children,
    id,
    style = '',
}: DroppableSkinProps) {
    const { setNodeRef } = useDroppable({
        id: id,
    });

    return (
        <div ref={setNodeRef} className={'relative ' + style} id={id}>
            {children}
        </div>
    );
}
