import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../Draggable';

export type MobilityProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function Mobility({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: MobilityProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='jogging'
                type='NurseAssessmentForm'
                name='Mobility'
                full={isDropped || isOver}
                collide={isCollide}
            >
                <div className='mb-[18px] ml-[14px] flex w-[330px] flex-col items-start gap-[12px]'>
                    <div className='flex flex-row'>
                        <p>Activity/ Function:</p>
                        <p>Requires Assistance in</p>
                    </div>
                    <div className='flex flex-row'>
                        <div className='ml-[92px] w-[57px] text-start'>
                            <p className=''>u</p>
                        </div>
                        <p className='ml-[72px]'>u</p>
                    </div>
                    <p>Injury:</p>
                    <p>Dominant Hand:</p>
                </div>
            </CardHolderReview>
        </Draggable>
    );
}
