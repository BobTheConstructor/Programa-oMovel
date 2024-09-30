import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'


import HomeScreen from './Paginas/Index';
import Paginas from './Paginas/testes';
import StockScreen from './Paginas/Estoque';
import AboutScreen from './Paginas/Sobre';

const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

function BotRoute(){
    return( 
            <BottomTab.Navigator initialRouteName='Home' barStyle={{backgroundColor: 'black'}} activeColor='orange'>
                    <BottomTab.Screen 
                        name='nome' 
                        component={HomeScreen} 
                        options={{tabBarLabel: 'Index', 
                        tabBarIcon: ({color}) => ( 
                        <MaterialCommunityIcons name='home' color={color} size={25}/>)}} 
                    />

                    <BottomTab.Screen
                        name='Estoque' 
                        component={StockScreen} 
                        options={{tabBarLabel: 'Estoque', 
                        tabBarIcon: ({color}) => ( 
                        <MaterialCommunityIcons name='warehouse' color={color} size={25}/>)}} 
                    />

                    <BottomTab.Screen 
                        name='Sobre' 
                        component={AboutScreen} 
                        options={{tabBarLabel: 'Informações', 
                        tabBarIcon: ({color}) => ( 
                        <MaterialCommunityIcons name='contacts' color={color} size={25}/>)}} 
                    />

                </BottomTab.Navigator>
    );
}

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name='name'
                component={BotRoute}
                options={{
                    tittle: 'ALUGUE',
                    headerTitleStyle:{
                        fontFamily: 'KanitBold'
                    },

                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <MaterialCommunityIcons 
                            name='archive'
                            color='black'
                            size={37}
                            />
                        </TouchableOpacity>
                    )
                }} 
                />

                <Stack.Screen 
                name="Detail" 
                component={Paginas} 
                options={{
                    tittle: 'ALUGUE',
                    headerTitleStyle:{
                        fontFamily: 'KanitBold'
                    },

                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <MaterialCommunityIcons 
                            name='archive'
                            color='black'
                            size={37}
                            />
                        </TouchableOpacity>
                    )
                }} 
                /> 

            </Stack.Navigator> 
        </NavigationContainer>
    );
}



export default Routes;