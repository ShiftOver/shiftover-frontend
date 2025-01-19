import CardHolder from '../CardHolder';
import SaveButton from '../SaveButton';

export type MonitoringNursingRecordProps = {
    id: any;
};

export default function MonitoringNuringRecord({
    id,
}: MonitoringNursingRecordProps) {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {};
        console.log(formData);
    };
    return (
        <div className='ml-[27px] mr-[29px] mt-[23px] justify-items-center'>
            <div className='w-full justify-items-start'>
                <CardHolder
                    path='vital'
                    type='MonitoringNursingRecord'
                    name='Vital Sign (HR)'
                ></CardHolder>
                <CardHolder
                    path='vital'
                    type='MonitoringNursingRecord'
                    name='Vital Sign (HR)'
                ></CardHolder>
                <CardHolder
                    path='vital'
                    type='MonitoringNursingRecord'
                    name='Vital Sign (HR)'
                ></CardHolder>
            </div>
            <div className='mt-[23px]'>
                <SaveButton onClick={handleSubmit}></SaveButton>
            </div>
        </div>
    );
}
