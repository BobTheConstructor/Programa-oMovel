import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// importando as paginas
import HomeScreen from './Paginas/Index';
import DetailScreen from './Paginas/Detail';
import LoginScreen from './Paginas/Login';
import ProfileScreen from './Paginas/Usuarios';
import RegisterScreen from './Paginas/Registro';
import RecuperarSenha from './Paginas/RecuperarSenha';
import EstoqueScreen from './Paginas/Estoque'; 

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Routes = () => {

  // MenuRodape (Bottom Tab Navigator)
  const MenuRodape = () => {
    return (
      <Tab.Navigator initialRouteName="Home" barStyle={{ backgroundColor: '#f7a700' }} activeColor="white" inactiveColor="black" backBehavior="initialRoute">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color }) => <MaterialIcons name="home" color={color} size={28} />,
          }}
        />
        <Tab.Screen
          name="Estoque"
          component={EstoqueScreen}
          options={{
            tabBarLabel: 'Estoque',
            tabBarIcon: ({ color }) => <MaterialIcons name="warehouse" color={color} size={28} />,
          }}
        />
        <Tab.Screen
          name="Usuario"
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => <MaterialIcons name="account-circle" color={color} size={28} />,
          }}
        >
          {() => (
            <ProfileScreen
              username={userData.username}
              password={userData.password}
              onUpdate={handleUpdate}
              userData={userData}
              onLogout={handleLogout}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      
      
       {/* Quando Se Logar apareça a primera pagina, show the main app stack with the bottom tab navigator*/}
        <Stack.Navigator initialRouteName="Login">
        
          <Stack.Screen
            name="PaginaPrincipal"
            component={MenuRodape}
            options={{
              headerTitle: () => null,
              cardStyle: { backgroundColor: 'transparent' },
              headerBackground: () => <Image style={{ height: '100%', width: '100%' }} source={require('../assets/Logo.png')} />,
            }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{
              headerTitleStyle: { fontFamily: 'KanitBold' },
              headerTitle: 'Voltar',
            }}
          />
          <Stack.Screen
            name="Registro"
            component={RegisterScreen}
            options={{
              headerTitle: () => null,
              cardStyle: { backgroundColor: 'transparent' },
            }}
          />
     
        {/*} If not logged in, show the login stack*/}
        
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="RecuperarSenha"
            component={RecuperarSenha}
            options={{
              headerTitleStyle: { fontFamily: 'KanitBold' },
              headerTitle: 'Voltar',
            }}
          />
        
        </Stack.Navigator>
      
      
    </NavigationContainer>
  );
};

export default Routes;
