import CardHolderReview from '../CardHolderReview';
import { Draggable } from '../test/Draggable';

export type EliminationReproductiveProps = {
    isDropped?: any;
    isOver?: any;
    isCollide?: boolean;
    id: any;
};

export default function EliminationReproductive({
    isDropped = false,
    isOver,
    isCollide,
    id,
}: EliminationReproductiveProps) {
    return (
        <Draggable id={id}>
            <CardHolderReview
                path='stomach'
                type='NurseAssessmentForm'
                name={
                    isDropped || isOver
                        ? 'Elimination/ Reproduction'
                        : 'Elimination/ Preproductive'
                }
                full={isDropped || isOver}
                collide={isCollide}
            >
                <div className='mb-[19px] ml-[14px] flex w-[986px] flex-row items-start'>
                    <div className='flex w-[406px] flex-col gap-[12px] text-start'>
                        <p>Gastrointestinal:</p>
                        <p>Oral Cavity:</p>
                        <p>Abdomen:</p>
                        <p>Bowel Pattern:</p>
                        <p>Elimination Problem:</p>
                    </div>
                    <div className='flex w-[271px] flex-col gap-[12px] text-start'>
                        <p>Genito-Urinary:</p>
                        <p>Bladder:</p>
                        <p>Voiding:</p>
                        <p>Continent :</p>
                        <p>Urine:</p>
                    </div>
                    <div className='flex w-[309px] flex-col gap-[12px] text-start'>
                        <p>Reproductive:</p>
                        <p>Genital Organ:</p>
                        <p>Breast:</p>
                        <p>Menstrual Problem (female only) :</p>
                    </div>
                </div>
            </CardHolderReview>
        </Draggable>
    );
}
