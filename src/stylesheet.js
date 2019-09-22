import { css } from 'styled-components';

export const colorPalette = {
  background: '#eeeeee',
  contentBackground: '#f5f5f5',
  text: '#3a3a3a',
  primary: '#3569a4',
  primaryText: '#ffffff',
  secondary: '#21272b',
  secondaryText: '#ffffff'
};

export const thresholds = {
  large: '1200px'
};

export const fonts = {
  main: css`
    font-family: Noto Sans, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  `,
  h2: css`
    font-size: 30px;
  `,
  h1: css`
    font-size: 40px;
  `
};

export const fontSizes = {
  base: '18px'
};

export const radius = '3px';

export const Grid = size => `${size * 5}px`;
