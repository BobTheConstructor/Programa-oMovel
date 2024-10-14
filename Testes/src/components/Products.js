import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Products() {
    return (
        <View style={styles.container}>
            <View>
                <Image
                source={require('../../assets/Pex3.jpg')}
                style={styles.cover}
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.descrition}>
                    está é uma descrição e tals tlg
                </Text>
                <Text style={styles.price}>
                    543,55R$
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: 260,
        height: 70,
        backgroundColor: '#fff',
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: 20,
        marginLeft: 2,
        borderRadius: 10,
    },
    cover:{
        borderRadius: 10,
        width: 60,
        height: 60,
    },
    content:{
        width: '65%',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        height: '100%',
    },
    descrition:{
        fontSize: 9,
        fontFamily: 'KanitRegular',
    },
    price:{
        fontSize: 12,
        fontFamily: 'KanitBold'
    }
})