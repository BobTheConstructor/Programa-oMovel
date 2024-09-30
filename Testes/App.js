import 'react-native-gesture-handler';
import React, {useEffect, useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

//import AboutScreen from './Paginas/Sobre';
//import HomeScreen from './Paginas/Index';
//import StockScreen from './Paginas/Estoque';
import Routes from './src/router';

//const BottomTab = createMaterialBottomTabNavigator();
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
      <StatusBar style="light" backgroundColor="#000" transLucent={false}   />
      <Routes />
    </>
    /*
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName='Home' barStyle={{backgroundColor: 'black'}} activeColor='orange'>
        <BottomTab.Screen name='Home' component={HomeScreen} options={{tabBarLabel: 'Index', tabBarIcon: ({color}) => ( <MaterialCommunityIcons name='home' color={color} size={25}/>)}} />
        <BottomTab.Screen name='Estoque' component={StockScreen} options={{tabBarLabel: 'Estoque', tabBarIcon: ({color}) => ( <MaterialCommunityIcons name='warehouse' color={color} size={25}/>)}} />
        <BottomTab.Screen name='Sobre' component={AboutScreen} options={{tabBarLabel: 'Informações', tabBarIcon: ({color}) => ( <MaterialCommunityIcons name='contacts' color={color} size={25}/>)}} />
      </BottomTab.Navigator>
    </NavigationContainer>
    */
  );
}