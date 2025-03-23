import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../Draggable';

export type ImplantPatchesMedicationProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function ImplantPatchesMedication({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: ImplantPatchesMedicationProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='injection'
                type='Medications'
                name='ImplantPatchesMedication'
                full={isDropped || isOver}
            ></CardHolderReview>
        </Draggable>
    );
}
