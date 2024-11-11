import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

// importando as paginas
// import HomeScreen from './Paginas/Index';
import DetailScreen from './Paginas/Detail';
import LoginScreen from './Paginas/Login';
import ProfileScreen from './Paginas/Usuarios';
import RecuperarSenha from './Paginas/RecuperarSenha';
import EstoqueScreen from './Paginas/Estoque';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Verificar o estado de login ao carregar o aplicativo
    const checkLoginStatus = async () => {
      const user = await AsyncStorage.getItem('usuario');
      if (user) {
        setUserData(JSON.parse(user));
        setIsLoggedIn(true);
      }
    };

    checkLoginStatus();
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem('usuario');
    setUserData(null);
    setIsLoggedIn(false);
  };

  const MenuRodape = () => {
    return (
      <Tab.Navigator initialRouteName="Estoque" barStyle={{ backgroundColor: '#f7a700' }} activeColor="white" inactiveColor="black">
        {/*<Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color }) => <MaterialIcons name="home" color={color} size={28} />,
          }}
        />*/}
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
              userData={userData}
              onLogout={logout}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen
          name="PaginaPrincipal"
          component={MenuRodape}
          options={{
            headerTitle: () => null,
            cardStyle: { backgroundColor: 'transparent' },
            headerBackground: () => <Image style={{ height: '100%', width: '100%' }} source={require('../assets/Logo.png')} />,
          }}
        />
        {/*<Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerTitleStyle: { fontFamily: 'KanitBold' },
            headerTitle: 'Voltar',
          }}
        />*/}
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
