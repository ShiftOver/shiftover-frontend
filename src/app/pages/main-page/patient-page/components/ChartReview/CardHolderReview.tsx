'use client';

export type CardHolderReviewProps = {
    info?: any;
    path: string;
    type: string;
    name: string;
    children?: React.ReactNode;
    full: boolean;
};

export default function CardHolderReview({
    info,
    path,
    type,
    name,
    children,
    full,
}: CardHolderReviewProps) {
    let color;
    let textcolor;
    switch (type) {
        case 'NurseAssessmentForm':
            color = 'bg-shiftover-oldblue';
            textcolor = 'text-shiftover-oldgreen';
            break;
        case 'MonitoringNursingRecord':
            color = 'bg-shiftover-lightblue';
            textcolor = 'text-shiftover-mediumblue';
            break;
        case 'Medications':
            color = 'bg-shiftover-purple';
            textcolor = 'text-shiftover-mediumpurple';
            break;
    }
    return (
        <div
            className={`relative flex flex-row rounded-[21.61px] shadow-[0_2.4px_4.8px_0px_rgba(0,0,0,0.25)] ${full ? 'w-fit' : 'w-[269px]'}`}
        >
            <div className={`${color} w-[24px] rounded-l-[21.61px]`}></div>
            <div className='rounded-r-[21.61px] bg-white'>
                <div className='mx-[12px] my-[11px] flex flex-row items-center'>
                    {full ? (
                        <img
                            src={'/assets/' + path + '.svg'}
                            alt='path'
                            className='fill-blue-500 h-6 w-6'
                        />
                    ) : (
                        <></>
                    )}
                    <div className={`text-heavyname ${textcolor} ml-[8px]`}>
                        {name}
                    </div>
                </div>
                {full ? (
                    <div className='flex-col text-cardnumber text-shiftover-cardtext'>
                        {children}
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}
