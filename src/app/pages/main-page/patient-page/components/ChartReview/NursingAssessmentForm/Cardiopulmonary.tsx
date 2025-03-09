import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../Draggable';

export type CardiopulmonaryProps = {
    isDropped?: any;
    isOver?: any;
    id: any;
    isCollide?: boolean;
};

export default function Cardiopulmonary({
    isDropped = false,
    isOver,
    isCollide,
    id,
}: CardiopulmonaryProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='lung'
                type='NurseAssessmentForm'
                name='Cardiopulmonary'
                full={isDropped || isOver}
                collide={isCollide}
            >
                <div className='mb-[19px] ml-[14px] flex w-[705px] flex-row items-start'>
                    <div className='flex w-[264px] flex-col items-start gap-[12px]'>
                        <div>Pulmonary:</div>
                        <div>Rate: Eupnea</div>
                        <div>Rhythm/ Depth: Regular </div>
                        <div>Effort: Easy </div>
                        <div>Cough: None </div>
                        <div>Sputum: None </div>
                        <div>Current treatment: None </div>
                    </div>
                    <div className='ml-[5px] flex w-[337px] flex-col items-start gap-[12px]'>
                        <div>Cardiovascular:</div>
                        <div>Pulse Rhythm: Regular</div>
                        <div>Pulse Amplitude: Strong</div>
                        <div>Pulse Rate: Normal </div>
                        <div>Edema: None </div>
                        <div>Neck Vien Engorged: No </div>
                        <div>Chest Pain: Yes </div>
                        <div>Location </div>
                        <div>Referred Pain </div>
                        <div>Duration </div>
                        <div>Frequency </div>
                    </div>
                </div>
            </CardHolderReview>
        </Draggable>
    );
}
