import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './Paginas/Index';
import Paginas from './Paginas/testes';
import StockScreen from './Paginas/Estoque';
import AboutScreen from './Paginas/Sobre';

const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

function LogoTitle() {
    //<Image {{height: 50, width: 50}} source={require:}
    <MaterialCommunityIcons name='unreal' color='black' size={25} />

}

function BotRoute(){
    return( 
            <BottomTab.Navigator initialRouteName='Home' barStyle={{backgroundColor: 'black'}} activeColor='orange'>
                    <BottomTab.Screen 
                        name='nome' 
                        component={HomeScreen} 
                        options={{tabBarLabel: 'Index', 
                        tabBarIcon: ({color}) => ( 
                        <MaterialIcons name='home' color={color} size={25}/>)}} 
                    />

                    <BottomTab.Screen
                        name='Estoque' 
                        component={StockScreen} 
                        options={{tabBarLabel: 'Estoque', 
                        tabBarIcon: ({color}) => ( 
                        <MaterialIcons name='warehouse' color={color} size={25}/>)}} 
                    />

                    <BottomTab.Screen 
                        name='Sobre' 
                        component={AboutScreen} 
                        options={{tabBarLabel: 'Informações', 
                        tabBarIcon: ({color}) => ( 
                        <MaterialIcons name='info' color={color} size={25}/>)}} 
                    />

                </BottomTab.Navigator>
    );
}

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name='J'
                component={BotRoute}
                options={{
                    
                    headerTitle: () => (
                    //<LogoTitle />
                    <MaterialCommunityIcons name='unreal' color='orange' size={35} />
                    ),

                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <MaterialIcons 
                            name='account-circle'
                            color='orange'
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
                            <MaterialIcons 
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