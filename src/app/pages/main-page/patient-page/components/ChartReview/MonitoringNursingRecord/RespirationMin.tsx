import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type RespirationMinProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function RespirationMin({
    isDropped = false,
    isOver,
    isCollide,
    id,
}: RespirationMinProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='vital'
                type='MonitoringNursingRecord'
                name='RespirationMin'
                full={isDropped || isOver}
            ></CardHolderReview>
        </Draggable>
    );
}
