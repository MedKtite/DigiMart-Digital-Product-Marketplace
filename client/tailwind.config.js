/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  screens: {
    'sm': '640px',

    'md': '765px',

    'lg': '1024px',

    'xl': '1280px',

    '2xl': '1536px',
  },

  	extend: {
  		colors: {
  			primary: {
  				'Dark-gray': '#181818',
  				'lighter-gray': '#282828',
  				'off-white': '#FAFAFB',
  				'light-gray': '#92929D',
  				'dark-blue': '#171F34',
  				'dark-slate': '#1C1C24',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				success: '#82C43C',
  				danger: '#FC5A5A',
  				'hade-blue': '#1E75FF',
  				purple: '#A461D8',
  				yellow: '#FFC542',
  				orange: '#FF974A',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},

  		},
  		fontFamily: {
  			poppins: ['Poppins', 'sans-serif'], // Custom class for Poppins
        	roboto: ['Roboto', 'sans-serif'],
  		},
  		fontSize: {
  			h1: ['36px', { lineHeight: '44px', fontWeight: '700', letterSpacing: '0.5px' }],
  			h2: ['30px', { lineHeight: '38px', fontWeight: '600', letterSpacing: '0.4px' }],
  			h3: ['24px', { lineHeight: '32px', fontWeight: '600', letterSpacing: '0.3px' }],
  			h4: ['20px', { lineHeight: '28px', fontWeight: '500', letterSpacing: '0.25px' }],
  			h5: ['16px', { lineHeight: '24px', fontWeight: '500', letterSpacing: '0.2px' }],
  			h6: ['14px', { lineHeight: '20px', fontWeight: '500', letterSpacing: '0.15px' }]
  		},

  	}
  },
  plugins: [],
}