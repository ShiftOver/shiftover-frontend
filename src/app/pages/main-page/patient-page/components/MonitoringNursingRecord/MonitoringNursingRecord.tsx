import CardHolder from '../CardHolder';
import SaveButton from '../SaveButton';
import DChart from '../DChart';
import GraphInput from './GraphInput';
import DateInput from '../DateInput';

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
            <div className='flex w-full flex-col justify-items-start gap-[28px]'>
                <div className='flex flex-row gap-[21px]'>
                    <CardHolder
                        path='vital'
                        type='MonitoringNursingRecord'
                        name='Vital Sign (HR)'
                    >
                        <div className='flex w-[317px] flex-col'>
                            <div className='ml-[14.41px] text-date text-shiftover-gray-text'>
                                <DateInput></DateInput>
                            </div>
                            <GraphInput></GraphInput>
                            <DChart></DChart>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='vital'
                        type='MonitoringNursingRecord'
                        name='Vital Sign (NIPB)'
                    >
                        <div className='flex w-[317px] flex-col'>
                            <div className='ml-[14.41px] text-date text-shiftover-gray-text'>
                                <DateInput></DateInput>
                            </div>
                            <GraphInput></GraphInput>
                            <DChart></DChart>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='vital'
                        type='MonitoringNursingRecord'
                        name='Vital Sign (SpO2)'
                    >
                        <div className='flex w-[317px] flex-col'>
                            <div className='ml-[14.41px] text-date text-shiftover-gray-text'>
                                <DateInput></DateInput>
                            </div>
                            <GraphInput></GraphInput>
                            <DChart></DChart>
                        </div>
                    </CardHolder>
                </div>
                <div className='flex flex-row gap-[21px]'>
                    <CardHolder
                        path='vital'
                        type='MonitoringNursingRecord'
                        name='Vital Sign (RR)'
                    >
                        <div className='flex w-[317px] flex-col'>
                            <div className='ml-[14.41px] text-date text-shiftover-gray-text'>
                                <DateInput></DateInput>
                            </div>
                            <GraphInput></GraphInput>
                            <DChart></DChart>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='vital'
                        type='MonitoringNursingRecord'
                        name='Vital Sign (T)'
                    >
                        <div className='flex w-[317px] flex-col'>
                            <div className='ml-[14.41px] text-date text-shiftover-gray-text'>
                                <DateInput></DateInput>
                            </div>
                            <GraphInput></GraphInput>
                            <DChart></DChart>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='vital'
                        type='MonitoringNursingRecord'
                        name='Pain scale'
                    >
                        <div className='flex w-[317px] flex-col'>
                            <div className='ml-[14.41px] text-date text-shiftover-gray-text'>
                                <DateInput></DateInput>
                            </div>
                            <GraphInput></GraphInput>
                            <DChart></DChart>
                        </div>
                    </CardHolder>
                </div>
                <div className='mt-[21px] flex flex-row gap-[21px]'>
                    <CardHolder
                        path='vital'
                        type='MonitoringNursingRecord'
                        name='Vital Sign (FHR)'
                    >
                        <div className='flex w-[317px] flex-col'>
                            <div className='ml-[14.41px] text-date text-shiftover-gray-text'>
                                <DateInput></DateInput>
                            </div>
                            <GraphInput></GraphInput>
                            <DChart></DChart>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='halfwhiteandblackwater'
                        type='MonitoringNursingRecord'
                        name='Fluid Intake/ Output'
                    >
                        <div className='flex w-[676px] flex-col'></div>
                    </CardHolder>
                </div>
            </div>

            <div className='mb-[23px] mt-[23px]'>
                <SaveButton onClick={handleSubmit}></SaveButton>
            </div>
        </div>
    );
}
