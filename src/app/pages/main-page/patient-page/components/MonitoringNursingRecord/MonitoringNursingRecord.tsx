import CardHolder from '../CardHolder';
import SaveButton from '../SaveButton';
import DChart from '../DChart';

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
                            <div>Date: 21/05/2024</div>
                            <div className='mb-[28.63px] ml-[29.61px] mt-[12.99px] flex w-fit flex-row border-r-[1px] border-dashed border-[#828080] text-graph'>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        2
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        6
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        10
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        14
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        18
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        22
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                            </div>
                            <DChart></DChart>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='vital'
                        type='MonitoringNursingRecord'
                        name='Vital Sign (NIPB)'
                    >
                        <div className='flex w-[317px] flex-col'>
                            <div>Date: 21/05/2024</div>
                            <div className='mb-[28.63px] ml-[29.61px] mt-[12.99px] flex w-fit flex-row border-r-[1px] border-dashed border-[#828080] text-graph'>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        2
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        6
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        10
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        14
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        18
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        22
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                            </div>
                            <DChart></DChart>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='vital'
                        type='MonitoringNursingRecord'
                        name='Vital Sign (SpO2)'
                    >
                        <div className='flex w-[317px] flex-col'>
                            <div>Date: 21/05/2024</div>
                            <div className='mb-[28.63px] ml-[29.61px] mt-[12.99px] flex w-fit flex-row border-r-[1px] border-dashed border-[#828080] text-graph'>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        2
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        6
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        10
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        14
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        18
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        22
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                            </div>
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
                            <div>Date: 21/05/2024</div>
                            <div className='mb-[28.63px] ml-[29.61px] mt-[12.99px] flex w-fit flex-row border-r-[1px] border-dashed border-[#828080] text-graph'>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        2
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        6
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        10
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        14
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        18
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        22
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                            </div>
                            <DChart></DChart>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='vital'
                        type='MonitoringNursingRecord'
                        name='Vital Sign (T)'
                    >
                        <div className='flex w-[317px] flex-col'>
                            <div>Date: 21/05/2024</div>
                            <div className='mb-[28.63px] ml-[29.61px] mt-[12.99px] flex w-fit flex-row border-r-[1px] border-dashed border-[#828080] text-graph'>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        2
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        6
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        10
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        14
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        18
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        22
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                            </div>
                            <DChart></DChart>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='vital'
                        type='MonitoringNursingRecord'
                        name='Pain scale'
                    >
                        <div className='flex w-[317px] flex-col'>
                            <div>Date: 21/05/2024</div>
                            <div className='mb-[28.63px] ml-[29.61px] mt-[12.99px] flex w-fit flex-row border-r-[1px] border-dashed border-[#828080] text-graph'>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        2
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        6
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        10
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        14
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        18
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        22
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                            </div>
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
                            <div>Date: 21/05/2024</div>
                            <div className='mb-[28.63px] ml-[29.61px] mt-[12.99px] flex w-fit flex-row border-r-[1px] border-dashed border-[#828080] text-graph'>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        2
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        6
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        10
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        14
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        18
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                                <div className='flex h-[29.49px] w-[22.6px] flex-col items-center border-l-[1px] border-dashed border-[#828080]'>
                                    <div className='w-[23px] border-b-[0.95px] border-[#828080] text-center'>
                                        22
                                    </div>
                                    <input className='h-[15.7px] w-[18.08px] border-b-[0.95px] border-[#828080] text-center' />
                                </div>
                            </div>
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

            <div className='mt-[23px]'>
                <SaveButton onClick={handleSubmit}></SaveButton>
            </div>
        </div>
    );
}
