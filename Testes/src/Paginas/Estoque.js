import React from 'react';
import { View, TextInput, Text, StyleSheet, ViewComponent } from 'react-native';
import { ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

import Products from '../components/Products';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 15}}>
            <Products
             cover={require('../../assets/Pex1.jpg')}
             name="Primeira Imagen"
             onPress={() => navigation.navigate('Detail')}
            />
            <Products
             cover={require('../../assets/Pex1.jpg')}
             name="Primeira Imagen"
             onPress={() => navigation.navigate('Detail')}
            />
            <Products
             cover={require('../../assets/Pex1.jpg')}
             name="Primeira Imagen"
             onPress={() => navigation.navigate('Detail')}
            />
            <Products
             cover={require('../../assets/Pex1.jpg')}
             name="Primeira Imagen"
             onPress={() => navigation.navigate('Detail')}
            />
            <Products
             cover={require('../../assets/Pex1.jpg')}
             name="Primeira Imagen"
             onPress={() => navigation.navigate('Detail')}
            />
            <Products
             cover={require('../../assets/Pex1.jpg')}
             name="Primeira Imagen"
             onPress={() => navigation.navigate('Detail')}
            />
            <Products
             cover={require('../../assets/Pex1.jpg')}
             name="Primeira Imagen"
             onPress={() => navigation.navigate('Detail')}
            />
            <Products
             cover={require('../../assets/Pex1.jpg')}
             name="Primeira Imagen"
             onPress={() => navigation.navigate('Detail')}
            />
            <Products
             cover={require('../../assets/Pex1.jpg')}
             name="Primeira Imagen"
             onPress={() => navigation.navigate('Detail')}
            />
        </ScrollView>
    )
}