'use client';

import { useEffect, useState } from 'react';

export type ArrayInputProps = {
    value: any;
    onChange: any;
    placeHolder?: string;
    style?: string;
    unit?: string;
    disabled?: boolean;
    height?: string;
};

export default function ArrayInput({
    value,
    onChange,
    placeHolder,
    style,
    unit,
    disabled,
    height,
}: ArrayInputProps) {
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

    useEffect(() => {
        if (disabled) {
            onChange(['']);
        }
    }, [disabled, onChange]);

    const handleInputChange = (index: number, newValue: string) => {
        const newArray = [...value];
        newArray[index] = newValue;

        if (newArray[newArray.length - 1] !== '') {
            newArray.push('');
        }
        onChange(newArray);
    };

    const handleBlur = (index: number) => {
        setFocusedIndex(null);

        // Remove the item if it's empty and not the last input
        if (value[index] === '' && index !== value.length - 1) {
            const newArray = value.filter((_: any, i: any) => i !== index);

            // Ensure at least one empty string at the end
            if (newArray[newArray.length - 1] !== '') {
                newArray.push('');
            }

            onChange(newArray);
        }
    };

    return (
        <div className='mr-[5px] flex flex-row items-start'>
            {placeHolder ? (
                <div className='mr-[5px] whitespace-nowrap'>{placeHolder}</div>
            ) : null}
            <div
                className={
                    'flex flex-col gap-[11px] ' + (style ? style : 'w-full')
                }
            >
                {value.map((item: any, index: any) => (
                    <div key={index} className='flex w-full items-center gap-2'>
                        <input
                            type='text'
                            value={item}
                            onChange={(e) =>
                                handleInputChange(index, e.target.value)
                            }
                            onFocus={() => setFocusedIndex(index)}
                            onBlur={() => handleBlur(index)}
                            className={`w-full bg-[#f6f3f3] ${
                                height ? height : 'h-[18px]'
                            }`}
                            disabled={disabled}
                        />
                    </div>
                ))}
            </div>
            {unit ? <div className=''>{unit}</div> : null}
        </div>
    );
}
