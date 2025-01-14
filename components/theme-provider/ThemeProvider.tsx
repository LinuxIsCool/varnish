import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { Theme, VarnishTheme } from '../varnish/Theme';

// eslint-disable-next-line import/prefer-default-export
export const ThemeProvider = (props: {
  theme?: VarnishTheme;
  children: React.ReactNode | React.ReactNodeArray;
}) => {
  const vTheme = props.theme || Theme.default;

  return (
    <SCThemeProvider theme={vTheme}>
      <>{props.children}</>
    </SCThemeProvider>
  );
};
