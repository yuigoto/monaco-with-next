'use client';

import { PaletteColorOptions, createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';
import { getColors } from 'theme-colors';

const INTER_FONT = Inter({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  display: 'swap',
});

export const COLOR_PRIMARY = "#335a9f";
export const COLOR_SECONDARY = "#729fcf";

export const COLOR_ERROR = '#cc0000';
export const COLOR_WARNING = '#edd400';
export const COLOR_INFO = '#3465a4';
export const COLOR_SUCCESS = '#73d216';
export const COLOR_WHITE = '#f7f9fc';
export const COLOR_BLACK = '#1d1d1d';

export const THEME_DRAWER_WIDTH = 280;

/**
 * Local helpers, used to generate colors for the theme.
 *
 * @param color
 *     RGB HEX color to generarte shades from
 * @param name
 *     Color name, all lowercase and preferably dash-separated
 * @param solidColor
 *     Solid color used as contrast for text
 * @returns
 */
function getColorData(
  color: string,
  solidColor: string = COLOR_WHITE
): PaletteColorOptions {
  const colors = getColors(color) as PaletteColorOptions;

  return {
    ...colors,
    main: color,
    contrastText: solidColor,
    light: (colors as any)?.['300'],
    dark: (colors as any)?.['700'],
  };
}

const DefaultTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: getColorData(COLOR_PRIMARY, COLOR_WHITE),
    secondary: getColorData(COLOR_SECONDARY, COLOR_WHITE),
    error: getColorData(COLOR_ERROR, COLOR_WHITE),
    warning: getColorData(COLOR_WARNING, COLOR_BLACK),
    info: getColorData(COLOR_INFO, COLOR_WHITE),
    success: getColorData(COLOR_SUCCESS, COLOR_BLACK),
  },
  typography: {
    fontFamily: INTER_FONT?.style?.fontFamily,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 300,
      lineHeight: 1.25,
    },
    subtitle2: {
      fontSize: '0.9rem',
      fontWeight: 500,
      lineHeight: 1.25,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 300,
      textTransform: 'uppercase',
    },
  },
});

export default DefaultTheme;
