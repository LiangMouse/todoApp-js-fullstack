/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // 确保这个路径能匹配到你所有使用 Tailwind 的文件
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }