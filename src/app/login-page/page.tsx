import Image from 'next/image';
import React from 'react';

export default function LoginPage() {
    return (
        <main className='bg-gray-100 flex min-h-screen items-center justify-center'>
            <div className='bg-white relative h-[834px] w-[1194px] overflow-hidden rounded-lg shadow-lg'>
                {/* Left Section - Image */}
                <div className='absolute left-[-93px] top-[150px] h-[533px] w-[718px]'>
                    <Image
                        src='/assets/login-image.png'
                        alt='Login Illustration'
                        layout='fill'
                        objectFit='cover'
                    />
                </div>

                {/* Right Section - Form */}
                <div className='absolute left-[647px] top-[241px]'>
                    <h2 className='font-sans text-4xl font-bold text-[#1e1e1e]'>
                        Welcome to ShiftOver
                    </h2>

                    <form className='mt-6'>
                        <div className='mb-4 h-[77px]'>
                            <label className='text-black block font-sans text-xl font-bold'>
                                User ID
                            </label>
                            <input
                                className='w-[450px] rounded-[10px] border border-[#f5f2f2] bg-[#f4f2f2] p-2.5 text-base text-[#817f7f] focus:outline-none'
                                type='text'
                                placeholder='Enter User ID'
                            />
                        </div>

                        <div className='mb-6 h-[77px]'>
                            <label className='text-black block font-sans text-xl font-bold'>
                                Password
                            </label>
                            <input
                                className='w-[450px] rounded-[10px] border border-[#f5f2f2] bg-[#f4f2f2] p-2.5 text-base text-[#817f7f] focus:outline-none'
                                type='password'
                                placeholder='Enter Password'
                            />
                        </div>

                        <div className='mb-6'>
                            <a
                                href='#'
                                className='font-sans text-base text-[#ee2323] underline'
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type='button'
                            className='text-white w-[181px] rounded-[22px] border border-[#1fa9c4]/20 bg-[#1fa9c4]/60 p-2.5 font-sans text-base shadow'
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
