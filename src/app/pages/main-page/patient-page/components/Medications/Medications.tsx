import CardHolder from '../CardHolder';
import SaveButton from '../SaveButton';

export type MedicationsProps = {
    id: any;
};

export default function Medications({ id }: MedicationsProps) {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {};
        console.log(formData);
    };
    return (
        <div className='ml-[27px] mr-[29px] mt-[23px] justify-items-center'>
            <div className='w-full justify-items-start'>
                <CardHolder
                    path='injection'
                    type='Medications'
                    name='Injection Medication'
                ></CardHolder>
            </div>
            <div className='mt-[23px]'>
                <SaveButton onClick={handleSubmit}></SaveButton>
            </div>
        </div>
    );
}
