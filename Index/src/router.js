import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity, Image, ImageBackground } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import HomeScreen from './Paginas/Index';
import Detail from './Paginas/Detail';
import StockScreen from './Paginas/Estoque';
import AboutScreen from './Paginas/Sobre';
import LoginScreen from './Paginas/Login';


const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();



function MenuRodape(){
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
                name='Menu Principal'
                component={MenuRodape}
                header
                options={{
                    headerTitle: () => 
                            <ImageBackground style={{height: 50, width: 375, borderRadius:20, borderWidth:0.5,borderColor:'black'}} 
                            source={require('../assets/JKM.png')}/>,
                    headerStyle: {
                        backgroundColor:'orange'
                    }
                }} 
                />

                <Stack.Screen 
                name="Detail" 
                component={Detail} 
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

                <Stack.Screen 
                name="Login" 
                component={LoginScreen} 
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