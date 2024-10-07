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

function BotRoute(){
    return( 
            <BottomTab.Navigator initialRouteName='Home' barStyle={{backgroundColor: 'orange'}} activeColor='white'>
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
                    headerTitle: () => 
                            <Image style={{height: 55, width: 80, borderRadius:20, borderWidth:0.5,borderColor:'black'}} 
                            source={require('../assets/JKM.png')}/>,
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <MaterialIcons 
                            name='account-circle'
                            color='black'
                            size={37}
                            />
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor:'orange'
                    }
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