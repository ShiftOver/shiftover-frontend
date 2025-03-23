import CardHolder from '../CardHolder';
import SaveButton from '../SaveButton';
import DChart from './DChart';
import GraphInput from './GraphInput';
import DateInput from '../DateInput';
import { useState } from 'react';
import D3TwoLineChart from './D2Chart';
import GraphInputDayNight from './GraphInputDayNight';

export type MonitoringNursingRecordProps = {
    id: any;
};

export default function MonitoringNuringRecord({
    id,
}: MonitoringNursingRecordProps) {
    const [consciousness, setConsciousness] = useState('');
    const [sedation, setSedation] = useState('');
    const [pupilSize, setPupilSize] = useState('');
    const [pupilReaction, setPupilReaction] = useState('');
    const [fluidMorning, setFluidMorning] = useState([
        {
            Shift: '',
            typeOfFluid: '',
            additions: '',
            putUp: '',
            goneIn: '',
            urine: '',
            ngAspirate: '',
            drainsStoma: '',
            stoolBO: '',
        },
        {
            Shift: '',
            typeOfFluid: '',
            additions: '',
            putUp: '',
            goneIn: '',
            urine: '',
            ngAspirate: '',
            drainsStoma: '',
            stoolBO: '',
        },
        {
            Shift: '',
            typeOfFluid: '',
            additions: '',
            putUp: '',
            goneIn: '',
            urine: '',
            ngAspirate: '',
            drainsStoma: '',
            stoolBO: '',
        },
        {
            Shift: '',
            typeOfFluid: '',
            additions: '',
            putUp: '',
            goneIn: '',
            urine: '',
            ngAspirate: '',
            drainsStoma: '',
            stoolBO: '',
        },
        {
            Shift: '',
            typeOfFluid: '',
            additions: '',
            putUp: '',
            goneIn: '',
            urine: '',
            ngAspirate: '',
            drainsStoma: '',
            stoolBO: '',
        },
    ]);
    const [fluidAfternoon, setFluidAfternoon] = useState([
        {
            Shift: '',
            typeOfFluid: '',
            additions: '',
            putUp: '',
            goneIn: '',
            urine: '',
            ngAspirate: '',
            drainsStoma: '',
            stoolBO: '',
        },
        {
            Shift: '',
            typeOfFluid: '',
            additions: '',
            putUp: '',
            goneIn: '',
            urine: '',
            ngAspirate: '',
            drainsStoma: '',
            stoolBO: '',
        },
        {
            Shift: '',
            typeOfFluid: '',
            additions: '',
            putUp: '',
            goneIn: '',
            urine: '',
            ngAspirate: '',
            drainsStoma: '',
            stoolBO: '',
        },
        {
            Shift: '',
            typeOfFluid: '',
            additions: '',
            putUp: '',
            goneIn: '',
            urine: '',
            ngAspirate: '',
            drainsStoma: '',
            stoolBO: '',
        },
        {
            Shift: '',
            typeOfFluid: '',
            additions: '',
            putUp: '',
            goneIn: '',
            urine: '',
            ngAspirate: '',
            drainsStoma: '',
            stoolBO: '',
        },
    ]);
    const [fluidNight, setFluidNight] = useState([
        {
            Shift: '',
            typeOfFluid: '',
            additions: '',
            putUp: '',
            goneIn: '',
            urine: '',
            ngAspirate: '',
            drainsStoma: '',
            stoolBO: '',
        },
        {
            Shift: '',
            typeOfFluid: '',
            additions: '',
            putUp: '',
            goneIn: '',
            urine: '',
            ngAspirate: '',
            drainsStoma: '',
            stoolBO: '',
        },
        {
            Shift: '',
            typeOfFluid: '',
            additions: '',
            putUp: '',
            goneIn: '',
            urine: '',
            ngAspirate: '',
            drainsStoma: '',
            stoolBO: '',
        },
        {
            Shift: '',
            typeOfFluid: '',
            additions: '',
            putUp: '',
            goneIn: '',
            urine: '',
            ngAspirate: '',
            drainsStoma: '',
            stoolBO: '',
        },
        {
            Shift: '',
            typeOfFluid: '',
            additions: '',
            putUp: '',
            goneIn: '',
            urine: '',
            ngAspirate: '',
            drainsStoma: '',
            stoolBO: '',
        },
    ]);
    const [dataHR, setDataHR] = useState([
        { hour: '2025-02-09:2', hr: 62 },
        { hour: '2025-02-09:6', hr: 75 },
        { hour: '2025-02-09:10', hr: 79 },
        { hour: '2025-02-09:14', hr: 72 },
        { hour: '2025-02-09:18', hr: 74 },
        { hour: '2025-02-09:22', hr: 65 },
        { hour: '2025-02-10:2', hr: null },
        { hour: '2025-02-10:6', hr: null },
        { hour: '2025-02-10:10', hr: null },
        { hour: '2025-02-10:14', hr: null },
        { hour: '2025-02-10:18', hr: null },
        { hour: '2025-02-10:22', hr: null },
    ]);
    const [dataNIPB, setDataNIPB] = useState([
        { hour: '2025-02-09:Morning', systoli: 62, diastoli: 80 },
        { hour: '2025-02-09:Night', systoli: 75, diastoli: 90 },
        { hour: '2025-02-10:Morning', systoli: 79, diastoli: 100 },
        { hour: '2025-02-10:Night', systoli: 72, diastoli: 130 },
        { hour: '2025-02-11:Morning', systoli: 74, diastoli: 110 },
        { hour: '2025-02-11:Night', systoli: 65, diastoli: 130 },
        { hour: '2025-02-12:Morning', systoli: null, diastoli: null },
        { hour: '2025-02-12:Night', systoli: null, diastoli: null },
        { hour: '2025-02-13:Morning', systoli: null, diastoli: null },
        { hour: '2025-02-13:Night', systoli: null, diastoli: null },
        { hour: '2025-02-14:Morning', systoli: null, diastoli: null },
        { hour: '2025-02-14:Night', systoli: null, diastoli: null },
    ]);
    const [dataSPO2, setDataSPO2] = useState([
        { hour: '2025-02-09:2', hr: 62 },
        { hour: '2025-02-09:6', hr: 75 },
        { hour: '2025-02-09:10', hr: 79 },
        { hour: '2025-02-09:14', hr: 72 },
        { hour: '2025-02-09:18', hr: 74 },
        { hour: '2025-02-09:22', hr: 65 },
        { hour: '2025-02-10:2', hr: null },
        { hour: '2025-02-10:6', hr: null },
        { hour: '2025-02-10:10', hr: null },
        { hour: '2025-02-10:14', hr: null },
        { hour: '2025-02-10:18', hr: null },
        { hour: '2025-02-10:22', hr: null },
    ]);
    const [dataRR, setDataRR] = useState([
        { hour: '2025-02-09:2', hr: 12 },
        { hour: '2025-02-09:6', hr: 15 },
        { hour: '2025-02-09:10', hr: 29 },
        { hour: '2025-02-09:14', hr: 2 },
        { hour: '2025-02-09:18', hr: 4 },
        { hour: '2025-02-09:22', hr: 15 },
        { hour: '2025-02-10:2', hr: null },
        { hour: '2025-02-10:6', hr: null },
        { hour: '2025-02-10:10', hr: null },
        { hour: '2025-02-10:14', hr: null },
        { hour: '2025-02-10:18', hr: null },
        { hour: '2025-02-10:22', hr: null },
    ]);
    const [dataT, setDataT] = useState([
        { hour: '2025-02-09:2', hr: 40 },
        { hour: '2025-02-09:6', hr: 36 },
        { hour: '2025-02-09:10', hr: 39 },
        { hour: '2025-02-09:14', hr: 38 },
        { hour: '2025-02-09:18', hr: 39 },
        { hour: '2025-02-09:22', hr: 40 },
        { hour: '2025-02-10:2', hr: null },
        { hour: '2025-02-10:6', hr: null },
        { hour: '2025-02-10:10', hr: null },
        { hour: '2025-02-10:14', hr: null },
        { hour: '2025-02-10:18', hr: null },
        { hour: '2025-02-10:22', hr: null },
    ]);
    const [dataPain, setDataPain] = useState([
        { hour: '2025-02-09:2', hr: 4 },
        { hour: '2025-02-09:6', hr: 3 },
        { hour: '2025-02-09:10', hr: 4 },
        { hour: '2025-02-09:14', hr: 2 },
        { hour: '2025-02-09:18', hr: 1 },
        { hour: '2025-02-09:22', hr: 5 },
        { hour: '2025-02-10:2', hr: null },
        { hour: '2025-02-10:6', hr: null },
        { hour: '2025-02-10:10', hr: null },
        { hour: '2025-02-10:14', hr: null },
        { hour: '2025-02-10:18', hr: null },
        { hour: '2025-02-10:22', hr: null },
    ]);

    const [dataFHR, setDataFHR] = useState([
        { hour: '2025-02-09:2', hr: 62 },
        { hour: '2025-02-09:6', hr: 75 },
        { hour: '2025-02-09:10', hr: 79 },
        { hour: '2025-02-09:14', hr: 72 },
        { hour: '2025-02-09:18', hr: 74 },
        { hour: '2025-02-09:22', hr: 65 },
        { hour: '2025-02-10:2', hr: null },
        { hour: '2025-02-10:6', hr: null },
        { hour: '2025-02-10:10', hr: null },
        { hour: '2025-02-10:14', hr: null },
        { hour: '2025-02-10:18', hr: null },
        { hour: '2025-02-10:22', hr: null },
    ]);
    const handleInputChangeMorning = (
        index: number,
        field: any,
        value: string
    ) => {
        const newFluidMorning = [...fluidMorning];
        newFluidMorning[index] = {
            ...newFluidMorning[index],
            [field]: value,
        };
        setFluidMorning(newFluidMorning);
    };
    const handleInputChangeAfternoon = (
        index: number,
        field: any,
        value: string
    ) => {
        const newFluidAfternoon = [...fluidAfternoon];
        newFluidAfternoon[index] = {
            ...newFluidAfternoon[index],
            [field]: value,
        };
        setFluidAfternoon(newFluidAfternoon);
    };
    const handleInputChangeNight = (
        index: number,
        field: any,
        value: string
    ) => {
        const newFluidNight = [...fluidNight];
        newFluidNight[index] = {
            ...newFluidNight[index],
            [field]: value,
        };
        setFluidNight(newFluidNight);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {};
        console.log(dataHR);
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
                            <GraphInput
                                onChange={setDataHR}
                                data={dataHR}
                            ></GraphInput>
                            <DChart
                                Domain={[40, 60, 80, 100, 120, 140]}
                                chartData={dataHR}
                            ></DChart>
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
                            <GraphInputDayNight
                                onChange={setDataNIPB}
                                data={dataNIPB}
                            ></GraphInputDayNight>
                            <D3TwoLineChart
                                Domain={[0, 50, 100, 150, 200]}
                                chartData={dataNIPB}
                            ></D3TwoLineChart>
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
                            <GraphInput
                                onChange={setDataSPO2}
                                data={dataSPO2}
                            ></GraphInput>
                            <DChart
                                Domain={[20, 40, 60, 80, 100, 120]}
                                chartData={dataSPO2}
                            ></DChart>
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
                            <GraphInput
                                onChange={setDataRR}
                                data={dataRR}
                            ></GraphInput>
                            <DChart
                                Domain={[0, 5, 10, 15, 20, 25, 30]}
                                chartData={dataRR}
                            ></DChart>
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
                            <GraphInput
                                onChange={setDataT}
                                data={dataT}
                            ></GraphInput>
                            <DChart
                                Domain={[35, 36, 37, 38, 39, 40, 41]}
                                chartData={dataT}
                            ></DChart>
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
                            <GraphInput
                                onChange={setDataPain}
                                data={dataPain}
                            ></GraphInput>
                            <DChart
                                Domain={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                chartData={dataPain}
                                tick={10}
                            ></DChart>
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
                            <GraphInput
                                onChange={setDataFHR}
                                data={dataFHR}
                            ></GraphInput>
                            <DChart
                                Domain={[40, 60, 80, 100, 120, 140]}
                                chartData={dataFHR}
                            ></DChart>
                        </div>
                    </CardHolder>
                    <CardHolder
                        path='halfwhiteandblackwater'
                        type='MonitoringNursingRecord'
                        name='Fluid Intake/ Output'
                    >
                        <div className='flex w-[676px] flex-col text-date'>
                            <div className='ml-[14.41px] text-shiftover-gray-text'>
                                <DateInput></DateInput>
                            </div>
                            <div className='ml-[11px] mt-[7px] h-[174px] overflow-auto'>
                                <div className='flex flex-col rounded-[5px] text-shiftover-cardtext'>
                                    <div className='flex w-fit flex-row rounded-t-[5px] bg-[#f5f2f2] text-center text-fluidHeader text-shiftover-gray-text'>
                                        <p className='w-[64px] border-r-[1px]'>
                                            Time
                                        </p>
                                        <p className='w-[371px] border-r-[1px] border-shiftover-gray-text'>
                                            Intake
                                        </p>
                                        <p className='w-[203px]'>Output</p>
                                    </div>
                                    <div className='flex w-fit flex-row bg-[#fff] text-center'>
                                        <p className='w-[64px] border-r-[1px] border-shiftover-gray-text'>
                                            Morning
                                            <br />
                                            Shift
                                        </p>
                                        <div className='flex flex-row'>
                                            <div className='flex w-[196px] flex-col border-r-[1px] border-shiftover-gray-text'>
                                                <p className='pl-[10px] text-start'>
                                                    Method:
                                                </p>
                                                <p className='border-t-[1px] border-shiftover-gray-text'>
                                                    Type of Fluid
                                                </p>
                                            </div>
                                            <div className='flex flex-col'>
                                                <p className='border-r-[1px] border-shiftover-gray-text pl-[10px] text-start'>
                                                    Site:
                                                </p>
                                                <div className='flex flex-row border-t-[1px] border-shiftover-gray-text'>
                                                    <p className='w-[77px] border-r-[1px] border-shiftover-gray-text'>
                                                        Additions
                                                    </p>
                                                    <p className='w-[49px] border-r-[1px] border-shiftover-gray-text'>
                                                        Put up
                                                    </p>
                                                    <p className='w-[49px] border-r-[1px] border-shiftover-gray-text'>
                                                        Gone in
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='w-[43px] border-r-[1px] border-shiftover-gray-text'>
                                            Urine
                                        </p>
                                        <p className='w-[53px] border-r-[1px] border-shiftover-gray-text'>
                                            N/G
                                            <br />
                                            Aspirate
                                        </p>
                                        <p className='w-[59px] border-r-[1px] border-shiftover-gray-text'>
                                            Drains
                                            <br />
                                            Stoma etc.
                                        </p>
                                        <p className='w-[48px]'>
                                            Stool
                                            <br />
                                            B.O.
                                        </p>
                                    </div>
                                    {fluidMorning.map((entry: any, index) => (
                                        <div
                                            key={`MorningFluid-${index}`}
                                            className='flex flex-row'
                                        >
                                            {Object.keys(entry).map(
                                                (field, index2) => (
                                                    <div
                                                        key={`MorningFluid-${field}-${index}`}
                                                        className={`${index2 == 8 ? '' : 'border-r-[1px]'} border-shiftover-gray-text ${
                                                            [
                                                                'w-[64px]',
                                                                'w-[196px]',
                                                                'w-[77px]',
                                                                'w-[49px]',
                                                                'w-[49px]',
                                                                'w-[43px]',
                                                                'w-[53px]',
                                                                'w-[59px]',
                                                                'w-[48px]',
                                                            ][index2]
                                                        } ${index % 2 == 0 ? 'bg-[#f5f2f2]' : ''}`}
                                                    >
                                                        <input
                                                            id={`MorningFluid-${field}-${index}`}
                                                            value={entry[field]}
                                                            className={`h-[20px] ${
                                                                [
                                                                    'w-[61px]',
                                                                    'w-[193px]',
                                                                    'w-[75px]',
                                                                    'w-[43px]',
                                                                    'w-[44px]',
                                                                    'w-[40px]',
                                                                    'w-[50px]',
                                                                    'w-[55px]',
                                                                    'w-[44px]',
                                                                ][index2]
                                                            } ${index % 2 == 0 ? 'bg-[#f5f2f2]' : ''}`}
                                                            onChange={(e) =>
                                                                handleInputChangeMorning(
                                                                    index,
                                                                    field,
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                )
                                            )}
                                            <hr />
                                        </div>
                                    ))}
                                    <div className='flex w-fit flex-row items-center bg-[#fff] text-center'>
                                        <p className='flex h-[20px] h-full w-[64px] items-center justify-center border-r-[1px] border-shiftover-gray-text'>
                                            15:00
                                        </p>
                                        <p className='flex h-[20px] w-[273px] items-center justify-end border-r-[1px] border-shiftover-gray-text pr-[10px]'>
                                            Remainder
                                        </p>
                                        <div className='h-[20px] w-[49px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[49px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[43px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[53px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[59px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[48px]'></div>
                                    </div>
                                    <div className='flex h-[20px] w-fit flex-row items-center rounded-b-[5px] bg-[#f5f2f2] text-center'>
                                        <div className='flex h-[20px] w-[386px] items-center justify-end border-r-[1px] border-shiftover-gray-text pr-[10px]'>
                                            Shift Total
                                            <p className='ml-[3px] text-shiftover-gray-text'>
                                                (7:00- 15:00)
                                            </p>
                                        </div>
                                        <div className='h-[20px] w-[49px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[43px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[53px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[59px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[48px]'></div>
                                    </div>
                                </div>
                                <div className='my-[5px] flex flex-col rounded-[5px] text-shiftover-cardtext'>
                                    <div className='flex w-fit flex-row rounded-t-[5px] bg-[#f5f2f2] text-center text-fluidHeader text-shiftover-gray-text'>
                                        <p className='w-[64px] border-r-[1px]'>
                                            Time
                                        </p>
                                        <p className='w-[371px] border-r-[1px] border-shiftover-gray-text'>
                                            Intake
                                        </p>
                                        <p className='w-[203px]'>Output</p>
                                    </div>
                                    <div className='flex w-fit flex-row bg-[#fff] text-center'>
                                        <p className='w-[64px] border-r-[1px] border-shiftover-gray-text'>
                                            Afternoon
                                            <br />
                                            Shift
                                        </p>
                                        <div className='flex flex-row'>
                                            <div className='flex w-[196px] flex-col border-r-[1px] border-shiftover-gray-text'>
                                                <p className='pl-[10px] text-start'>
                                                    Method:
                                                </p>
                                                <p className='border-t-[1px] border-shiftover-gray-text'>
                                                    Type of Fluid
                                                </p>
                                            </div>
                                            <div className='flex flex-col'>
                                                <p className='border-r-[1px] border-shiftover-gray-text pl-[10px] text-start'>
                                                    Site:
                                                </p>
                                                <div className='flex flex-row border-t-[1px] border-shiftover-gray-text'>
                                                    <p className='w-[77px] border-r-[1px] border-shiftover-gray-text'>
                                                        Additions
                                                    </p>
                                                    <p className='w-[49px] border-r-[1px] border-shiftover-gray-text'>
                                                        Put up
                                                    </p>
                                                    <p className='w-[49px] border-r-[1px] border-shiftover-gray-text'>
                                                        Gone in
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='w-[43px] border-r-[1px] border-shiftover-gray-text'>
                                            Urine
                                        </p>
                                        <p className='w-[53px] border-r-[1px] border-shiftover-gray-text'>
                                            N/G
                                            <br />
                                            Aspirate
                                        </p>
                                        <p className='w-[59px] border-r-[1px] border-shiftover-gray-text'>
                                            Drains
                                            <br />
                                            Stoma etc.
                                        </p>
                                        <p className='w-[48px]'>
                                            Stool
                                            <br />
                                            B.O.
                                        </p>
                                    </div>
                                    {fluidAfternoon.map((entry: any, index) => (
                                        <div
                                            key={`AfternoonFluid-${index}`}
                                            className='flex flex-row'
                                        >
                                            {Object.keys(entry).map(
                                                (field, index2) => (
                                                    <div
                                                        key={`AfternoonFluid-${field}-${index}`}
                                                        className={`${index2 == 8 ? '' : 'border-r-[1px]'} border-shiftover-gray-text ${
                                                            [
                                                                'w-[64px]',
                                                                'w-[196px]',
                                                                'w-[77px]',
                                                                'w-[49px]',
                                                                'w-[49px]',
                                                                'w-[43px]',
                                                                'w-[53px]',
                                                                'w-[59px]',
                                                                'w-[48px]',
                                                            ][index2]
                                                        } ${index % 2 == 0 ? 'bg-[#f5f2f2]' : ''}`}
                                                    >
                                                        <input
                                                            id={`AfternoonFluid-${field}-${index}`}
                                                            value={entry[field]}
                                                            className={`h-[20px] ${
                                                                [
                                                                    'w-[61px]',
                                                                    'w-[193px]',
                                                                    'w-[75px]',
                                                                    'w-[43px]',
                                                                    'w-[44px]',
                                                                    'w-[40px]',
                                                                    'w-[50px]',
                                                                    'w-[55px]',
                                                                    'w-[44px]',
                                                                ][index2]
                                                            } ${index % 2 == 0 ? 'bg-[#f5f2f2]' : ''}`}
                                                            onChange={(e) =>
                                                                handleInputChangeAfternoon(
                                                                    index,
                                                                    field,
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                )
                                            )}
                                            <hr />
                                        </div>
                                    ))}
                                    <div className='flex w-fit flex-row items-center bg-[#fff] text-center'>
                                        <p className='flex h-[20px] h-full w-[64px] items-center justify-center border-r-[1px] border-shiftover-gray-text'>
                                            23:00
                                        </p>
                                        <p className='flex h-[20px] w-[273px] items-center justify-end border-r-[1px] border-shiftover-gray-text pr-[10px]'>
                                            Remainder
                                        </p>
                                        <div className='h-[20px] w-[49px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[49px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[43px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[53px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[59px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[48px]'></div>
                                    </div>
                                    <div className='flex h-[20px] w-fit flex-row items-center rounded-b-[5px] bg-[#f5f2f2] text-center'>
                                        <div className='flex h-[20px] w-[386px] items-center justify-end border-r-[1px] border-shiftover-gray-text pr-[10px]'>
                                            Shift Total
                                            <p className='ml-[3px] text-shiftover-gray-text'>
                                                (15:00- 23:00)
                                            </p>
                                        </div>
                                        <div className='h-[20px] w-[49px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[43px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[53px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[59px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[48px]'></div>
                                    </div>
                                </div>
                                <div className='flex flex-col rounded-[5px] text-shiftover-cardtext'>
                                    <div className='flex w-fit flex-row rounded-t-[5px] bg-[#f5f2f2] text-center text-fluidHeader text-shiftover-gray-text'>
                                        <p className='w-[64px] border-r-[1px]'>
                                            Time
                                        </p>
                                        <p className='w-[371px] border-r-[1px] border-shiftover-gray-text'>
                                            Intake
                                        </p>
                                        <p className='w-[203px]'>Output</p>
                                    </div>
                                    <div className='flex w-fit flex-row bg-[#fff] text-center'>
                                        <p className='w-[64px] border-r-[1px] border-shiftover-gray-text'>
                                            Night
                                            <br />
                                            Shift
                                        </p>
                                        <div className='flex flex-row'>
                                            <div className='flex w-[196px] flex-col border-r-[1px] border-shiftover-gray-text'>
                                                <p className='pl-[10px] text-start'>
                                                    Method:
                                                </p>
                                                <p className='border-t-[1px] border-shiftover-gray-text'>
                                                    Type of Fluid
                                                </p>
                                            </div>
                                            <div className='flex flex-col'>
                                                <p className='border-r-[1px] border-shiftover-gray-text pl-[10px] text-start'>
                                                    Site:
                                                </p>
                                                <div className='flex flex-row border-t-[1px] border-shiftover-gray-text'>
                                                    <p className='w-[77px] border-r-[1px] border-shiftover-gray-text'>
                                                        Additions
                                                    </p>
                                                    <p className='w-[49px] border-r-[1px] border-shiftover-gray-text'>
                                                        Put up
                                                    </p>
                                                    <p className='w-[49px] border-r-[1px] border-shiftover-gray-text'>
                                                        Gone in
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='w-[43px] border-r-[1px] border-shiftover-gray-text'>
                                            Urine
                                        </p>
                                        <p className='w-[53px] border-r-[1px] border-shiftover-gray-text'>
                                            N/G
                                            <br />
                                            Aspirate
                                        </p>
                                        <p className='w-[59px] border-r-[1px] border-shiftover-gray-text'>
                                            Drains
                                            <br />
                                            Stoma etc.
                                        </p>
                                        <p className='w-[48px]'>
                                            Stool
                                            <br />
                                            B.O.
                                        </p>
                                    </div>
                                    {fluidNight.map((entry: any, index) => (
                                        <div
                                            key={`NightFluid-${index}`}
                                            className='flex flex-row'
                                        >
                                            {Object.keys(entry).map(
                                                (field, index2) => (
                                                    <div
                                                        key={`NightFluid-${field}-${index}`}
                                                        className={`${index2 == 8 ? '' : 'border-r-[1px]'} border-shiftover-gray-text ${
                                                            [
                                                                'w-[64px]',
                                                                'w-[196px]',
                                                                'w-[77px]',
                                                                'w-[49px]',
                                                                'w-[49px]',
                                                                'w-[43px]',
                                                                'w-[53px]',
                                                                'w-[59px]',
                                                                'w-[48px]',
                                                            ][index2]
                                                        } ${index % 2 == 0 ? 'bg-[#f5f2f2]' : ''}`}
                                                    >
                                                        <input
                                                            id={`NightFluid-${field}-${index}`}
                                                            value={entry[field]}
                                                            className={`h-[20px] ${
                                                                [
                                                                    'w-[61px]',
                                                                    'w-[193px]',
                                                                    'w-[75px]',
                                                                    'w-[43px]',
                                                                    'w-[44px]',
                                                                    'w-[40px]',
                                                                    'w-[50px]',
                                                                    'w-[55px]',
                                                                    'w-[44px]',
                                                                ][index2]
                                                            } ${index % 2 == 0 ? 'bg-[#f5f2f2]' : ''}`}
                                                            onChange={(e) =>
                                                                handleInputChangeNight(
                                                                    index,
                                                                    field,
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                )
                                            )}
                                            <hr />
                                        </div>
                                    ))}
                                    <div className='flex w-fit flex-row items-center bg-[#fff] text-center'>
                                        <p className='flex h-[20px] h-full w-[64px] items-center justify-center border-r-[1px] border-shiftover-gray-text'>
                                            7:00
                                        </p>
                                        <p className='flex h-[20px] w-[273px] items-center justify-end border-r-[1px] border-shiftover-gray-text pr-[10px]'>
                                            Remainder
                                        </p>
                                        <div className='h-[20px] w-[49px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[49px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[43px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[53px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[59px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[48px]'></div>
                                    </div>
                                    <div className='flex h-[20px] w-fit flex-row items-center rounded-b-[5px] bg-[#f5f2f2] text-center'>
                                        <div className='flex h-[20px] w-[386px] items-center justify-end border-r-[1px] border-shiftover-gray-text pr-[10px]'>
                                            Shift Total
                                            <p className='ml-[3px] text-shiftover-gray-text'>
                                                (23:00- 7:00)
                                            </p>
                                        </div>
                                        <div className='h-[20px] w-[49px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[43px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[53px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[59px] border-r-[1px] border-shiftover-gray-text'></div>
                                        <div className='h-[20px] w-[48px]'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardHolder>
                </div>
                <CardHolder
                    path='smiley'
                    type='MonitoringNursingRecord'
                    name='Neurological Function'
                >
                    <div className='flex w-[317px] flex-col'>
                        <div className='ml-[14.41px] text-date text-shiftover-gray-text'>
                            <DateInput></DateInput>
                            <p className='text-shiftover-cardtext'>
                                Level of Consciousness:
                            </p>
                            <div className='mb-[11px] mt-[3px] flex flex-row text-neurological'>
                                <button
                                    className={`h-[26px] w-[54px] rounded-l-[5px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${consciousness == 'Alert' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setConsciousness('Alert');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>A</p>
                                    <p>Alert</p>
                                </button>
                                <button
                                    className={`h-[26px] w-[59px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${consciousness == 'Lethargic' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setConsciousness('Lethargic');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>L</p>
                                    <p>Lethargic</p>
                                </button>
                                <button
                                    className={`h-[26px] w-[58px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${consciousness == 'Stuprous' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setConsciousness('Stuprous');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>S</p>
                                    <p>Stuprous</p>
                                </button>
                                <button
                                    className={`h-[26px] w-[58px] rounded-r-[5px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${consciousness == 'Comatose' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setConsciousness('Comatose');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>C</p>
                                    <p>Comatose</p>
                                </button>
                            </div>
                            <p className='text-shiftover-cardtext'>
                                Sedation Score:
                            </p>
                            <div className='mb-[11px] mt-[3px] flex flex-row text-neurological'>
                                <button
                                    className={`h-[26px] w-[48px] rounded-l-[5px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${sedation == 'Alert' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setSedation('Alert');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>0</p>
                                    <p>Alert</p>
                                </button>
                                <button
                                    className={`h-[26px] w-[48px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${sedation == 'Calm' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setSedation('Calm');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>1</p>
                                    <p>Calm</p>
                                </button>
                                <button
                                    className={`h-[26px] w-[45px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${sedation == 'Drowsy' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setSedation('Drowsy');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>2</p>
                                    <p>Drowsy</p>
                                </button>
                                <button
                                    className={`h-[26px] w-[53px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${sedation == 'Moderate' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setSedation('Moderate');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>3</p>
                                    <p>Moderate</p>
                                </button>
                                <button
                                    className={`h-[26px] w-[40px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${sedation == 'Deeply' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setSedation('Deeply');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>4</p>
                                    <p>Deeply</p>
                                </button>
                                <button
                                    className={`h-[26px] w-[58px] rounded-r-[5px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${sedation == 'Unresponsive' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setSedation('Unresponsive');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>5</p>
                                    <p>Unresponsive</p>
                                </button>
                            </div>
                            <p className='text-shiftover-cardtext'>
                                Pupil Size:
                            </p>
                            <div className='mb-[11px] mt-[3px] flex flex-row text-neurological'>
                                <button
                                    className={`flex h-[38px] w-[29px] flex-col items-center justify-center rounded-l-[5px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${pupilSize == '1' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setPupilSize('1');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>1</p>
                                    <div className='mt-[4px] h-[5px] w-[5px] rounded-[5px] bg-[#cccccc]'></div>
                                </button>
                                <button
                                    className={`flex h-[38px] w-[29px] flex-col items-center justify-center shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${pupilSize == '2' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setPupilSize('2');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>2</p>
                                    <div className='mt-[4px] h-[7px] w-[7px] rounded-[7px] bg-[#cccccc]'></div>
                                </button>
                                <button
                                    className={`flex h-[38px] w-[29px] flex-col items-center justify-center shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${pupilSize == '3' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setPupilSize('3');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>3</p>
                                    <div className='mt-[4px] h-[9px] w-[9px] rounded-[9px] bg-[#cccccc]'></div>
                                </button>
                                <button
                                    className={`flex h-[38px] w-[29px] flex-col items-center justify-center shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${pupilSize == '4' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setPupilSize('4');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>4</p>
                                    <div className='mt-[4px] h-[11px] w-[11px] rounded-[11px] bg-[#cccccc]'></div>
                                </button>
                                <button
                                    className={`flex h-[38px] w-[29px] flex-col items-center justify-center shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${pupilSize == '5' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setPupilSize('5');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>5</p>
                                    <div className='mt-[4px] h-[13px] w-[13px] rounded-[13px] bg-[#cccccc]'></div>
                                </button>
                                <button
                                    className={`flex h-[38px] w-[29px] flex-col items-center justify-center shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${pupilSize == '6' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setPupilSize('6');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>6</p>
                                    <div className='mt-[4px] h-[15px] w-[15px] rounded-[15px] bg-[#cccccc]'></div>
                                </button>
                                <button
                                    className={`flex h-[38px] w-[29px] flex-col items-center justify-center shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${pupilSize == '7' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setPupilSize('7');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>7</p>
                                    <div className='mt-[4px] h-[17px] w-[17px] rounded-[17px] bg-[#cccccc]'></div>
                                </button>
                                <button
                                    className={`flex h-[38px] w-[29px] flex-col items-center justify-center rounded-r-[5px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${pupilSize == '8' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setPupilSize('8');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>8</p>
                                    <div className='mt-[4px] h-[19px] w-[19px] rounded-[19px] bg-[#cccccc]'></div>
                                </button>
                            </div>
                            <p className='text-shiftover-cardtext'>
                                Pupil Reaction:
                            </p>
                            <div className='mt-[3px] flex flex-row text-neurological'>
                                <button
                                    className={`h-[26px] w-[54px] rounded-l-[5px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${pupilReaction == 'Normal' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setPupilReaction('Normal');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>N</p>
                                    <p>Normal</p>
                                </button>
                                <button
                                    className={`h-[26px] w-[59px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${pupilReaction == 'Sluggish' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setPupilReaction('Sluggish');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>S</p>
                                    <p>Sluggish</p>
                                </button>
                                <button
                                    className={`h-[26px] w-[58px] rounded-r-[5px] shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] ${pupilReaction == 'Fixed' ? 'bg-[#dddddd]' : ''}`}
                                    onClick={() => {
                                        setPupilReaction('Fixed');
                                    }}
                                >
                                    <p className='text-shiftover-cardtext'>F</p>
                                    <p>Fixed</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </CardHolder>
            </div>

            <div className='mb-[23px] mt-[23px]'>
                <SaveButton onClick={handleSubmit}></SaveButton>
            </div>
        </div>
    );
}
