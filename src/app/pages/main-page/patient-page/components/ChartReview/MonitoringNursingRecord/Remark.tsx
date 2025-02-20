import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type RemarkProps = {
    isDropped?: any;
    isOver?: any;
    id: any;
    isCollide?: boolean;
};

export default function Remark({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: RemarkProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='vital'
                type='MonitoringNursingRecord'
                name='Remark'
                full={isDropped || isOver}
            ></CardHolderReview>
        </Draggable>
    );
}
