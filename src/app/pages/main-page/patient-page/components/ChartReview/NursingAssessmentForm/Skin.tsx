import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../Draggable';

export type SkinProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function Skin({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: SkinProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='human'
                type='NurseAssessmentForm'
                name='Skin'
                full={isDropped || isOver}
                collide={isCollide}
            >
                <div className='h-[573px] w-[1000px]'></div>
            </CardHolderReview>
        </Draggable>
    );
}
