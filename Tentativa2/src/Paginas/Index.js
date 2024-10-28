import React from 'react';
import { View, TextInput, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

import New from '../components/New'
import SwiperInit from '../components/SwInicio';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#fff', }}
        >                    

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


            <View style={styles.contentNew}>
                <Text style={styles.title}>Produtos Especificados</Text>
            </View>

            <TouchableOpacity style={[styles.containerPage,{marginLeft: 5}]}>
                <Image style={styles.cover} source={require('../../assets/Carro.jpg')}/>
                <Text style={styles.titlePages}>Carros</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.containerPage,{marginLeft: 100}]}>
                <Image style={styles.cover} source={require('../../assets/Pex3.jpg')}/>   
                <Text style={styles.titlePages}>Motos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.containerPage,{marginLeft: 5}]}>
                <Image style={styles.cover} source={require('../../assets/Pex1.jpg')}/>
                <Text style={styles.titlePages}>Caminhões</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={[styles.containerPage,{marginLeft: 100}]}>
                <Image style={styles.cover} source={require('../../assets/Bicicleta.jpg')}/>
                <Text style={styles.titlePages}>Bicicleta</Text>
            </TouchableOpacity>
            
        
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
    containerPage:{
        flexDirection: 'row',
        width: 300,
        height: 70,
        backgroundColor: '#fff',
        elevation: 3,
        marginVertical: 8,
        borderRadius: 15,
    },
    SwiperSt:{
        alignItems: 'top',
    },
    cover:{
        width: 130,
        height: 70,
        borderRadius: 10,
    },
    titlePages:{
        paddingHorizontal: 15,
        fontFamily: 'KanitBold',
        fontSize: 27,
        color: "black",
        marginTop:13,
        marginLeft:5,
    },

})