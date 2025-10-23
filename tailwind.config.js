/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Based on your design's yellow/gold accent
          'brand-yellow': '#f5b50a', 
        },
        fontFamily: {
          // A clean sans-serif font similar to the design
          sans: ['Poppins', 'sans-serif'], 
        },
        backgroundImage: {
          // Placeholders for your header backgrounds
          'hero-bg': "url('https://placehold.co/1920x1080/000/333?text=Wedding+Hero+BG')",
          'about-bg': "url('https://placehold.co/1920x500/000/333?text=About+Page+BG')",
          'video-bg': "url('https://placehold.co/1920x500/000/333?text=Video+Page+BG')",
          'services-bg': "url('https://placehold.co/1920x500/000/333?text=Services+Page+BG')",
          'contact-bg': "url('https://placehold.co/1920x500/000/333?text=Contact+Page+BG')",
          'packages-bg': "url('https://placehold.co/1920x500/000/333?text=Packages+Page+BG')",
          'testimonials-bg': "url('https://placehold.co/1920x500/000/333?text=Testimonials+BG')",
          'portfolio-bg': "url('https://placehold.co/1920x500/000/333?text=Portfolio+BG')",
        }
      },
    },
    plugins: [],
  }