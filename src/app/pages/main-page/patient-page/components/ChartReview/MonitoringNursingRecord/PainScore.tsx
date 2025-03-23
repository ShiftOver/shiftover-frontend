import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../Draggable';

export type PainScoreProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function PainScore({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: PainScoreProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='vital'
                type='MonitoringNursingRecord'
                name='PainScore'
                full={isDropped || isOver}
            ></CardHolderReview>
        </Draggable>
    );
}
