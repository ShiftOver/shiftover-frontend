'use client';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [expanded, setExpanded] = useState(true);

    return (
        <nav
            className={`h-screen bg-shiftover-white-1 p-6 transition-all duration-500 ${expanded ? 'w-64' : 'w-24'}`}
        >
            <div className='flex h-full flex-col justify-between'>
                <div>
                    {/* Logo Section */}
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className='mb-12 flex items-center'
                    >
                        <img
                            src='/assets/logo.png'
                            alt='Logo'
                            className={`bg-white transition-all duration-300 ${expanded ? 'h-10 w-12' : 'h-10 w-12'}`}
                        />
                        {expanded && (
                            <span className='ml-4 text-logo font-semibold text-shiftover-black'>
                                ShiftOver
                            </span>
                        )}
                    </button>

                    {/* Icons and Text Section */}
                    <div className='flex flex-col space-y-6'>
                        <button className='flex items-center'>
                            <img
                                className={`items-center justify-center bg-shiftover-white-2 transition-all duration-300 ${expanded ? 'h-12 w-12 rounded-[200px]' : 'h-12 w-12 rounded-[200px]'}`}
                                src='/assets/nurse.png'
                                alt='Profile Icon'
                            />
                        </button>
                        <button className='flex items-center'>
                            <div className='flex h-10 w-10 items-center justify-center rounded-[200px] bg-shiftover-white-2 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'>
                                <img
                                    src='/assets/folder-outline.svg'
                                    alt='My Ward Icon'
                                    className='h-6 w-6'
                                />
                            </div>
                            {expanded && (
                                <span className='text-lg ml-4 font-semibold text-shiftover-black'>
                                    My Ward
                                </span>
                            )}
                        </button>
                        <button className='flex items-center'>
                            <div className='flex h-10 w-10 items-center justify-center rounded-[200px] bg-shiftover-white-2 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'>
                                <img
                                    src='/assets/folder-account-outline.svg'
                                    alt='Shared Ward Icon'
                                    className='h-6 w-6'
                                />
                            </div>
                            {expanded && (
                                <span className='text-lg ml-4 font-semibold text-shiftover-black'>
                                    Shared Ward
                                </span>
                            )}
                        </button>
                        <button className='flex items-center'>
                            <div className='flex h-10 w-10 items-center justify-center rounded-[200px] bg-shiftover-white-2 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'>
                                <img
                                    src='/assets/calendar-account.svg'
                                    alt='Schedule Icon'
                                    className='h-6 w-6'
                                />
                            </div>
                            {expanded && (
                                <span className='text-lg ml-4 font-semibold text-shiftover-black'>
                                    Schedule
                                </span>
                            )}
                        </button>

                        {/* Logout Button */}
                        <button className='flex items-center'>
                            <div className='flex h-10 w-10 items-center justify-center rounded-[200px] bg-shiftover-blue shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'>
                                <img
                                    src='/assets/logout.svg'
                                    alt='Logout Icon'
                                    className='h-6 w-6'
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Help Section */}
                <div>
                    <button className='flex items-center'>
                        <div className='flex h-10 w-10 items-center justify-center rounded-[200px] border-4 border-shiftover-blue bg-shiftover-white-2 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]'>
                            <img
                                src='/assets/help.svg'
                                alt='Help Icon'
                                className='h-6 w-6'
                            />
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
