import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type BloodPressureProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function BloodPressure({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: BloodPressureProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='vital'
                type='MonitoringNursingRecord'
                name='BloodPressure'
                full={isDropped || isOver}
            ></CardHolderReview>
        </Draggable>
    );
}
