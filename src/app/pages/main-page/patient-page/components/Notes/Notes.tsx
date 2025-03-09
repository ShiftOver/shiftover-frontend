export type NotesProps = {
    id: any;
};

export default function Notes({ id }: NotesProps) {
    return (
        <div className='flex h-full flex-col'>
            <div className='ml-[10px] mt-[11px]'>
                <p className='text-cardname text-shiftover-pinkpurple'>
                    My Note
                </p>
                <div className='m-[6px] flex h-[36px] w-[294px] flex-row items-center rounded-[10px] bg-[#f5f2f2]'>
                    <img
                        src='/assets/searchGlyph.svg'
                        alt='Search Glyph'
                        className='ml-[8px] h-[22px] w-[22px]'
                    />
                    <input className='ml-[3px] w-[236px] bg-[#f5f2f2]'></input>
                    <button>
                        <img
                            src='/assets/microphone.svg'
                            alt='Microphone'
                            className='h-[22px] w-[22px]'
                        />
                    </button>
                </div>
            </div>
            <div className='m-[15px] flex-grow overflow-scroll border-[1px] border-[#f5f2f2]'></div>
        </div>
    );
}
