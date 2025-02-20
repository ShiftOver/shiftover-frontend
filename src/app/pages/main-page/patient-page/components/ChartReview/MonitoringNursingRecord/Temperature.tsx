import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type TemperatureProps = {
    isDropped?: any;
    isOver?: any;
    id: any;
    isCollide?: boolean;
};

export default function Temperature({
    isDropped = false,
    isOver,
    isCollide,
    id,
}: TemperatureProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='vital'
                type='MonitoringNursingRecord'
                name='Temperature'
                full={isDropped || isOver}
                collide={isCollide}
            ></CardHolderReview>
        </Draggable>
    );
}
