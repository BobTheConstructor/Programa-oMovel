import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Swiper from '../components/TrocaFotos';


export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#FFF', }}>                    

            <View style={styles.content}>
                <Text style={styles.title}>Novidades</Text>
            </View>


            <Swiper/>

            <View style={[styles.content,{borderBottomWidth:2}]}>
                <Text style={styles.title}>Acesso Direto</Text>
            </View>



            <TouchableOpacity style={styles.escolhas} onPress={() => ({})}>  
                <Image source={require('../../assets/Pex1.jpg')} style={styles.cover}/> 
                <Text style={styles.texto}>Carros</Text>
                <MaterialCommunityIcons name='car-side' color='black' size={30} style={{paddingVertical:20, paddingRight:10}}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.escolhas} onPress={() => ({})}> 
                <Image source={require('../../assets/Pex1.jpg')} style={styles.cover}/>    
                <Text style={styles.texto}>Motos</Text>
                <MaterialCommunityIcons name='motorbike' color='black' size={30} style={{paddingVertical:20, paddingRight:10}}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.escolhas} onPress={() => ({})}>
                <Image source={require('../../assets/Pex1.jpg')} style={styles.cover}/>     
                <Text style={styles.texto}>Caminhões</Text>
                <MaterialCommunityIcons name='truck' color='black' size={30} style={{paddingVertical:20, paddingRight:10}}/>
            </TouchableOpacity>
           

            <TouchableOpacity style={styles.escolhas} onPress={() => ({})}>
                <Image source={require('../../assets/Pex1.jpg')} style={styles.cover}/>     
                <Text style={styles.texto}>Bicicletas</Text>
                <MaterialCommunityIcons name='bike' color='black' size={30} style={{paddingVertical:20, paddingRight:10}}/>
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
    escolhas:{
        flexDirection: 'row',
        width: '98%',
        height: 70,
        backgroundColor: '#f7a700',
        elevation: 2,
        marginVertical: 7,
        marginRight: 20,
        marginLeft: 2,
        borderRadius: 10,
        borderColor:'black',
        borderWidth:1,
    },
    content:{
        flexDirection: 'row',
        widht: '100%',
        alignItems: 'center',
        borderBottomColor:'black',
    },
    title:{
        paddingHorizontal: 15,
        fontFamily: 'KanitBold',
        fontSize: 25,
        color: "black",
    },
    cover:{
        height:'100%',
        width:100,
        borderRadius:5,
        borderColor:'black',
        borderWidth:1,
    },
    texto:{
        fontSize:30,
        padding:10,
        paddingLeft:20,
        fontFamily:'KanitBold',
    }
})