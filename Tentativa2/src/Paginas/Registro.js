import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RegisterScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.symbol}></Text>
      <Text style={styles.price}>Current Price</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbol: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 24,
  },
});

export default RegisterScreen;