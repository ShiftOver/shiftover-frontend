import CardHolder from '../../CardHolder';
import SaveButton from '../../SaveButton';

export type DischargeProps = {
    id: any;
};

export default function Discharge({ id }: DischargeProps) {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {};
        console.log(formData);
    };
    return (
        <div className='ml-[27px] mt-[23px] justify-items-center'>
            <div className='flex w-full flex-col justify-items-start gap-[31px]'>
                <CardHolder
                    path='personalLogo'
                    type='NurseAssessmentForm'
                    name='Spiritual/ Cultural Needs/ Emotional support'
                ></CardHolder>
            </div>
            <div className='mt-[23px]'>
                <SaveButton onClick={handleSubmit}></SaveButton>
            </div>
        </div>
    );
}
