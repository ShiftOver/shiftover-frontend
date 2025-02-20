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
            <div className='flex w-full flex-col justify-items-start gap-[46px]'>
                <div className='flex flex-row gap-[42px]'>
                    <CardHolder
                        path='injection'
                        type='Medications'
                        name='Injection Medication'
                    >
                        <div className='w-[387px]'></div>
                    </CardHolder>
                    <CardHolder
                        path='injection'
                        type='Medications'
                        name='Intravenous Medication'
                    >
                        <div className='w-[387px]'></div>
                    </CardHolder>
                </div>
                <div className='flex flex-row gap-[42px]'>
                    <CardHolder
                        path='capsule'
                        type='Medications'
                        name='Oral Medication'
                    >
                        <div className='w-[387px]'></div>
                    </CardHolder>
                    <CardHolder
                        path='claps'
                        type='Medications'
                        name='Tropical Medication'
                    >
                        <div className='w-[387px]'></div>
                    </CardHolder>
                </div>
                <div className='flex flex-row gap-[42px]'>
                    <CardHolder
                        path='drop'
                        type='Medications'
                        name='Drop Medication'
                    >
                        <div className='w-[387px]'></div>
                    </CardHolder>
                    <CardHolder
                        path='zip'
                        type='Medications'
                        name='Implant/ Patches Medication'
                    >
                        <div className='w-[387px]'></div>
                    </CardHolder>
                </div>
                <CardHolder
                    path='capsule'
                    type='Medications'
                    name='Suppositories Medication'
                >
                    <div className='w-[387px]'></div>
                </CardHolder>
            </div>
            <div className='mt-[23px]'>
                <SaveButton onClick={handleSubmit}></SaveButton>
            </div>
        </div>
    );
}
