'use client';

import { useEffect } from 'react';

export type TextInputProps = {
    value: any;
    onChange: any;
    placeHolder?: string;
    style?: string;
    unit?: string;
    disabled?: boolean;
};

export default function TextInput({
    value,
    onChange,
    placeHolder,
    style,
    unit,
    disabled,
}: TextInputProps) {
    useEffect(() => {
        if (disabled) {
            onChange('');
        }
    }, [disabled, onChange]);

    return (
        <div className='mr-[5px] flex flex-row items-center'>
            {placeHolder ? (
                <div className='mr-[5px] whitespace-nowrap'>{placeHolder}</div>
            ) : (
                <></>
            )}
            <div
                className={
                    'flex flex-col gap-[11px] ' + (style ? style : 'w-full')
                }
            >
                <input
                    key={placeHolder}
                    type='text'
                    id={value}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className='h-[18px] bg-[#f6f3f3]'
                    disabled={disabled}
                />
            </div>
            {unit ? <div className=''>{unit}</div> : <></>}
        </div>
    );
}
