import React from 'react';

/**
 * Theme Context Constants.
 * @export
 * @enum {number}
 */
export enum ThemeContextConstants {
  DARK = 'dark',
  LIGHT = 'light',
}

/**
 * Theme Context Type.
 *
 * @export
 * @interface ThemeContextType
 */
export interface ThemeContextTypes {
  themes: Record<
    ThemeContextConstants,
    {
      colors: {
        primary: string;
      };
      fonts: {
        primary: string;
      };
    }
  >;
}

/**
 * Theme Context Type Factory.
 *
 * @export
 * @class ThemeContextTypeFactory
 */
export class ThemeContextTypeFactory {
  /**
   * Creates an instance of theme context factory.
   * Will be used for default value only.
   *
   * @static
   * @param  {ThemeContextType} [type=ThemeContextConstants.LIGHT]
   * @return ThemeContextType
   * @memberof ThemeContextTypeFactory
   */
  public static create(
    theme: ThemeContextConstants = ThemeContextConstants.LIGHT
  ): ThemeContextTypes {
    return {
      themes: {
        light: {
          fonts: {
            primary: 'var(--fonts-primary)',
          },
          colors: {
            primary: 'var(--colors-primary)',
          },
        },
        dark: {
          fonts: {
            primary: 'var(--dark-fonts-primary)',
          },
          colors: {
            primary: 'var(--dark-colors-primary)',
          },
        },
      },
    };
  }
}

export const ThemeContext: React.Context<ThemeContextTypes> =
  React.createContext<ThemeContextTypes>(ThemeContextTypeFactory.create());
