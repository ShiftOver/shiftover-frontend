import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type SuppositoriesMedicationProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function SuppositoriesMedication({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: SuppositoriesMedicationProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='injection'
                type='Medications'
                name='SuppositoriesMedication'
                full={isDropped || isOver}
            ></CardHolderReview>
        </Draggable>
    );
}
