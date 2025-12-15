console.log('[tailwind.config.js] loaded');

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}"
    ],
    safelist: [
        'bg-marine',
        'hover:bg-marineLight',
        'bg-marineLight'
    ],
    theme: {
        extend: {
            colors: {
                marine: { DEFAULT: "#003366" },
                marineLight: { DEFAULT: "#0a4d8c" }
            }
        }
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.bg-marine': { 'background-color': '#003366' },
                '.bg-marineLight': { 'background-color': '#0a4d8c' },
                '.hover\\:bg-marineLight:hover': { 'background-color': '#0a4d8c' }
            };
            addUtilities(newUtilities, { variants: ['responsive', 'hover'] });
        }
    ]
};

