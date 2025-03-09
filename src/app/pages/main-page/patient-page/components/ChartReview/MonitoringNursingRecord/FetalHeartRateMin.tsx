import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../Draggable';

export type FetalHeartRateMinProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function FetalHeartRateMin({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: FetalHeartRateMinProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='vital'
                type='MonitoringNursingRecord'
                name='FetalHeartRateMin'
                full={isDropped || isOver}
            ></CardHolderReview>
        </Draggable>
    );
}
