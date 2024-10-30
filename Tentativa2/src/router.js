import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import HomeScreen from './Paginas/Index';
import DetailScreen from './Paginas/Detail';
import StockScreen from './Paginas/Estoque';
<<<<<<< HEAD
import LoginScreen from './Paginas/Login';
import LoginAdminScreen from './Paginas/AdminLogin';

=======
import AboutScreen from './Paginas/Sobre';
import LoginPage from './Paginas/Login';
import ClickableIcon from './Botoes/LoginButton';
>>>>>>> 0d713d33760dea1ddbe50589f504e345c6fd2bb5

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
<<<<<<< HEAD
          </BottomTab.Navigator>
    );
=======

                </BottomTab.Navigator>
    );  
>>>>>>> 0d713d33760dea1ddbe50589f504e345c6fd2bb5
}

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
<<<<<<< HEAD
                    name='Menu Principal'
                    component={MenuRodape}
                    options={{
                        headerTitle: () => (null),                     
                        headerBackground: () => 
                            <Image style={{height: 91, width: 408}} 
                            source={require('../assets/Logo.png')}/>,
                    }}
=======
                name='J'
                component={BotRoute}
                options={{
                    headerTitle: () => 
                            <Image style={{height: 55, width: 80, borderRadius:20, borderWidth:0.5,borderColor:'black'}} 
                            source={require('../assets/JKM.png')}/>,
                    headerRight: () => (
                        <ClickableIcon />
                    ),
                    headerStyle: {
                        backgroundColor:'orange'
                    }
                }} 
>>>>>>> 0d713d33760dea1ddbe50589f504e345c6fd2bb5
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
<<<<<<< HEAD
=======
                <Stack.Screen 
                name="Login" 
                component={LoginPage} 
                options={{
                    tittle: 'Acesse',
                    headerTitleStyle:{
                        fontFamily: 'KanitBold'
                    },
                }} 
                /> 

>>>>>>> 0d713d33760dea1ddbe50589f504e345c6fd2bb5
            </Stack.Navigator> 
        </NavigationContainer>
    );
}



export default Routes;