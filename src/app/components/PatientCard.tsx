const room = '101';
const name = 'Mr Henry G';
const gender = 'F';
const age = '23';
const patientNo = 'HN# 000001';
export default function PatientCard() {
    return (
        <div className='patientcard-bg h-129 w-229 rounded-21 font-shiftover-font shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'>
            <div className='flex flex-row justify-between pl-15 pr-18 pt-13'>
                <p className='text-cardheader text-text-cardheader'>
                    Room {room}
                </p>
                <button>
                    <img src='/assets/threeHorizonDots.svg' alt='Settings' />
                </button>
            </div>
            <button className='pt-[5px]'>
                <div className='flex flex-row pl-[15px] pt-[2px] text-text-carddescription'>
                    <img
                        src='https://picsum.photos/id/237/200/300'
                        className='border-full h-54 w-54'
                    />
                    <div className='justify-items-start pl-[14px] pt-[2px] text-left'>
                        <p className='text-cardname'>{name}</p>
                        <p className='text-carddescription'>Gender: {gender}</p>
                        <p className='text-carddescription'>Age: {age}</p>
                    </div>
                </div>
                <div className='pt-[5px] text-cardnumber text-text-carddescription'>
                    Patient {patientNo}
                </div>
            </button>
        </div>
    );
}
