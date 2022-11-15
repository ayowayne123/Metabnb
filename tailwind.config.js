const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    

    
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '3rem',
      },
        
    },
    
    extend: {
      backgroundImage: {
        'pink-grad': "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);",
        
      },
      colors:{
        blacktext : '#434343',
        pinktext : '#A02279',
        },
        lineHeight: {
          '5xl': '78px',
        },

        fontSize: {
     
          'hero-main': '56px',
        },
        minheight:{
          card : '372px',
        },
      
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
  ],
}
