export type ChartReviewProps = {
    id: any;
};
export default function ChartReview({ id }: ChartReviewProps) {
    return (
        <div>
            <button className='fixed right-[25px] top-[163px] flex h-[42px] w-[42px] items-center justify-center rounded-[200px] bg-shiftover-blue shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'>
                <img
                    src='/assets/plus.svg'
                    alt='plus'
                    className='fill-blue-500 h-6 w-6'
                />
            </button>
            <div className='h-[1000px]'></div>
        </div>
    );
}
