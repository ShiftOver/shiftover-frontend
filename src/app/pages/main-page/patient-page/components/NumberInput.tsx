'use client';

import { useEffect } from 'react';

export type NumberInputProps = {
    value: number | string;
    onChange: (value: number | string) => void;
    placeHolder?: string;
    style?: string;
    unit?: string;
    disabled?: boolean;
    height?: string;
};

export default function NumberInput({
    value,
    onChange,
    placeHolder,
    style,
    unit,
    disabled,
    height,
}: NumberInputProps) {
    useEffect(() => {
        if (disabled) {
            onChange('');
        }
    }, [disabled, onChange]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        // Allow empty string for controlled input behavior
        if (newValue === '') {
            onChange('');
            return;
        }

        // Parse integer and prevent decimals
        const intValue = parseInt(newValue, 10);
        if (!isNaN(intValue)) {
            onChange(intValue);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Prevent typing invalid characters
        if (e.key === '.' || e.key === '-' || e.key === 'e') {
            e.preventDefault();
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
                    step={1}
                    id={String(value)}
                    value={value === '' ? '' : value} // Ensures empty string shows nothing
                    onChange={handleChange}
                    onKeyDown={handleKeyDown} // Restricts unwanted keys
                    onBlur={() => {
                        // Keeps input empty instead of defaulting to 0
                        if (value === '') {
                            onChange('');
                        }
                    }}
                    className={`bg-[#f6f3f3] ${height ? height : 'h-[18px]'}`}
                    disabled={disabled}
                    pattern='\d*' // Ensures numeric input
                />
            </div>
            {unit ? <div className=''>{unit}</div> : null}
        </div>
    );
}
