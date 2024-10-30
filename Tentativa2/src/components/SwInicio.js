import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';

export default function SwiperInit(){
    return(
        <Swiper style={styles.outdoor}
        
        containerStyle={{ height: 300, flex: 0, borderColor:'black', borderWidth:0}}
        activeDotColor='#FFF'
        autoplay
        autoplayTimeout={5}
        
        dotStyle={{
            backgroundColor: '#000',
            borderColor: '#000',
            borderWidth: 1,
            width: 10,
            height: 10,
            borderRadius: 10,
        }}
        activeDotStyle={{
            borderColor: '#000',
            borderWidth: 1,
            width: 10,
            height: 10,
            borderRadius: 10,
        }}
        >
            <View style={styles.slide}>
             <Image
             source={require('../../assets/Pex1.jpg')}
             style={{ borderRadius:2, width:'100%', height: 300 }}
             />
            </View>

            <View style={styles.slide}>
             <Image
             source={require('../../assets/Pex2.jpg')}
             style={{ borderRadius:2, width:'100%', height: 300 }}
             />
            </View>

            <View style={styles.slide}>
             <Image
             source={require('../../assets/Pex3.jpg')}
             style={{ borderRadius:2, width:'100%', height: 300}}
             />
            </View>

        </Swiper>
    )
}

const styles = StyleSheet.create ({
    outdoor:{
    },
    slide:{
        flex:1,
        paddingTop:5,
        backgroundColor: '#FFF',
    }
})