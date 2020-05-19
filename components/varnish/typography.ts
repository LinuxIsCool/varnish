import { spacing } from './spacing';
import { color } from './colors';
import { fontWeight } from './fontWeight';

// general
const defaultFontSize = '16px';
const defaultFontFamily = 'Lato';
const fontWeightRegular = fontWeight.regular;
const fontWeightBold = fontWeight.bold;
const fallbackDefaultFonts = [
  '"Helvetica Neue"',
  'Helvetica',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  '"PingFang SC"',
  '"Hiragino Sans GB"',
  '"Microsoft YaHei"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];
const fallbackDefaultCodeFonts = [
  'SFMono-Regular',
  'Consolas',
  '"Liberation Mono"',
  'Menlo',
  'Courier',
  'monospace',
];

// headlines
const headlineFontFamily = defaultFontFamily;
const h1 = {
  fontFamily: [headlineFontFamily, ...fallbackDefaultFonts].join(', '),
  fontSize: '46px',
  lineHeight: 50 / 46,
  fontWeight: fontWeightBold,
};
const h2 = {
  fontFamily: [headlineFontFamily, ...fallbackDefaultFonts].join(', '),
  fontSize: '36px',
  lineHeight: 40 / 36,
  fontWeight: fontWeightBold,
};
const h3 = {
  fontFamily: [headlineFontFamily, ...fallbackDefaultFonts].join(', '),
  fontSize: '30px',
  lineHeight: 36 / 30,
  fontWeight: fontWeightBold,
};
const h4 = {
  fontFamily: [headlineFontFamily, ...fallbackDefaultFonts].join(', '),
  fontSize: '24px',
  lineHeight: 28 / 24,
  fontWeight: fontWeightBold,
};
const h5 = {
  fontFamily: [headlineFontFamily, ...fallbackDefaultFonts].join(', '),
  fontSize: '18px',
  lineHeight: 22 / 18,
  fontWeight: fontWeightBold,
};
const h6 = {
  fontFamily: [headlineFontFamily, ...fallbackDefaultFonts].join(', '),
  fontSize: '13px',
  lineHeight: 18 / 13,
  fontWeight: fontWeightRegular,
};

// body
const bodyFontFamily = defaultFontFamily;
const bodyJumbo = {
  fontFamily: [bodyFontFamily, ...fallbackDefaultFonts].join(', '),
  fontSize: '24px',
  lineHeight: 36 / 24,
};
const bodyBig = {
  fontFamily: [bodyFontFamily, ...fallbackDefaultFonts].join(', '),
  fontSize: '18px',
  lineHeight: 27 / 18,
};
const body = {
  fontFamily: [bodyFontFamily, ...fallbackDefaultFonts].join(', '),
  fontSize: '16px',
  lineHeight: 22 / 16,
};
const bodyBold = {
  fontFamily: body.fontFamily,
  fontSize: body.fontSize,
  lineHeight: body.lineHeight,
  fontWeight: fontWeightBold,
};
const bodySmall = {
  fontFamily: [bodyFontFamily, ...fallbackDefaultFonts].join(', '),
  fontSize: '14px',
  lineHeight: 20 / 14,
};
const bodySmallBold = {
  fontFamily: bodySmall.fontFamily,
  fontSize: bodySmall.fontSize,
  lineHeight: bodySmall.lineHeight,
  fontWeight: fontWeightBold,
};
const bodyMicro = {
  fontFamily: [bodyFontFamily, ...fallbackDefaultFonts].join(', '),
  fontSize: '13px',
  lineHeight: 18 / 13,
};
const notification = {
  fontFamily: [bodyFontFamily, ...fallbackDefaultFonts].join(', '),
  fontSize: '14px',
  lineHeight: 18 / 14,
};
const notificationBold = {
  fontFamily: notification.fontFamily,
  fontSize: notification.fontSize,
  lineHeight: notification.lineHeight,
  fontWeight: fontWeightBold,
};

// attribution
const attributionFontFamily = 'Volkhov';
const quote = {
  fontFamily: [attributionFontFamily, ...fallbackDefaultFonts].join(', '),
  fontSize: '30px',
  lineHeight: 42 / 30,
  fontWeight: fontWeightRegular,
};
const author = {
  fontFamily: [attributionFontFamily, ...fallbackDefaultFonts].join(', '),
  fontSize: '18px',
  lineHeight: 36 / 18,
};

// code
const codeFontFamily = 'Roboto Mono';
const code = {
  fontFamily: [codeFontFamily, ...fallbackDefaultCodeFonts].join(', '),
  fontSize: '13px',
  lineHeight: 18 / 13,
  contrastBackgroundColor: color.N10,
  contrastColor: color.N5,
  padding: spacing.lg,
};

export function getFontImportsURL() {
  const defaultFont = `${defaultFontFamily}:${[fontWeight.regular, fontWeight.bold].join(',')}`;
  const attrFont = `${attributionFontFamily}:${[fontWeight.regular, fontWeight.bold].join(',')}`;
  const codeFont = `${codeFontFamily}:${[fontWeight.regular, fontWeight.bold].join(',')}`;
  return `https://fonts.googleapis.com/css?family=${[defaultFont, attrFont, codeFont].join('|')}`;
}

export const typography = {
  // general
  fontSize: defaultFontSize,
  fontFamily: defaultFontFamily,
  fontWeightRegular,
  fontWeightBold,

  // headlines
  headlineFontFamily,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,

  // body
  bodyJumbo,
  bodyBig,
  body,
  bodyBold,
  bodySmall,
  bodySmallBold,
  bodyMicro,
  notification,
  notificationBold,

  // attribution
  attributionFontFamily,
  quote,
  author,

  // code
  codeFontFamily,
  code,
};