import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({ onLogin, storedUserData }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function IrPara({navigation}) {
    navigation.navigate('Details')
  }

  const handleLogin = () => {
    if (username === storedUserData.username && password === storedUserData.password) {
      onLogin(username, password);
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos');
    }  
  };

  return (
    <View style={styles.container}>
    <View style={styles.contLogo}>
      <Animatable.Image 
        source={require('../../assets/JKM.png')} 
        style={{width: '125%'}} 
        delay={200} animation="bounceIn" 
        resizeMode='contain'
      />

    </View>
    <Animatable.View style={styles.contForm} delay={400} animation="fadeInUp" >
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.botao}>
      <Text style={{width:'82%', fontSize:20}} onPress={IrPara}>Esqueceu Sua Senha?</Text>
      <MaterialCommunityIcons 
        name="arrow-right-circle" 
        size={65} color="black"
        onPress={handleLogin} 
        style={{width:'18%'}}
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
  contForm:{
    padding: 15, 
    flex: 1, 
    backgroundColor: 'orange',
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
  },
  botao:{
    flex:1,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    borderTopWidth:2,
    borderColor:'black',
  },
  contLogo:{
    justifyContent: 'center',
    height:'90%',
    width:'90%',
    flex: 2,
  }
});

export default LoginScreen;
