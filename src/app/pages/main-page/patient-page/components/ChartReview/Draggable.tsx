import React, { useRef } from 'react';
import { useDraggable } from '@dnd-kit/core';

export function Draggable(props: any) {
    const ref = useRef<HTMLButtonElement | null>(null);

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
    });

    const style = transform
        ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
        : {};

    return (
        <button
            ref={(node) => {
                setNodeRef(node); // Attach DnD ref
                ref.current = node; // Store manual ref for lookup
            }}
            style={style}
            {...listeners}
            {...attributes}
            className='h-fit w-fit'
            data-draggable-id={props.id} // Custom attribute for lookup
        >
            <div>{props.children}</div>
        </button>
    );
}
