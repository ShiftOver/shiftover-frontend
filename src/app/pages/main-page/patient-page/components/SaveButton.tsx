'use client';

export type SaveButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function SaveButton({ onClick }: SaveButtonProps) {
    return (
        <button
            className='h-[46px] w-[146px] content-center rounded-[24px] bg-shiftover-blue px-[27px] py-[7px] shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'
            onClick={onClick}
        >
            <p className='text-save text-white'>Save</p>
        </button>
    );
}
