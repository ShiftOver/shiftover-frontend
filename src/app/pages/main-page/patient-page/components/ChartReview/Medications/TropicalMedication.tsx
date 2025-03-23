import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../Draggable';

export type TropicalMedicationProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function TropicalMedication({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: TropicalMedicationProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='injection'
                type='Medications'
                name='TropicalMedication'
                full={isDropped || isOver}
            ></CardHolderReview>
        </Draggable>
    );
}
