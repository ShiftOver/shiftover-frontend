import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type DischargePlanCareProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function DischargePlanCare({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: DischargePlanCareProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='document'
                type='NurseAssessmentForm'
                name={
                    isDropped || isOver
                        ? 'Discharge Screening Criteria'
                        : 'Discharge/ Plan/ Care'
                }
                full={isDropped || isOver}
                collide={isCollide}
            >
                <div className='mb-[18px] ml-[14px] flex w-[986px] flex-col items-start gap-[12px]'>
                    <p className='mr-[20px]'>
                        1. Will patient need post discharge assistance with
                        Activity of Daily Living/ Physical funcationing?
                    </p>
                    <p className='ml-[45px] mr-[20px]'>
                        A. Does patient have family capable and willing to
                        provide assistance post discharge?
                    </p>
                    <p className='ml-[45px] mr-[20px]'>
                        B. Is assistance needed that family can&apos;t provide?
                    </p>
                    <p className='mr-[20px]'>
                        2. Are there financial concern regarding this
                        hospitalization?
                    </p>
                    <div className='flex flex-row'>
                        <p className='mr-[20px]'>Home environment:</p>
                        <p className='mr-[20px]'>Live With:</p>
                        <p className='mr-[20px]'>Live Where:</p>
                    </div>
                    <div className='flex flex-row'>
                        <p>Discharge Planning Needs:</p>
                        <div className='ml-[20px] flex flex-col gap-[12px] text-start'>
                            <p>Medication</p>
                            <p>Environment & Economic</p>
                        </div>
                    </div>
                    <p className='mr-[20px]'>Possible Referral Needs:</p>
                    <div className='flex flex-row'>
                        <p className='mr-[20px]'>Assessment Initiated by RN:</p>
                        <p className='mr-[20px]'>Date:</p>
                        <p className='mr-[20px]'>Time:</p>
                    </div>
                </div>
            </CardHolderReview>
        </Draggable>
    );
}
