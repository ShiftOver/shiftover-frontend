const room = '101';
const name = 'Mr Henry G';
const gender = 'F';
const age = '23';
const patientNo = 'HN# 000001';
export type PatientCardProps = {
    info?: any;
};
export default function PatientCard({ info }: PatientCardProps) {
    return (
        <div className='relative h-129 min-w-[229px] max-w-[229px] rounded-21 bg-white font-shiftover-font shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'>
            <div className='flex flex-row justify-between pl-15 pr-18 pt-13'>
                <p className='text-cardheader text-text-cardheader'>
                    Room {info ? room : 'No.'}
                </p>
                {info ? (
                    <button>
                        <img
                            src='/assets/threeHorizonDots.svg'
                            alt='Settings'
                        />
                    </button>
                ) : null}
            </div>
            {info ? (
                <button className='pt-[5px]'>
                    <div className='flex flex-row pl-[15px] pt-[2px] text-text-carddescription'>
                        <img
                            src='https://picsum.photos/id/237/200/300'
                            className='border-full h-54 w-54'
                        />
                        <div className='justify-items-start pl-[14px] pt-[2px] text-left'>
                            <p className='text-cardname'>{name}</p>
                            <p className='text-carddescription'>
                                Gender: {gender}
                            </p>
                            <p className='text-carddescription'>Age: {age}</p>
                        </div>
                    </div>
                    <div className='pt-[5px] text-cardnumber text-text-carddescription'>
                        Patient {patientNo}
                    </div>
                </button>
            ) : (
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                    <button>
                        <img src='/assets/addcircle.svg' alt='Settings' />
                    </button>
                </div>
            )}
        </div>
    );
}
