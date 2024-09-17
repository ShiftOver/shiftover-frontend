import HeaderBlog from '@/app/components/Header';
import SharedCard from './components/SharedCard';

export default function SharedPage() {
    return (
        <div className='ml-[24px] mr-[23px] mt-[28px]'>
            <div className='w-fit'>
                <HeaderBlog name='Shared Patients' />
            </div>
            <div className='mt-[27px] flex flex-col gap-[9px] pb-[9px]'>
                <SharedCard room={3} />
                <SharedCard room={3} />
                <SharedCard room={0} />
                <SharedCard room={0} />
            </div>
        </div>
    );
}
