import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type NutritionalMetabolismProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function NutritionalMetabolism({
    isDropped = false,
    isOver,
    isCollide,
    id,
}: NutritionalMetabolismProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='stomach'
                type='NurseAssessmentForm'
                name='Nutrition/ Metabolism'
                full={isDropped || isOver}
                collide={isCollide}
            >
                <div className='mb-[14px] ml-[14px] flex w-[448px] flex-col items-start gap-[12px]'>
                    <div>Ordinary Diet</div>
                    <div>Appetite: Good</div>
                    <div>Special Diet: DM </div>
                    <div>Feeding: Self </div>
                    <div>Swallowing Difficulty: None </div>
                    <div>GI. Problem: None </div>
                    <div>Weight Change: Yes </div>
                    <div>Loss 12 kg/ 3wk/mth/yr </div>
                </div>
            </CardHolderReview>
        </Draggable>
    );
}
