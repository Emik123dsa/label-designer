const path = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

const defaultTheme = require('tailwindcss/defaultTheme');

const defaultContent = [path.resolve('apps/**/*.{ts,tsx,html}')];

module.exports = {
  mode: 'jit',

  content: defaultContent.concat(
    createGlobPatternsForDependencies(
      path.join(__dirname, 'apps/label-designer/**/*.{ts,tsx,jsx,js,html}')
    )
  ),

  future: {
    standardFontWeights: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },

    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },

    space: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
    },

    borderRadius: {
      none: '0rem',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      full: '9999px',
    },

    borderColor: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',

      dark: {
        DEFAULT: 'var(--color-dark)',
      },
      white: {
        DEFAULT: 'var(--color-white)',
      },
    },

    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',

      dark: {
        DEFAULT: 'var(--color-dark)',
      },
      white: {
        DEFAULT: 'var(--color-white)',
      },
    },

    fontSize: {
      base: '1rem',
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1.5rem',
      lg: '1.75rem',
      xl: '2rem',
    },

    container: {
      center: true,
      padding: '1.5rem',
    },
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'group-disabled',
    'disabled',
  ],

  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
    },
  },

  plugins: [
    /* require('@tailwindcss/ui'),
       require('@tailwindcss/jit'), */
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-children'),
    require('tailwindcss-interaction-variants'),
  ],
};
