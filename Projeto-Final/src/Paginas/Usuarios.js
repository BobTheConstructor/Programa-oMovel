import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({ username, password, onUpdate, userData, onLogout }) => {
  const [newUsername, setNewUsername] = useState(username);
  const [newPassword, setNewPassword] = useState(password);

  const handleUpdate = () => {
    onUpdate(newUsername, newPassword);
    Alert.alert('Sucesso', 'Credenciais atualizadas!');
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.conteudo}>
        <Text>Home Screen</Text>
        <Text>Usuário: {userData.username}</Text>
        <Text>Senha: {userData.password}</Text>
        <Text>Função: {userData.role}</Text> {/* Exibe a função do usuário */}
        <Button title="Logout" onPress={onLogout} />

        {userData.role === 'admin' && ( /* Verifica se o usuário é admin antes de mostrar as opções de administração */
          <View style={styles.change}>
            <TextInput
              placeholder="Novo Usuário"
              value={newUsername}
              onChangeText={setNewUsername}
              style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
            />
            <TextInput
              placeholder="Nova Senha"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
              style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
            />
            <Button title="Salvar" onPress={handleUpdate} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  conteudo: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  change: {
    paddingTop: 50,
  },
});

export default ProfileScreen;
