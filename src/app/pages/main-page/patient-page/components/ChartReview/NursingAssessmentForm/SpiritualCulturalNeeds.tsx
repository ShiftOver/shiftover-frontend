import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../Draggable';

export type SpiritualCulturalNeedsProps = {
    isDropped?: any;
    isOver: any;
    id: any;
};

export default function SpiritualCulturalNeeds({
    isDropped = false,
    isOver,
    id,
}: SpiritualCulturalNeedsProps) {
    return (
        <Draggable id={id} isOver={isOver} isDropped={isDropped}>
            <CardHolderReview
                path='personalLogo'
                type='NurseAssessmentForm'
                name={
                    isDropped || isOver
                        ? 'Spiritual/ Cultural Needs/ Emotional support'
                        : 'Spiritual/ Cultural Needs'
                }
                full={isDropped || isOver}
            >
                <div className='mb-[19px] ml-[14px] mr-[52px] flex flex-col items-start gap-[12px]'>
                    <div>Religion Buddhism</div>
                    <div>
                        Special Religious/ Cultural considerations for
                        hospitalization: Yes
                    </div>
                    <div>Anxiety: None </div>
                    <div>Support System: None </div>
                </div>
            </CardHolderReview>
        </Draggable>
    );
}
