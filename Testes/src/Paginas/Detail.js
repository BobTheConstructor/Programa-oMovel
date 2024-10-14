import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';

import SwiperComponent from '../components/Swiper';

export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.swiperCont}>
                <SwiperComponent />
            </View>
            <Text>Testes</Text>
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
})