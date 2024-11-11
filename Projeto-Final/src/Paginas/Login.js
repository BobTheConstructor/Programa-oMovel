import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigation = useNavigation();

  const cadastrarUsuario = async () => {
    if (!username || !password) {
      Alert.alert('Erro', 'Por favor, insira um nome de usuário e senha');
      return;
    }

    try {
      // Verificar se o usuário já está cadastrado
      const storedUsername = await AsyncStorage.getItem('usuario');
      if (storedUsername === username) {
        Alert.alert('Erro', 'Este nome de usuário já está cadastrado');
        return;
      }

      // Salvar os dados do novo usuário
      const isAdminUser = username === 'JKMPneus' && password === 'Jkmadm3108';  // Checa se é admin
      await AsyncStorage.setItem('usuario', username);  
      await AsyncStorage.setItem('senha', password);
      await AsyncStorage.setItem('isAdmin', JSON.stringify(isAdminUser)); // Salva a informação de admin
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    } catch (e) {
      console.log('Erro ao cadastrar usuário', e);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o usuário');
    }
  };

  const fazerLogin = async () => {
    if (!username || !password) {
      Alert.alert('Erro', 'Por favor, insira um nome de usuário e senha');
      return;
    }

    try {
      const storedUsername = await AsyncStorage.getItem('usuario');  
      const storedPassword = await AsyncStorage.getItem('senha');
      const storedIsAdmin = await AsyncStorage.getItem('isAdmin');
      const isAdminUser = storedIsAdmin === 'true';  // Verifica se o usuário tem permissões especiais

      // Verifica se o usuário e senha são válidos
      if (storedUsername === username && storedPassword === password) {
        if (isAdminUser) {
          setIsAdmin(true);
          Alert.alert('Sucesso', 'Login realizado com sucesso! Você é um administrador.');
        } else {
          setIsAdmin(false);
          Alert.alert('Sucesso', 'Login realizado com sucesso!');
        }
        navigation.navigate('PaginaPrincipal');
      } else {
        Alert.alert('Erro', 'Nome de usuário ou senha incorretos, Caso não exista, Clique em "Cadastrar"');
      }
    } catch (e) {
      console.log('Erro ao fazer login', e);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Animatable.Image
          source={require('../../assets/JKM.png')}
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
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('RecuperarSenha')}>
            Esqueceu a Senha?
          </Text>
          <MaterialCommunityIcons
            name="account-question"
            size={40}
            color="black"
            onPress={() => navigation.navigate('RecuperarSenha')}
            style={styles.icon}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

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
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginLeft: 50,
    marginBottom: 20,
  },
  logoImage: {
    width: '150%',
  },
  formContainer: {
    padding: 30,
    width: '100%',
    backgroundColor: 'orange',
    borderTopRightRadius: 50,
    flex: 1,
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
    marginBottom: 5,
    borderTopWidth: 2,
    borderColor: 'black',
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 20,
    width: '88%',
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
});

export default LoginScreen;
