import NursingList from './NursingList';

export type NursingProps = {
    id: any;
};

export default function Nursing({ id }: NursingProps) {
    return (
        <div className='ml-[24px] mr-[23px] mt-[28px]'>
            <div className='mt-[27px] flex flex-col gap-[9px] pb-[9px]'>
                <NursingList room={'Nursing Activity Flow Sheet'} />
                <NursingList room={'Nursing Focus Note'} />
                <NursingList room={'Nursing Focus List'} />
                <NursingList room={'Nursing Discharge Summary Form'} />
            </div>
        </div>
    );
}
