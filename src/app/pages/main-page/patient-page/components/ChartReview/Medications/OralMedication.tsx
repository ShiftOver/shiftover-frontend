import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type OralMedicationProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function OralMedication({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: OralMedicationProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='injection'
                type='Medications'
                name='OralMedication'
                full={isDropped || isOver}
            ></CardHolderReview>
        </Draggable>
    );
}
