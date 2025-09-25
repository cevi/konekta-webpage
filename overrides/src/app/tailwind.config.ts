/** @type {import('tailwindcss').Config} */
import twAnimate from 'tailwindcss-animate';
import colors from 'tailwindcss/colors';

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    prefix: '',
    plugins: [twAnimate],

    theme: {
        fontFamily: {
            heading: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
            body: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        },

        colors: {
            gray: {
                50: '#F5F5F6',
                100: '#E6E6E7',
                200: '#CFD0D2',
                300: '#ADAEB3',
                400: '#84858C',
                500: '#6D6E76',
                600: '#595961',
                700: '#4C4D52',
                800: '#434347',
                900: '#3B3B3E',
                950: '#252627',
            },

            green: {
                50: '#e8ecf3',
                100: '#d1d9e7',
                200: '#a3b3d0',
                300: '#8ca0c4',
                400: '#5d7aac',
                500: '#2f5495',
                600: '#184189',
                700: '#13346e',
                800: '#112e60',
                900: '#0c2145',
                950: '#071329',
            },

            'conveniat-green': '#184189',

            red: {
                50: '#FFF1F1',
                100: '#FFE4E4',
                200: '#FECDD0',
                300: '#FDA4A9',
                400: '#FB717C',
                500: '#F43F53',
                600: '#E11D3C',
                700: '#C41333',
                800: '#9F1230',
                900: '#881330',
                950: '#4C0514',
            },

            'cevi-red': '#C41333',

            blue: {
                50: '#e8ecf3',
                100: '#d1d9e7',
                200: '#a3b3d0',
                300: '#8ca0c4',
                400: '#5d7aac',
                500: '#2f5495',
                600: '#184189',
                700: '#13346e',
                800: '#112e60',
                900: '#0c2145',
                950: '#071329',
            },

            'cevi-blue': '#184189',

            white: colors.white,

            orange: {
                500: '#FFA500',
            },
        },
    },
};
