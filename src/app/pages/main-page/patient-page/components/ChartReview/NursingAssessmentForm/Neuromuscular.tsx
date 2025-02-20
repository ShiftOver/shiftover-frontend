import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type NeuromuscularProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function Neuromuscular({
    isDropped = false,
    isCollide,
    isOver,
    id,
}: NeuromuscularProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='brain'
                type='NurseAssessmentForm'
                name='Neuromuscular'
                full={isDropped || isOver}
                collide={isCollide}
            >
                <div className='mb-[68px] ml-[14px] flex w-[986px] flex-row items-start'>
                    <div className='flex w-[526px] flex-col items-start gap-[12px]'>
                        <div>Neurosensory:</div>
                        <div>Level of Consciousness (LOC):</div>
                        <div>Vision: </div>
                        <div>Hearing: </div>
                        <div>Speech: </div>
                        <div>Smell: </div>
                        <div>Sensation: </div>
                    </div>
                    <div className='flex flex-col items-start gap-[12px]'>
                        <div>Musculo-skeletal:</div>
                        <div>Hand Grasps: </div>
                        <div>Joint:</div>
                        <div>Weakness: </div>
                        <div>Paralysis: </div>
                        <div>Seizure: </div>
                        <div>Movement: </div>
                    </div>
                </div>
            </CardHolderReview>
        </Draggable>
    );
}
