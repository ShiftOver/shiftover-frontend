export type TableProps = {
    name: string;
    row: any;
    time: any;
    setValue: any;
    value: any;
};

export default function Table({
    name,
    row,
    time,
    setValue,
    value,
}: TableProps) {
    const color = ['bg-[#83c6bf]', 'bg-[#f3ba45]', 'bg-[#e16438]'];
    const borderColor = [
        'border-[#83c6bf]',
        'border-[#f3ba45]',
        'border-[#e16438]',
    ];
    return (
        <div className='h-fit rounded-[5px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.25)]'>
            <div className='flex h-[25px] flex-row items-center'>
                <p className='w-[101px] text-center text-cardnumber text-shiftover-cardtext'>
                    {name}
                </p>
                {time.map((val: any, index: any) => {
                    return (
                        <div
                            key={val}
                            className={`flex h-full flex-col justify-center text-white ${
                                index + 1 == time.length
                                    ? 'w-[44px]'
                                    : 'w-[37px] items-center'
                            }`}
                        >
                            <div
                                className={`h-[19px] w-[35px] content-center rounded-[5px] text-center ${
                                    index + 1 == time.length ? 'ml-[1px]' : ''
                                } ${color[index]}`}
                            >
                                <p className='text-carddescription'>{val}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            {row.map((val: any, index: any) => {
                return (
                    <div
                        key={name + val}
                        className={`flex h-[25px] flex-row items-center ${index % 2 == 0 ? 'bg-[#f5f2f2]' : ''}`}
                    >
                        <p className='text-shiftover-text-gray w-[101px] pl-[5px] text-table'>
                            {val}
                        </p>
                        {time.map((val2: any, index2: any) => {
                            const isChecked = value[val] === val2;
                            return (
                                <div
                                    className='flex w-[37px] flex-row justify-center'
                                    key={name + val + val2}
                                >
                                    <input
                                        type='radio'
                                        id={name + val + val2}
                                        value={val2}
                                        checked={isChecked}
                                        onChange={() =>
                                            setValue((prev: any) => ({
                                                ...prev,
                                                [val]: val2,
                                            }))
                                        }
                                        className='hidden'
                                    />
                                    <label
                                        htmlFor={name + val + val2}
                                        className={`h-[15px] w-[15px] rounded-[15px] border-[1px] ${borderColor[index2]} ${color[index2]} ${
                                            isChecked ? '' : 'bg-white'
                                        } flex cursor-pointer items-center justify-center transition-colors`}
                                    ></label>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
