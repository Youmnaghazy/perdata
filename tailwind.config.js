/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),


  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ]

  ,
}

