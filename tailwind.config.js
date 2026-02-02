/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens:{
      ssm:'375px',
      sm:'640px',
      md:'768px',
      lg:'1024px',
    },
    extend: {
      animation: {
        borderAnimation: 'borderAnimation 8s ease-in-out infinite 1s',
        textShadow: {
          'outline': '6px 6px 0 #50b9d3', 
        },
      },
      keyframes:{
        borderAnimation:{
          '0%, 100%':{
            borderRadius:'60% 40% 30% 70%/60% 30% 70% 40%',
          },
          '50%':{
             borderRadius:'30% 60% 70% 40%/50% 60% 30% 60%',
          },
        }
      },
      boxShadow: {
        //customInset: 'inset 0 0 0 9px rgb(255, 255, 255 / 30%)',
    },
  },
  plugins: [   
  ],
  
}

}