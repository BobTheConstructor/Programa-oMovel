import React, { useState } from 'react'; 
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation = useNavigation();

  // Função para cadastrar um novo usuário
  const cadastrarUsuario = async () => {
    if (!username || !password) {
      Alert.alert('Erro', 'Por favor, insira um nome de usuário e senha');
      return;
    }

    try {
      await AsyncStorage.setItem('usuario', username);  // Armazenando os dados
      await AsyncStorage.setItem('senha', password);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    } catch (e) {
      console.log('Erro ao cadastrar usuário', e);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o usuário');
    }
  };

  // Função para fazer login
  const fazerLogin = async () => {
    if (!username || !password) {
      Alert.alert('Erro', 'Por favor, insira um nome de usuário e senha');
      return;
    }

    try {
      const storedUsername = await AsyncStorage.getItem('usuario');  // Recuperando dados armazenados
      const storedPassword = await AsyncStorage.getItem('senha');

      if (storedUsername === username && storedPassword === password) {
        setIsLoggedIn(true);
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert('Erro', 'Nome de usuário ou senha incorretos');
      }
    } catch (e) {
      console.log('Erro ao fazer login', e);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login');
    }
  };

  // Função para deslogar
  const deslogar = () => {
    setIsLoggedIn(false);
    Alert.alert('Logout', 'Você foi deslogado com sucesso!');
  };

  return (
    <View style={styles.container}>
      {!isLoggedIn ? (
        <>
          <View style={styles.logoContainer}>
            <Animatable.Image
              source={require('../../assets/JKM.png')}  // Imagem do logo
              style={styles.logoImage}
              delay={200}
              animation="bounceIn"
              resizeMode="contain"
            />
          </View>
          <Animatable.View style={styles.formContainer} delay={400} animation="fadeInUp">
            <Text style={styles.title}>Cadastro/Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome de usuário"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText} onPress={cadastrarUsuario}>
                Cadastrar
              </Text>
              <MaterialCommunityIcons
                name="account-plus"
                size={40}
                color="black"
                onPress={cadastrarUsuario}
                style={styles.icon}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText} onPress={fazerLogin}>
                Login
              </Text>
              <MaterialCommunityIcons
                name="login"
                size={40}
                color="black"
                onPress={fazerLogin}
                style={styles.icon}
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('RecuperarSenha')}>
              <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </Animatable.View>
        </>
      ) : (
        <>
          <Text style={styles.title}>Bem-vindo, {username}!</Text>
          {/* Botão de logout */}
          <MaterialCommunityIcons
            name="logout"
            size={40}
            color="black"  
            onPress={deslogar}
            style={styles.logoutIcon}
          />
        </>
      )}
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', 
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    width: '80%',
    marginBottom: 40,
  },
  logoImage: {
    width: '100%',
  },
  formContainer: {
    padding: 20,
    width: '90%',
    backgroundColor: 'orange',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderTopWidth: 2,
    borderColor: 'black',
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 20,
    width: '90%',
    textAlign: 'center',
  },
  icon: {
    width: '18%',
    alignSelf: 'center',
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#007BFF',
    marginTop: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  logoutIcon: {
    position: 'absolute',
    top: 55,
    left: 25,
    backgroundColor: '#f7a700',
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default LoginScreen;
