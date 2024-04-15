/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                light: "#B9DCC5",
                primary: "#1B7339",
            },
        },
    },
    plugins: [],
};
