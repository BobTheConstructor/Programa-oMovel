import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const { stock } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.symbol}>{stock.symbol}</Text>
      <Text style={styles.price}>Current Price: ${stock.price}</Text>
      
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

export default DetailScreen;