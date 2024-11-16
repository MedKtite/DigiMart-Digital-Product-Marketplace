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
  				'Black': '#2C3333',
  				'gray': '#B6BBC4',
  				'light-gray': '#F5F7F8',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'success': '#A8DF8E',
  				'danger': '#D83F31',
				'blue': '#00A9FF',
  				'yellow': '#F4CE14',
  				'orange': '#FF974A',
				'purple': '#D0A2F7',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},

  		},
		fontFamily: {
			'Roboto Slab': ['Roboto Slab', 'sans-serif'], 
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