import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
import svgToDataUri from 'mini-svg-data-uri';
// @ts-ignore
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#000000',
        blurple: '#5865f3',
        grey: '#23272A',
        darkgrey: '#0c1520',
        green: '#57F287',
        yellow: '#FEE75C',
        fuchsia: '#EB459E',
        red: '#ED4245',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#0c1520',
            primary: '#5966f3',
            success: '#57F287',
            secondary: '#50545c',
            danger: '#ED4245',
            warning: '#FEE75C',
          },
        },
      },
    }),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-dot-thick': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`,
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' },
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}

export default config;
