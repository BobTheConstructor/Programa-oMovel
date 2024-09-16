import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AboutScreen from './Paginas/Sobre';
import HomeScreen from './Paginas/Index';
import StockScreen from './Paginas/Estoque';

const BottomTab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName='Home' barStyle={{backgroundColor: 'black'}} activeColor='orange'>
        <BottomTab.Screen name='Home' component={HomeScreen} options={{tabBarLabel: 'Index', tabBarIcon: ({color}) => ( <MaterialCommunityIcons name='home' color={color} size={25}/>)}} />
        <BottomTab.Screen name='Estoque' component={StockScreen} options={{tabBarLabel: 'Estoque', tabBarIcon: ({color}) => ( <MaterialCommunityIcons name='warehouse' color={color} size={25}/>)}} />
        <BottomTab.Screen name='Sobre' component={AboutScreen} options={{tabBarLabel: 'Informações', tabBarIcon: ({color}) => ( <MaterialCommunityIcons name='contacts' color={color} size={25}/>)}} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}