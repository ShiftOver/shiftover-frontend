import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type PainManagementProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function PainManagement({
    isDropped = false,
    isOver,
    isCollide,
    id,
}: PainManagementProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='information'
                type='NurseAssessmentForm'
                name='Pain Management'
                full={isDropped || isOver}
                collide={isCollide}
            >
                <div className='mb-[23px] ml-[14px] flex w-[986px] flex-col gap-[12px] text-start'>
                    <div className='flex flex-row'>
                        <p className='mr-[20px]'>Pain:</p>
                        <div className='ml-[20px] flex flex-col gap-[12px]'>
                            <div className='flex flex-row'>
                                <div className='w-[331px]'>Pain Location</div>{' '}
                                <p className='ml-[41px]'>When</p>
                            </div>
                            <p>What cause pain to increase?</p>
                        </div>
                    </div>
                    <p>Pattern:</p>
                    <p>How does patient describe the pain:</p>
                    <p>Intensity:</p>
                    <p>Does pain affect patient&apos;s ability to:</p>
                    <p>What relieves pain:</p>
                </div>
            </CardHolderReview>
        </Draggable>
    );
}
