import 'react-native-gesture-handler';
import React, {useEffect, useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';


import Routes from './src/router';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'KanitBold': require('./assets/fonts/KanitBold.ttf'),
    'KanitLight': require('./assets/fonts/KanitLight.ttf'),
    'KanitRegular': require('./assets/fonts/KanitRegular.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" transLucent={true}   />
      <Routes />
    </>
  );
}