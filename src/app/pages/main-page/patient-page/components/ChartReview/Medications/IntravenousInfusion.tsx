import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type IntravenousInfusionProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function IntravenousInfusion({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: IntravenousInfusionProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='injection'
                type='Medications'
                name='IntravenousInfusion'
                full={isDropped || isOver}
            ></CardHolderReview>
        </Draggable>
    );
}
