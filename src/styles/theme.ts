import normalize from 'utils/normalize';

export default {
  border: {
    radius: 4,
  },
  font: {
    // family:
    //   "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: `${normalize(12)}px`,
      small: `${normalize(14)}px`,
      medium: `${normalize(16)}px`,
      large: `${normalize(18)}px`,
      xlarge: `${normalize(20)}px`,
      xxlarge: `${normalize(28)}px`,
    },
  },
  colors: {
    primary: '#F231A5',
    secondary: '#3CD3C1',
    mainBg: '#06092B',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
  },
  spacings: {
    xxsmall: 8,
    xsmall: 16,
    small: 24,
    medium: 32,
    large: 40,
    xlarge: 48,
    xxlarge: 56,
  },
};
