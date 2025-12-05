/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                neonPurple: '#9B5CFF',
                darkPurple: '#3A1A5F',
                graphite: '#121212',
                steelGray: '#1F1F1F',
                neonTeal: '#4FFFD7',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}