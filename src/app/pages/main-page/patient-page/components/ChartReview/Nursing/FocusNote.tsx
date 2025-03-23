import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../Draggable';

export type FocusNoteProps = {
    isDropped?: any;
    isOver?: any;
    id: any;
    isCollide?: boolean;
};

export default function FocusNote({
    isDropped = false,
    isOver,
    id,
    isCollide,
}: FocusNoteProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                type='Nursing'
                name='FocusNote'
                full={isDropped || isOver}
                collide={isCollide}
            ></CardHolderReview>
        </Draggable>
    );
}
