import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

import New from '../components/New'

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#fff', }}
        >
            
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

            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
            <New
             cover={require('../../assets/Pex1.jpg')}
             name="Primeira Imagen"
             description="primerira imagem e tal"
             onPress={() => navigation.navigate('Detail')}
            />

            <New
             cover={require('../../assets/Pex2.jpg')}
             name="Segunda Imagen"
             description="Outra descrição pq tenq ter"
             onPress={() => {}}
            />

            <New
             cover={require('../../assets/Pex3.jpg')}
             name="Terceira Imagen"
             description="A terceira descrição, sla mano"
             onPress={() => {}}
            />
            
            </ScrollView>
            <View styles={styles.containerR}>
            </View>
            <View styles={styles.containerL}>
                <Text styles={styles.texto}>ajudame</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
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
    contentNew:{
        flexDirection: 'row',
        widht: '100%',
        alignItems: 'center',
    },
    title:{
        paddingHorizontal: 15,
        fontFamily: 'KanitBold',
        fontSize: 18,
        color: "black",
    },
    containerL:{
        marginTop: 20,
        backgroundColor: '#FFF',
        height: 250,
        width: 200,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5,
    },
    containerR:{
        marginTop: 12,
        backgroundColor: '#fff',
        height: 75,
        width: 370,
        elevation: 5,
        borderRadius: 10,
        padding: 15,
        marginRight: 15,
        marginLeft: 1,
        marginBottom: 5,
    },
})