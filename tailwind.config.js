/** @type {import('tailwindcss').Config} */
const { screens } = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using src directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./functions/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
		extend: {
			fontFamily: {
				serif: ["var(--font-inter)"],
			},
			colors: {
				primary: "#00693d",
				primarylight: "#00a862",
				secondary: "#26272b",
			},
			backgroundImage: {
				categories: "url('/background-Images/categories-bg.jpg')",
				contact: "url('/background-Images/contact-bg.jpg')",
				home: "url('/background-Images/home-bg.jpg')",
			},
			boxShadow: {
				'customA': '0 0 10px -3px rgb(0 0 0 / 0.1), 0 0px 6px -4px rgb(0 0 0 / 0.1);',
				'customB': '0 0 15px -3px rgb(0 0 0 / 0.2), 0 0px 6px -4px rgb(0 0 0 / 0.2);',
				'customC': '0 2px 7px rgba(0, 0, 0, .04);',
			},
			screens: {
				'custom-sm': '485px',
				'custom-lg': '991px',
				'xl2': '1300px',
			},
		},
	},
//   theme: {
//     screens: {
//       xs: "400px",
//       xxl: "1536px",
//       ...screens,
//     },
//     extend: {

//       fontFamily: {
//         kufi: ["Noto Kufi Arabic", "sans-serif"],
//         ibm: ['IBM Plex Sans Arabic', 'sans-serif']
//       },
//       colors: {
//         primary: "#171F49",
//       },

//       animation : {
// marquee : "marquee 30s linear  infinite",

// marquee2 : "marquee2  50s linear  infinite "


//       }

//       ,

//       keyframes : {

//         marquee : {

//           "0%" : {transform :"translateX(50%)"},
//           "100%" : {transform :"translateX(-300%)"},


//         }
// ,
//         marquee2 :{
//           "0%" : {transform :"translateX(100%)"},
//           "100%" : {transform :"translateX(0%)"},


//         }

//       }


//     },
//   },


  plugins: [],
}