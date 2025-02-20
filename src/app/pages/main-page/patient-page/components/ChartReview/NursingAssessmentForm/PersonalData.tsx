import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';
import Image from 'next/image';

export type PersonalDataProps = {
    isDropped?: any;
    isOver?: any;
    id: any;
    isCollide?: boolean;
};

export default function PersonalData({
    isDropped = false,
    isOver,
    id,
    isCollide,
}: PersonalDataProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='personalLogo'
                type='NurseAssessmentForm'
                name='Personal'
                full={isDropped || isOver}
                collide={isCollide}
            >
                <div className='w-[1000px]'>
                    <div className='ml-[12px] mr-[12px] flex'>
                        <Image
                            src='https://picsum.photos/id/237/200/300'
                            className='border-full h-[84px] w-[86px]'
                            alt=''
                        />
                        <div className='ml-[8px] flex flex-col gap-[12px] text-cardnumber text-shiftover-cardtext'>
                            <div className='flex flex-row content-start'>
                                <div className='w-[186px] text-start'>Name</div>
                                <div className={'w-[61px] text-start'}>Age</div>
                                <div className={'w-[50px] text-start'}>Sex</div>
                                <div className={'w-[172px] text-start'}>
                                    Education
                                </div>
                                <div className={'w-[116px] text-start'}>
                                    Occupation
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <div className={'w-[142px]'}>Admssion Date</div>
                                <div className={'w-[89px]'}>Time</div>
                                <div className={'w-[89px]'}>Height</div>
                                <div className={'w-[89px]'}>Weight</div>
                            </div>
                            <div className='flex flex-row'>
                                <div className='mr-[20px]'>
                                    Mode of Arrival:
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <div className='mr-[25px]'>Admitted Form: </div>
                            </div>
                        </div>
                    </div>
                    <div className='ml-[12px] mt-[12px] flex w-[750px] flex-col gap-[12px] text-start'>
                        <div className=''>Diagnosis</div>
                        <div className=''>Chief Complaint</div>
                        <div className=''>Past Illness</div>
                        <div className=''>Past Illness History</div>
                        <div className=''>Family Illness History</div>
                        <div className='flex flex-row gap-[5px]'>
                            <div className='flex w-[432px] flex-col gap-[7px]'>
                                <p>Allergies (Drug, Food, Others)</p>
                                <p>Allergies (Drug, Food, Others)</p>
                            </div>
                            <div>Reactions</div>
                        </div>
                    </div>
                    <div className='absolute right-[10px] top-[100px] h-[174px] w-[201px] rounded-[5px] border-[1px] border-[#b7b1b1] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]'>
                        <div className='ml-[10px] mt-[10px]'>
                            Vital Sign:
                            <div className='ml-[7px] mt-[8px] flex flex-col gap-[15px] text-start'>
                                <div className='w-[82px]'>Temp 12 C</div>
                                <div className='w-[82px]'>HR / min</div>
                                <div className='w-[82px]'>Resp / min</div>
                                <div className='w-[90px]'>Temp mmHg</div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-[23px] ml-[12px] mt-[19px] flex flex-row text-start'>
                        <div className='flex w-[326px] flex-col gap-[8px]'>
                            <div>Tobacco:</div>
                            <div>Exercise:</div>
                            <div>Name:</div>
                        </div>
                        <div className='flex w-[333px] flex-col gap-[8px]'>
                            <div>Alcohol:</div>
                            <div>Sleep/ Rest:</div>
                            <div>Relationship:</div>
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <div>Other Drug/ Substance:</div>
                            <div>Information Provided by:</div>
                            <div>Phone #</div>
                        </div>
                    </div>
                </div>
            </CardHolderReview>
        </Draggable>
    );
}
