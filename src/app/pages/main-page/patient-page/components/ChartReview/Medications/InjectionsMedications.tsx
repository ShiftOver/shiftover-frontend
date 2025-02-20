import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type InjectionsMedicationsProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function InjectionsMedications({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: InjectionsMedicationsProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='injection'
                type='Medications'
                name='InjectionsMedications'
                full={isDropped || isOver}
            ></CardHolderReview>
        </Draggable>
    );
}
