import React from 'react';
import renderer from 'react-test-renderer';
import theme from '../../styles/theme';
import { ThemeProvider } from 'styled-components/native';

export function renderWithTheme(component: React.ReactNode) {
  return renderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>,
  );
}
