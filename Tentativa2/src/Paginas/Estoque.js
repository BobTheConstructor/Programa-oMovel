import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

import Products from '../components/Products'

const StockScreen = ({ navigation }) => {
    const [stocks, setStocks] = useState([]);
            

  const sampleStocks = [
    { name: "Apple Inc.", symbol: "AAPL", price: 150.75 },
    { name: "Microsoft Corporation", symbol: "MSFT", price: 299.50 },
    { name: "Alphabet Inc.", symbol: "GOOGL", price: 2700.00 },
    { name: "Amazon.com, Inc.", symbol: "AMZN", price: 3345.00 },
    { name: "Tesla, Inc.", symbol: "TSLA", price: 737.50 },
    { name: "Meta Platforms, Inc.", symbol: "FB", price: 352.55 },
    { name: "NVIDIA Corporation", symbol: "NVDA", price: 220.00 },
    { name: "Berkshire Hathaway Inc.", symbol: "BRK.B", price: 286.33 },
    { name: "Johnson & Johnson", symbol: "JNJ", price: 175.00 },
    { name: "Visa Inc.", symbol: "Visa", price: 228.85 },
  ];

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        setStocks(sampleStocks);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchStocks();
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.inputArea}>
                <MaterialIcons
                    name="search" size={24} color="black"
                />
                <TextInput showsVerticalScrollIndicator='false'
                    placeholder="O que está Procurando"
                    style={styles.input}
                />
            </View>
        </View>
      <FlatList 
        data={stocks}
        keyExtractor={item => item.symbol}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('StockDetail', { stock: item })}>
            <View style={styles.item}>
              <Text style={styles.symbol}>{item.symbol}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      
      {/*<Button title='aperta ae' onPress={() => navigation.navigate('Login')} ></Button>*/}
      
    </View>

  );
};

const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 15,
    },
    inputArea:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#fff',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10,
    },
    input:{
        fontFamily: 'KanitRegular',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%',
        color: 'black',
    },
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    symbol: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
    },
})

export default StockScreen;