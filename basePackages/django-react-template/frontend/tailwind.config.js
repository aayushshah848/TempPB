module.exports = {
    // Purging: See https://tailwindcss.com/docs/optimizing-for-production
    content: [
        './src/**/*.{js,jsx,ts,tsx,mdx}',
        './static/main.js',
    ],
    darkMode: 'class', // Only use dark mode manually (i.e. never for now)
    theme: {
        fontFamily: {
            sans: ['proximanova', 'sans-serif']
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}