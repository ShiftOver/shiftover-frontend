'use client';

import { useEffect, useState } from 'react';

export type RadioButtonProps = {
    value: any;
    onChange: any;
    name: string;
    placeHolder: string;
    style?: string;
    children?: React.ReactNode;
};

export default function RadioButton({
    value,
    onChange,
    placeHolder,
    style,
    name,
    children,
}: RadioButtonProps) {
    return (
        <div className='flex flex-row'>
            <input
                type='radio'
                id={placeHolder}
                name={name}
                value={placeHolder}
                checked={value === placeHolder}
                onChange={() => onChange(placeHolder)}
            />
            <div className={'flex flex-row ' + (style ? style : '')}>
                {children ? children : placeHolder}
            </div>
        </div>
    );
}
