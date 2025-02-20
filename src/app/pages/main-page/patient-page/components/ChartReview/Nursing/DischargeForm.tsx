import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type DischargeFormProps = {
    isDropped?: any;
    isOver?: any;
    id: any;
    isCollide?: boolean;
};

export default function DischargeForm({
    isDropped = false,
    isOver,
    isCollide,
    id,
}: DischargeFormProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                type='Nursing'
                name='DischargeForm'
                full={isDropped || isOver}
                collide={isCollide}
            ></CardHolderReview>
        </Draggable>
    );
}
