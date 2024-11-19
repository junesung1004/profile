/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dunggeunmo: ["DungGeunMo", "sans-serif"], // 'DungGeunMo' 폰트 추가
      },
    },
  },
  plugins: [],
};
