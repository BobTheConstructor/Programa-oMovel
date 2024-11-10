import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 300, height: 300 }}
        source={{
          uri: 'https://imagensfree.com.br/wp-content/uploads/2019/12/logo-estacio-vertical-com-sombra-1024x933.jpg',
        }}
      />
      <Text>Aplicativo de Login</Text>
      <TextInput style={styles.input} placeholder="Digite seu login" />
      <Button title='Login' onPress={() => alert('OK')} />
      <Text></Text>
      <Text style={{ textDecorationLine: 'underline', color: 'blue' }}>
        Esqueci meu login
      </Text>
      <Text></Text>
      <Button
        title='Entrar com Facebook'
        color='gray'
        onPress={() => alert('Acessando o Facebook...')}
      />
      <Text></Text>
      <Button
        title='Entrar com Google'
        color='gray'
        onPress={() => alert('Acessando o Google...')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
