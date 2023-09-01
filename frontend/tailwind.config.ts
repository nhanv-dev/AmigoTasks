/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  plugins: [
    nextui()
  ],
  theme: {
    extend: {
      colors: {

        // ─── PRIMARY COLOR ────────────────────────────────────

        'primary': '#0083ff',
        'primary-hover': '#346BA0',
        'primary-bg': '#dfe7f6',
        'primary-bg-hover': '#CDD8EC',

        'dark-primary': ' ',
        'dark-primary-hover': ' ',
        'dark-primary-bg': ' ',
        'dark-primary-bg-hover': ' ',

        'green': '#00D68F',
        'organe': '#FFA500',
        'red': '#FF3D71',

        // ─── THEME BACKGROUND COLOR ────────────────────────────────────

        'background': 'white',
        'dark-background': '#1F2937',
        'background-50': 'rgb(241, 245, 249)',
        'dark-background-50': '#0F172A',

        // ─── THEME TEXT COLOR ────────────────────────────────────

        'text': 'rgb(31,41,55)',
        'dark-text': 'white',
        'text-50': 'rgb(75,85,99)',
        'dark-text-50': 'rgb(156,163,175)',

        // ─── THEME BORDER COLOR ────────────────────────────────────

        'border': 'rgb(229, 231, 235)',
        'dark-border': 'rgb(55, 65, 81)',
        // 'border-50': 'rgb(75,85,99)',
        // 'dark-border-50': 'rgb(156,163,175)',


      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'base': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'tiny': '0 -2px 8px 0 rgb(0 0 0 / 10%), 0 4px 8px 0 rgb(0 0 0 / 10%)'
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      'xs': '.7rem',
      'sm': '.775rem',
      'md': '.85rem',
      'base': '1rem',
      'lg': '1.1rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
  variants: {},

}
export default config
