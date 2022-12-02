/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        commisioner: "'Commissioner', sans-serif",
      },
      backgroundImage: {
        registration: `url('https://images.unsplash.com/photo-1609188944094-394637c26769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')`,
        login: `url('https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`,
      },
    },
  },
  plugins: [],
};
