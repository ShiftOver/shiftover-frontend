import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../Draggable';

export type HeartRateMinProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function HeartRateMin({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: HeartRateMinProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='vital'
                type='MonitoringNursingRecord'
                name='HeartRateMin'
                full={isDropped || isOver}
            ></CardHolderReview>
        </Draggable>
    );
}
