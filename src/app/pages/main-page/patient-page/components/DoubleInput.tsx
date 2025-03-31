'use client';

import { useEffect } from 'react';

export type DoubleInputProps = {
    value: number | null;
    onChange: any;
    placeHolder?: string;
    style?: string;
    unit?: string;
    disabled?: boolean;
    height?: string;
};

export default function DoubleInput({
    value,
    onChange,
    placeHolder,
    style,
    unit,
    disabled,
    height,
}: DoubleInputProps) {
    useEffect(() => {
        if (disabled && value !== null) {
            onChange(null);
        }
    }, [disabled, onChange, value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // Allow empty input
        if (inputValue === '') {
            onChange(null);
            return;
        }

        // Ensure proper decimal handling
        const numericValue = Number(inputValue);
        if (!isNaN(numericValue)) {
            onChange(numericValue);
        }
    };

    return (
        <div className='mr-[5px] flex flex-row items-center'>
            {placeHolder ? (
                <div className='mr-[5px] whitespace-nowrap'>{placeHolder}</div>
            ) : null}
            <div
                className={
                    'flex flex-col gap-[11px] ' + (style ? style : 'w-full')
                }
            >
                <input
                    key={placeHolder}
                    type='number'
                    id={String(value)}
                    value={value ?? ''}
                    onChange={handleInputChange}
                    className={`bg-[#f6f3f3] ${height ? height : 'h-[18px]'}`}
                    disabled={disabled}
                    step='0.01' // Allows decimal numbers
                />
            </div>
            {unit ? <div className=''>{unit}</div> : null}
        </div>
    );
}
