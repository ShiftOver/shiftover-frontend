import PatientCard from '../components/PatientCard';
import HeaderBlog from '@/app/components/Header';

export default function Main() {
    return (
        <div className='mx-[24px] mt-[28px]'>
            <div className='w-fit'>
                <HeaderBlog name='My Ward' />
            </div>
            <div className='mt-[28px] overflow-x-hidden pb-[10px]'>
                <div className='grid grid-cols-4 gap-[42px]'>
                    <PatientCard info={{ id: 'id' }} />
                    <PatientCard info={{ name: 'thanapong', gender: 'F' }} />
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                </div>
            </div>
        </div>
    );
}
