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
            'shiftover-oldblue': '#addce3',
            'shiftover-oldgreen': '#8bb9bf',
            'shiftover-mediumblue': '#7ec3f1',
            'shiftover-lightblue': '#b5ddf7',
            'shiftover-pink': '#fcd4dd',
            'shiftover-redpink': '#e55f7d',
            'shiftover-purple': '#c4c4f8',
            'shiftover-mediumpurple': '#8c8ce5',
            'shiftover-oldpurple': '#d7b4db',
            'shiftover-gray': '#484848',
            'shiftover-teal': '#5deecc',
            'shiftover-gray-text': '#b7b1b1',
            'shiftover-cardtext': '#828080',
            white: '#FFFFFF',
            text: {
                cardheader: '#1E1E1E',
                carddescription: '#828080',
            },
        },
        fontSize: {
            header: [
                '36px',
                {
                    lineHeight: '42.96px',
                    fontWeight: '500',
                },
            ],
            cardheader: [
                '20px',
                {
                    lineHeight: '23.87px',
                    fontWeight: '500',
                },
            ],
            cardname: [
                '16px',
                {
                    lineHeight: '19.09px',
                    fontWeight: '390',
                },
            ],
            heavyname: [
                '16px',
                {
                    lineHeight: '19.09px',
                    fontWeight: '590',
                },
            ],
            detailheader: [
                '19.21px',
                {
                    lineHeight: '22.92px',
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
            logo: [
                '34px',
                {
                    lineHeight: '40.56px',
                    fontWeight: '500',
                },
            ],
            subheader: [
                '11px',
                {
                    lineHeight: '13.32px',
                    fontWeight: '500',
                },
            ],
            save: [
                '24px',
                {
                    lineHeight: '28.64px',
                    fontWeight: '500',
                },
            ],
            graph: [
                '8.08px',
                {
                    lineHeight: '9.65px',
                    fontWeight: '500',
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
