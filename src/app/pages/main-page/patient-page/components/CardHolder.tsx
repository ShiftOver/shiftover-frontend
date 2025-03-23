'use client';

export type CardHolderProps = {
    info?: any;
    path: string;
    type: string;
    name: string;
    children?: React.ReactNode;
};

export default function CardHolder({
    info,
    path,
    type,
    name,
    children,
}: CardHolderProps) {
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
        <div className='relative flex w-fit flex-row rounded-[21.61px] shadow-[0_2.4px_4.8px_0px_rgba(0,0,0,0.25)]'>
            <div className={`${color} w-[24px] rounded-l-[21.61px]`}></div>
            <div className='mb-[25px]'>
                <div className='mx-[12px] my-[11px] flex flex-row items-center'>
                    <img
                        src={'/assets/' + path + '.svg'}
                        alt='path'
                        className='fill-blue-500 h-6 w-6'
                    />
                    <div className={`text-detailheader ${textcolor} ml-[8px]`}>
                        {name}
                    </div>
                </div>
                <div className='text-cardnumber text-shiftover-cardtext'>
                    {children}
                </div>
            </div>
        </div>
    );
}
