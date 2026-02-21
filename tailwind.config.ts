import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        light: 'var(--light)',
        foreground: 'var(--foreground)',
        blog: {
          bg: 'var(--blog-bg)',
          'bg-card': 'var(--blog-bg-card)',
          border: 'var(--blog-border)',
          text: 'var(--blog-text)',
          'text-muted': 'var(--blog-text-muted)',
          'text-soft': 'var(--blog-text-soft)',
          accent: 'var(--blog-accent)',
        },
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: '#000000',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        // ===== Planet of Metal reference design tokens =====
        'pom-accent': 'var(--pom-accent)',
        'pom-accent-alt1': 'var(--pom-accent-alt1)',
        'pom-accent-alt2': 'var(--pom-accent-alt2)',
        'pom-accent-alt3': 'var(--pom-accent-alt3)',
        'pom-accent-alt4': 'var(--pom-accent-alt4)',
        'pom-accent-alt5': 'var(--pom-accent-alt5)',
        'pom-surface': 'var(--pom-surface)',
        'pom-footer': 'var(--pom-footer)',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        // Reference site (planetofmetal.com) font system
        'big-shoulders': ['var(--font-big-shoulders)', '"Big Shoulders Display"', 'sans-serif'],
        'noto-sans': ['var(--font-noto-sans-jp)', '"Noto Sans JP"', 'Helvetica Neue', 'Arial', 'sans-serif'],
        // Alias: 'display' maps to the bold display font system
        display: ['var(--font-big-shoulders)', '"Big Shoulders Display"', 'var(--font-outfit)', 'Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'pulse-slower': 'pulse-slow 6s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'ping-slow': 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-10px) translateX(5px)' },
          '66%': { transform: 'translateY(-5px) translateX(-5px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.1)' },
        },
        'ping-slow': {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        }
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
}

export default config