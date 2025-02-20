import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type DropsMedicationProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function DropsMedication({
    isDropped = false,
    isOver,
    id,
}: DropsMedicationProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='injection'
                type='Medications'
                name='DropsMedication'
                full={isDropped || isOver}
            ></CardHolderReview>
        </Draggable>
    );
}
