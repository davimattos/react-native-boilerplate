import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import Routes from './Routes';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </SafeAreaView>
  );
}
