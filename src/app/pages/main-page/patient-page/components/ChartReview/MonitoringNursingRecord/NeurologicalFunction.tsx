import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../Draggable';

export type NeurologicalFunctionProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function NeurologicalFunction({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: NeurologicalFunctionProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='vital'
                type='MonitoringNursingRecord'
                name='NeurologicalFunction'
                full={isDropped || isOver}
            ></CardHolderReview>
        </Draggable>
    );
}
