'use client';
import React, { useRef } from 'react';
import { useDraggable } from '@dnd-kit/core';

export function DraggableSkin(props: any) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
    });

    const style = {
        ...(transform
            ? {
                  transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
              }
            : {}),
    };

    return (
        <button
            style={style}
            {...listeners} // Move listeners to the div
            {...attributes} // Move attributes to the div
            ref={setNodeRef}
            className='h-fit w-fit'
        >
            <div>{props.children}</div>
        </button>
    );
}
