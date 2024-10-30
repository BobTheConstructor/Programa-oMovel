import React from 'react';
<<<<<<< HEAD
import { View, Text, StyleSheet, Image } from 'react-native';
=======
import { View, TextInput, Text, StyleSheet, Image } from 'react-native';
>>>>>>> 0d713d33760dea1ddbe50589f504e345c6fd2bb5
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import SwiperInit from '../components/SwInicio';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#FFF', }}>                    

            <View style={styles.content}>
                <Text style={styles.title}>Novidades</Text>
            </View>
<<<<<<< HEAD

            <SwiperInit/>

            <View style={[styles.content,{borderBottomWidth:2}]}>
                <Text style={styles.title}>Acesso Direto</Text>
            </View>
=======
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
            <New
             cover={require('../../assets/Pex1.jpg')}
             name="Primeira Imagen"
             description="primerira imagem e tal"
             onPress={() => navigation.navigate('Detail')}
            />
>>>>>>> 0d713d33760dea1ddbe50589f504e345c6fd2bb5


            <TouchableOpacity style={[styles.escolhas, {marginLeft: 75,}]} onPress={() => ({})}>  
                <Image source={require('../../assets/Pex1.jpg')} style={styles.cover}/> 
                <Text style={styles.texto}>Carros</Text>
                <MaterialCommunityIcons name='car-side' color='black' size={30} style={{paddingVertical:20, paddingRight:10}}/>
            </TouchableOpacity>

<<<<<<< HEAD
            <TouchableOpacity style={styles.escolhas} onPress={() => ({})}> 
                <Image source={require('../../assets/Pex1.jpg')} style={styles.cover}/>    
                <Text style={styles.texto}>Motos</Text>
                <MaterialCommunityIcons name='motorbike' color='black' size={30} style={{paddingVertical:20, paddingRight:10}}/>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.escolhas, {marginLeft: 75,}]} onPress={() => ({})}>
                <Image source={require('../../assets/Pex1.jpg')} style={styles.cover}/>     
                <Text style={styles.texto}>Caminhões</Text>
                <MaterialCommunityIcons name='truck' color='black' size={30} style={{paddingVertical:20, paddingRight:10}}/>
            </TouchableOpacity>
           

            <TouchableOpacity style={styles.escolhas} onPress={() => ({})}>
                <Image source={require('../../assets/Pex1.jpg')} style={styles.cover}/>     
                <Text style={styles.texto}>Bicicletas</Text>
                <MaterialCommunityIcons name='bike' color='black' size={30} style={{paddingVertical:20, paddingRight:10}}/>
            </TouchableOpacity>
=======

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
            
>>>>>>> 0d713d33760dea1ddbe50589f504e345c6fd2bb5
        
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
        width: 325,
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
<<<<<<< HEAD
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
=======
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

>>>>>>> 0d713d33760dea1ddbe50589f504e345c6fd2bb5
})