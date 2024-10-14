import React from 'react';
import { View, TextInput, Text, StyleSheet, ViewComponent } from 'react-native';
import { ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

import Products from '../components/Products'

export default function HomeScreen() {
    const navigation = useNavigation();
    
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.inputArea}>
                <MaterialIcons
                    name="search" size={24} color="black"
                />
                <TextInput 
                placeholder="O que está Procurando"
                style={styles.input}
                />
                </View>
            </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 15}}>
            
            
            <Products
            cover={require('../../assets/PexStock.jpg')}
            description='dsadashhhhhdsassssssssdddddddddddddddddçççççççççççççççççççççççççççççççlll'
            value='4002,00'
            aperta={() => navigation.navigate('Detail')}
            />
            <Products
            cover={require('../../assets/Pex2.jpg')}
            description='dsadashhhhhdsa'
            value='4002,00'
            onPress={() => {}}
            />
            <Products
            cover={require('../../assets/Pex1.jpg')}
            description='dsadashhhhhdsa'
            value='4002,00'
            onPress={() => {}}
            />
            
            
        </ScrollView>
    </View>
        
    )
}

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
})