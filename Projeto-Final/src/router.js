import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importando as páginas
import HomeScreen from './Paginas/Index';
import DetailScreen from './Paginas/Detail';
import LoginScreen from './Paginas/Login';
import ProfileScreen from './Paginas/Usuarios';
import RecuperarSenha from './Paginas/RecuperarSenha';
import EstoqueScreen from './Paginas/Estoque';

// Contexto de autenticação
import { useAuth } from './context/AuthContext';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Routes = () => {
  const { isLoggedIn, login, logout, userData } = useAuth();  // Usando o contexto para obter o estado de login e dados do usuário

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
              username={userData?.username}
              password={userData?.password}
              onUpdate={() => console.log("Update Profile")}  // Se necessário, adicione uma função de atualização de perfil
              userData={userData}
              onLogout={logout}  // Função de logout vindo do contexto
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