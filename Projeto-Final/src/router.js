import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './Paginas/Index';
import DetailScreen from './Paginas/Detail';
import StockScreen from './Paginas/Estoque';
import LoginScreen from './Paginas/Login';
import ProfileScreen from './Paginas/Usuarios';
import RecuperarSenha from './Paginas/RecuperarSenha'; // Importa a nova tela

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ username: 'user', password: 'password', role: 'user' });

  const handleLogin = (username, password, role) => {
    setIsLoggedIn(true);
    setUserData({ username, password, role });
  };

  const handleUpdate = (newUsername, newPassword) => {
    setUserData({ ...userData, username: newUsername, password: newPassword });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const MenuRodape = () => {
    return (
      <Tab.Navigator initialRouteName="Home" barStyle={{ backgroundColor: '#f7a700' }} activeColor="white" inactiveColor="black" backBehavior="initialRoute">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Index',
            tabBarIcon: ({ color }) => <MaterialIcons name="home" color={color} size={28} />,
          }}
        />
        <Tab.Screen
          name="Estoque"
          component={StockScreen}
          options={{
            tabBarLabel: 'Estoque',
            tabBarIcon: ({ color }) => <MaterialIcons name="warehouse" color={color} size={30} />,
          }}
        />
        <Tab.Screen
          name="Usuario"
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => <MaterialIcons name="account-circle" color={color} size={30} />,
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
      <Stack.Navigator initialRouteName={isLoggedIn ? "PaginaPrincipal" : "Login"}>
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
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
          initialParams={{ onLogin: handleLogin }} // Passa a função de login como parâmetro
        />
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
