import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505",
                surface: "#101010",
                primary: "#CCFF00", // Acid Green
                secondary: "#FF5F00", // Safety Orange
                muted: "#888888",
                border: "#333333",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                display: ["var(--font-oswald)", "sans-serif"],
                mono: ["var(--font-jetbrains)", "monospace"],
            },
            borderRadius: {
                none: "0px",
                sm: "0px",
                DEFAULT: "0px",
                md: "0px",
                lg: "0px",
                xl: "0px",
                "2xl": "0px",
                "3xl": "0px",
                full: "9999px", // Keep full for circular avatars if needed, but strictly 0 for cards
            },
            backgroundImage: {
                "noise": "url('/noise.png')", // We will need to add this asset or use a CSS generator
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
