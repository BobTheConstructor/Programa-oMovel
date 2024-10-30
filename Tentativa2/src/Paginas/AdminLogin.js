import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginAdminScreen = ({ route }) => {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Information</Text>
      <Text style={styles.info}>Welcome, {username}!</Text>
      {/* Adcionar mais informações */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  info: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default LoginAdminScreen;