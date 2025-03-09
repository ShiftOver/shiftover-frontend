import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../Draggable';

export type ActivityFlowProps = {
    isDropped?: any;
    isOver?: any;
    id: any;
    isCollide?: boolean;
};

export default function ActivityFlow({
    isDropped = false,
    isOver,
    isCollide,
    id,
}: ActivityFlowProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                type='Nursing'
                name='ActivityFlow'
                full={isDropped || isOver}
                collide={isCollide}
            ></CardHolderReview>
        </Draggable>
    );
}
