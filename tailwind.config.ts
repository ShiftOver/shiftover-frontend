import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            'shiftover-font': ['SF Pro Display', 'sans-serif'],
        },
        colors: {
            'shiftover-black': '#353535',
            'shiftover-white-1': '#f7faf5',
            'shiftover-white-2': '#f5f2f2',
            'shiftover-blue': '#1fa9c4',
            'shiftover-gray': '#484848',
            'shiftover-teal': '#5deecc',
            text: {
                cardheader: '#1E1E1E',
                carddescription: '#828080',
            },
        },
        fontSize: {
            cardheader: [
                '20px',
                {
                    lineHeight: '23.87px',
                    fontWeight: '390',
                },
            ],
            cardname: [
                '16px',
                {
                    lineHeight: '19.09px',
                    fontWeight: '390',
                },
            ],
            carddescription: [
                '10px',
                {
                    lineHeight: '11.93px',
                    fontWeight: '390',
                },
            ],
            cardnumber: [
                '14px',
                {
                    lineHeight: '16.71px',
                    fontWeight: '390',
                },
            ],
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            width: {
                '54': '54px',
                '229': '229px',
            },
            height: {
                '54': '54px',
                '129': '129px',
            },
            padding: {
                '13': '13px',
                '15': '15px',
                '18': '18px',
            },
        },
        borderRadius: {
            '21': '21px',
        },
    },
    plugins: [],
};
export default config;
