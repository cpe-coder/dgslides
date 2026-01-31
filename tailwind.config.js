/** @type {import('tailwindcss').Config} */
module.exports = {
   // NOTE: Update this to include the paths to all files that contain Nativewind classes.
   content: [
      './app/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
      './global.css'
   ],
   presets: [require('nativewind/preset')],
   theme: {
      extend: {
         colors: {
            primary: {
               DEFAULT: '#6B48FF',
               light: '#A78BFA',
               dark: '#7C3AED'
            },
            secondary: {
               DEFAULT: '#3B82F6',
               light: '#60A5FA'
            }
         }
      }
   },
   plugins: []
};
