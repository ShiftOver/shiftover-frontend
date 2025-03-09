import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../Draggable';

export type TeachingLearningNeedsProps = {
    isDropped?: any;
    isOver?: any;
    id: any;
    isCollide?: boolean;
};

export default function TeachingLearningNeeds({
    isDropped = false,
    isOver,
    isCollide,
    id,
}: TeachingLearningNeedsProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='lung'
                type='NurseAssessmentForm'
                name={
                    isDropped || isOver
                        ? 'Information/ Teaching/ Learning'
                        : 'Teaching/ Learning Needs'
                }
                full={isDropped || isOver}
                collide={isCollide}
            >
                <div className='mb-[18px] ml-[35px] grid w-[965px] grid-cols-4 gap-y-[11px] text-start'>
                    <div>ascf</div>
                    <div>ascf</div>
                    <div>ascf</div>
                    <div>ascf</div>
                    <div>ascf</div>
                    <div>ascf</div>
                </div>
            </CardHolderReview>
        </Draggable>
    );
}
