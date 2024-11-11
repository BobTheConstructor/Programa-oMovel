import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para gerar a senha aleatória
const gerarSenhaAleatoria = (tamanho = 8) => {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let senha = '';
  for (let i = 0; i < tamanho; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indice];
  }
  return senha;
};

const RecuperarSenha = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const handlePasswordReset = async () => {
    if (!username) {
      Alert.alert('Erro', 'Por favor, insira seu nome de usuário para redefinir a senha');
      return;
    }

    try {
      // Recupera o nome de usuário armazenado no AsyncStorage
      const storedUsername = await AsyncStorage.getItem('usuario');
      
      if (storedUsername === username) {
        const novaSenha = gerarSenhaAleatoria(10); // Gera uma senha aleatória com 10 caracteres
        await AsyncStorage.setItem('senha', novaSenha);
        Alert.alert('Sucesso', `Senha redefinida para: ${novaSenha}. Por favor, altere-a após o login.`);
        navigation.goBack(); // Retorna à tela de login
      } else {
        Alert.alert('Erro', 'Usuário não encontrado');
      }
    } catch (e) {
      console.log('Erro ao redefinir senha', e);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar redefinir a senha');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contLogo}>
        <Animatable.Image
          source={require('../../assets/JKM.png')}
          style={{ width: '125%' }}
          delay={200}
          animation="bounceIn"
          resizeMode='contain'
        />
      </View>
      <Animatable.View style={styles.contForm} delay={400} animation="fadeInUp">
        <Text style={styles.title}>Recuperar Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          value={username}
          onChangeText={setUsername}
        />
        <View style={styles.button}>
          <Button title="Enviar" onPress={handlePasswordReset} color='#000'/>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white', 
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  contForm: {
    padding: 15,
    flex: 1,
    backgroundColor: 'orange',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    shadowColor: '#000', 
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  contLogo: {
    justifyContent: 'center',
    height: '90%',
    width: '90%',
    flex: 2,
  },
});

export default RecuperarSenha;
