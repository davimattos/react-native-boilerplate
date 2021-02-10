import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../styles/theme';

import Routes from './Routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </ThemeProvider>
  );
}
