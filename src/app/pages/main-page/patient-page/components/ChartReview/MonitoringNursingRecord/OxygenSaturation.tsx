import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type OxygenSaturationProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function OxygenSaturation({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: OxygenSaturationProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='vital'
                type='MonitoringNursingRecord'
                name='OxygenSaturation'
                full={isDropped || isOver}
            ></CardHolderReview>
        </Draggable>
    );
}
