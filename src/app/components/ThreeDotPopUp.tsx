import { useEffect, useState } from 'react';

export type ThreeDotPopUpProps = {
    option: Array<string>;
};

export default function ThreeDotPopUp({ option }: ThreeDotPopUpProps) {
    const [popUp, setPopUp] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const popUpItems = option.map((item, index) => (
            <button
                className={`h-[29px] pl-[14px] text-left ${index == 0 ? 'rounded-t-[10px]' : ''} ${index !== option.length - 1 ? 'border-b border-[rgba(0,0,0,0.25)]' : 'rounded-b-[10px]'} hover:bg-[#f0f0f0]`}
                key={index}
                onClick={() => {
                    console.log(item);
                }}
            >
                {item}
            </button>
        ));
        setPopUp(popUpItems);
    }, [option]);

    return (
        <div className='flex w-[249px] flex-col rounded-[10px] bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'>
            {popUp}
        </div>
    );
}
