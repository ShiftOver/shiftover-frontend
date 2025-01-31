'use client';
import React, { useEffect, useState } from 'react';
import { useDroppable } from '@dnd-kit/core';

export function MiniDroppable({ children, setIsOver, id, style = '' }: any) {
    const { isOver: isDroppableOver, setNodeRef } = useDroppable({
        id: id,
    });

    const [isMouseOver, setIsMouseOver] = useState(false);

    useEffect(() => {
        // Sync the `isMouseOver` state with `setIsOver` prop
        setIsOver(isMouseOver);
    }, [isMouseOver, setIsOver]);

    return (
        <div
            ref={setNodeRef}
            className={'relative p-[10px] ' + style}
            onMouseEnter={() => console.log('asfwf')}
            onMouseLeave={() => console.log('adwcaca')}
        >
            {children}
        </div>
    );
}
