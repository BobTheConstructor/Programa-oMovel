import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import HomeScreen from './Paginas/Index';
import DetailScreen from './Paginas/Detail';
import StockScreen from './Paginas/Estoque';
import LoginScreen from './Paginas/Login';
import LoginAdminScreen from './Paginas/AdminLogin';


const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();



function MenuRodape(){
    return( 
            <BottomTab.Navigator initialRouteName='Home' barStyle={{backgroundColor: '#f7a700'}} activeColor='white' inactiveColor='black'>
                    <BottomTab.Screen 
                        name='nome' 
                        component={HomeScreen} 
                        options={{tabBarLabel: 'Index', 
                        tabBarIcon: ({color}) => ( 
                        <MaterialIcons name='home' color={color} size={30}/>)}} 
                    />

                    <BottomTab.Screen
                        name='Estoque' 
                        component={StockScreen} 
                        options={{tabBarLabel: 'Estoque', 
                        tabBarIcon: ({color}) => ( 
                        <MaterialIcons name='warehouse' color={color} size={30}/>)}} 
                    />

                    <BottomTab.Screen 
                        name='Login' 
                        component={LoginScreen} 
                        options={{tabBarLabel: 'Usuario', 
                        tabBarIcon: ({color}) => ( 
                        <MaterialIcons name='account-circle' color={color} size={30}/>)}} 
                    />
          </BottomTab.Navigator>
    );
}

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Menu Principal'
                    component={MenuRodape}
                    options={{
                        headerTitle: () => (null),                     
                        headerBackground: () => 
                            <Image style={{height: 91, width: 408}} 
                            source={require('../assets/Logo.png')}/>,
                    }}
                />

                <Stack.Screen 
                    name="Detail" 
                    component={DetailScreen} 
                    options={{
                        headerTitleStyle:{fontFamily: 'KanitBold',},
                        headerTitle:'Voltar',
                    }}
                /> 
                
                <Stack.Screen 
                    name="LoginInfo" 
                    component={LoginAdminScreen} 
                    options={{
                        headerTitleStyle:{fontFamily: 'KanitBold',},
                        headerTitle:'Voltar',
                    }}
                /> 
            </Stack.Navigator> 
        </NavigationContainer>
    );
}



export default Routes;