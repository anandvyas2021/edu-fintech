import { mtConfig } from "@material-tailwind/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        ".flowbite-react\\class-list.json",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui"],
            },
        },
    },
    plugins: [mtConfig],
};
