import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import  Stars  from 'react-native-stars';

import SwiperComponent from '../components/SwInicio';

export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.swiperCont}>
                <SwiperComponent />
            </View>
            <View style={styles.headerContent}>
                <View style={{ width: '65%' }}>
                    <Text style={styles.texto}>Foto Aleatoria</Text>
                </View>
                
                <View style={{width: '35%'}}>
                    <Text style={styles.rating}>Avaliações</Text>
                    <View style={{alignItems: 'center', flexDirection: 'row'}}>
                        <Stars 
                            default={4}
                            count={5}
                            half={true}
                            starSize={20}
                            fullStar={<MaterialIcons name='star' size={24} style={styles.StarColor}/>}
                            emptyStar={<MaterialIcons name='star-outline' size={24} style={styles.StarColor}/>}
                            halfStar={<MaterialIcons name='star-half' size={24} style={styles.StarColor}/>}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff,'
    },
    swiperCont:{
        flexDirection: 'row',
        height: 340,
        width: '100%',
    },
    headerContent:{
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },  
    texto:{
        fontFamily: 'KanitBold',
        fontSize: 18,
        color: '#000'
    }, 
    rating:{
        fontFamily: 'KanitBold',
        fontSize: 9,
        color: '#000'
    },
    StarColor:{
        color: '#E7A74e',
        backgroundColor: 'transparent',
        textShadowColor: '#000',
        textShadowOffset: {width: 1, height: 1},
    },
})