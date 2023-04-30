/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./layouts/**/*.html",
        "./content/**/*.{html,md}",
        "./themes/hugo-tailwind-starter/layouts/**/*.html",
        "./themes/hugo-tailwind-starter/content/**/*.{html,md}",
        ],
    theme: {
        extend: {},
    },
    plugins: [],
}