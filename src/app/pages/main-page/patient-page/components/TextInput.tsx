'use client';

import { useEffect, useState } from 'react';

export type TextInputProps = {
    value: any;
    onChange: any;
    placeHolder?: string;
    style?: string;
    row?: number;
    unit?: string;
    disabled?: boolean;
};

export default function TextInput({
    value,
    onChange,
    placeHolder,
    style,
    row,
    unit,
    disabled,
}: TextInputProps) {
    const classText = 'h-[18px] bg-[#f6f3f3] ';

    const [inputValues, setInputValues] = useState<string[]>([value]);

    // Handle input changes
    const handleChange = (index: number, newValue: string) => {
        const updatedValues = [...inputValues];
        updatedValues[index] = newValue;
        setInputValues(updatedValues);
        onChange(newValue); // You may also want to update the parent state
    };

    useEffect(() => {
        if (row && row > 1) {
            setInputValues(Array(row).fill(value));
        }
    }, [value, row]);

    useEffect(() => {
        setInputValues(['']);
        onChange('');
    }, [disabled]);

    return (
        <div className='mr-[5px] flex flex-row'>
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
                {inputValues.map((inputValue, index) => (
                    <input
                        key={index}
                        type='text'
                        value={inputValue}
                        onChange={(e) => handleChange(index, e.target.value)}
                        className={classText}
                        disabled={disabled}
                    />
                ))}
            </div>
            {unit ? <div className=''>{unit}</div> : <></>}
        </div>
    );
}
