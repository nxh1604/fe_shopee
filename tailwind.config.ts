import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        "t-and-pc": { min: "1024px", max: "1279px" },
        "m-and-t": { max: "1023px" },
        tablet: { min: "740px", max: "1023px" },
        mobile: { max: "739px" },
        "small-mobile": { max: "560px" },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-shopee-l": "linear-gradient(to left, #f53d2d, #ff6533)",
        "gradient-shopee-r": "linear-gradient(to right, #f53d2d, #ff6533)",
        "gradient-shopee-t": "linear-gradient(to top, #f53d2d, #ff6533)",
        "gradient-shopee-b": "linear-gradient(to bottom, #f53d2d, #ff6533)",
      },
      colors: {
        primary: "#ff6533",
        hoverBgTextColor: "#fafafa",
        textColor: "#bdbdbd",
        primaryBgColor: "#f5f5f5",
        secondaryBgColor: "#ededed",
      },
    },
  },
  plugins: [],
};
export default config;
