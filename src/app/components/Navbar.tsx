import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className='h-screen bg-shiftover-white-1 p-6'>
            <div className='flex flex-col justify-start'>
                <button className='mb-12'>
                    <img
                        src='/assets/logo.png'
                        alt='Logo'
                        className='bg-white h-[39px] w-[219px] rounded-full'
                    />
                </button>
                <button className='mb-10 flex items-center text-lg font-semibold text-shiftover-black'>
                    <img
                        src='/assets/nurse.png'
                        alt='Nurse Icon'
                        className='mr-4 h-14 w-14 rounded-full bg-shiftover-white-2'
                    />
                </button>

                <div className='flex flex-col space-y-6'>
                    <button className='flex items-center text-lg font-semibold text-shiftover-black'>
                        <div className='bg-shiftover-white-20 mr-4 flex h-10 w-10 items-center justify-center rounded-full'>
                            <img
                                src='/assets/folder-outline.svg'
                                alt='My Ward Icon'
                                className='h-6 w-6'
                            />
                        </div>
                        My Ward
                    </button>
                    <button className='flex items-center text-lg font-semibold text-shiftover-black'>
                        <div className='mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-shiftover-white-2'>
                            <img
                                src='/assets/folder-account-outline.svg'
                                alt='Shared Ward Icon'
                                className='h-6 w-6'
                            />
                        </div>
                        Shared Ward
                    </button>
                    <button className='flex items-center text-lg font-semibold text-shiftover-black'>
                        <div className='mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-shiftover-white-2'>
                            <img
                                src='/assets/calendar-account.svg'
                                alt='Schedule Icon'
                                className='h-6 w-6'
                            />
                        </div>
                        Schedule
                    </button>

                    <button className='flex items-center text-lg font-semibold text-shiftover-black'>
                        <div className='mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-shiftover-blue'>
                            <img
                                src='/assets/logout.svg'
                                alt='Logout Icon'
                                className='h-6 w-6'
                            />
                        </div>
                    </button>
                </div>
                <button className='mt-72 flex items-center text-lg font-semibold text-shiftover-black'>
                    <div className='mr-4 flex h-10 w-10 items-center justify-center rounded-full border border-4 border-shiftover-blue bg-shiftover-white-2'>
                        <img
                            src='/assets/help.svg'
                            alt='New Icon'
                            className='h-6 w-6'
                        />
                    </div>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
