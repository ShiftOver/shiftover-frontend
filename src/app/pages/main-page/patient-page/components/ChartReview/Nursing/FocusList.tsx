import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type FocusListProps = {
    isDropped?: any;
    isOver?: any;
    id: any;
    isCollide?: boolean;
};

export default function FocusList({
    isDropped = false,
    isOver,
    isCollide,
    id,
}: FocusListProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                type='Nursing'
                name='FocusList'
                full={isDropped || isOver}
                collide={isCollide}
            ></CardHolderReview>
        </Draggable>
    );
}
