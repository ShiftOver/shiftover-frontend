import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../Draggable';

export type FluidIntakeOutputProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function FluidIntakeOutput({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: FluidIntakeOutputProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='vital'
                type='MonitoringNursingRecord'
                name='FluidIntakeOutput'
                full={isDropped || isOver}
            ></CardHolderReview>
        </Draggable>
    );
}
