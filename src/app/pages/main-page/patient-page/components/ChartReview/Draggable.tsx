'use client';
import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export function Draggable(props: any) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'draggable',
    });

    const style = {
        ...(transform && !props.position
            ? {
                  transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
              }
            : props.position
              ? {
                    position: 'absolute', // Absolute positioning to control the placement
                    top: props.position[1], // Y position
                    left: props.position[0], // X position
                    transition: 'top 0.3s ease, left 0.3s ease', // Smooth transition for position change
                    zIndex: 10, // Make sure draggable stays on top of droppable
                }
              : {}),
    };

    return (
        <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </button>
    );
}
