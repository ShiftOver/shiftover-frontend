'use client';

export type RadioButtonProps = {
    value: any;
    onChange: any;
    name: string;
    placeHolder: string;
    style?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    checked?: boolean;
};

export default function RadioButton({
    value,
    onChange,
    placeHolder,
    style,
    name,
    children,
    disabled,
    checked,
}: RadioButtonProps) {
    return (
        <div className='flex flex-row'>
            <input
                type='radio'
                id={placeHolder}
                name={name}
                value={placeHolder}
                checked={checked ? checked : value === placeHolder}
                onChange={() => onChange(placeHolder)}
                disabled={disabled}
            />
            <div className={'flex flex-row ' + (style ? style : '')}>
                {children ? children : placeHolder}
            </div>
        </div>
    );
}
