import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Ícones

const ProfileScreen = () => {
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('Rua Exemplo, Rocha Miranda, Rio de Janeiro');
  const [shopAddress, setShopAddress] = useState('R. João Vicente, 19 - Loja A - Oswaldo Cruz, Rio de Janeiro - RJ, 21340-250, Brasil');
  const [shopContact, setShopContact] = useState('+55 21 98289-8081');
  const [shopHours, setShopHours] = useState('Segunda a Sexta: 08:00 - 17:30, Sábado e Domingo: 08:00 - 14:00');
  const [newPassword, setNewPassword] = useState('');
  
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('usuario');
        if (storedUsername) {
          setUsername(storedUsername);
        } else {
          Alert.alert('Erro', 'Nenhum usuário encontrado');
        }
      } catch (e) {
        console.log('Erro ao carregar dados', e);
        Alert.alert('Erro', 'Ocorreu um erro ao carregar os dados do usuário');
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      Alert.alert('Sucesso', 'Você foi deslogado');
      setUsername(''); 
      navigation.navigate('Login'); // Navega para a tela de login após logout
    } catch (e) {
      console.log('Erro ao deslogar', e);
      Alert.alert('Erro', 'Ocorreu um erro ao deslogar');
    }
  };

  const handlePasswordReset = async () => {
    if (!newPassword) {
      Alert.alert('Erro', 'Por favor, insira uma nova senha');
      return;
    }

    try {
      await AsyncStorage.setItem('senha', newPassword);
      Alert.alert('Sucesso', 'Senha redefinida com sucesso!');
      setNewPassword('');  // Clear the input field after reset
    } catch (e) {
      console.log('Erro ao redefinir a senha', e);
      Alert.alert('Erro', 'Ocorreu um erro ao redefinir a senha');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.title}>Perfil do Usuário</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>Nome de Usuário: {username}</Text>
        </View>
        <Button title="Sair" onPress={handleLogout} />
      </View>

      {/* Seção de Informações da Loja */}
      <View style={styles.shopContainer}>
        <Text style={styles.title}>Informações da Loja</Text>
        
        <View style={styles.infoContainer}>
          <MaterialCommunityIcons name="map-marker" size={24} color="black" />
          <Text style={styles.text}>Endereço: {shopAddress}</Text>
        </View>
        
        <View style={styles.infoContainer}>
          <MaterialCommunityIcons name="phone" size={24} color="black" />
          <Text style={styles.text}>Contato: {shopContact}</Text>
        </View>

        <View style={styles.infoContainer}>
          <MaterialCommunityIcons name="clock" size={24} color="black" />
          <Text style={styles.text}>Horário de Funcionamento: {shopHours}</Text>
        </View>
      </View>

      {/* Password Reset Section */}
      <View style={styles.passwordResetContainer}>
        <Text style={styles.title}>Redefinir Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a nova senha"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TouchableOpacity onPress={handlePasswordReset} style={styles.resetButton}>
          <Text style={styles.buttonText}>Redefinir Senha</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileContainer: {
    padding: 30,
    marginTop: 20,
    width: '100%',
    backgroundColor: 'orange',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  shopContainer: {
    padding: 30,
    marginTop: 20,
    width: '100%',
    backgroundColor: 'lightblue',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'flex-start',
  },
  passwordResetContainer: {
    padding: 30,
    marginTop: 20,
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'KanitBold',
  },
  infoContainer: {
    width: '100%',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 15,
    flex: 1,
  },
  input: {
    height: 40,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  resetButton: {
    backgroundColor: '#f7a700',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ProfileScreen;
