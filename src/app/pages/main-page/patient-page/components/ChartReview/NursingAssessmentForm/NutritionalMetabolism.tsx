import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../Draggable';

export type NutritionalMetabolismProps = {
    isDropped?: any;
    isOver: any;
    id: any;
};

export default function NutritionalMetabolism({
    isDropped = false,
    isOver,
    id,
}: NutritionalMetabolismProps) {
    return (
        <Draggable id={id} isOver={isOver} isDropped={isDropped}>
            <CardHolderReview
                path='stomach'
                type='NurseAssessmentForm'
                name='Nutrition/ Metabolism'
                full={isDropped || isOver}
            >
                <div className='mb-[19px] ml-[14px] mr-[52px] flex flex-col items-start gap-[12px]'>
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
