import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Products({cover, description, value, aperta}) {
    return (
        <TouchableOpacity onPress={aperta} style={styles.container}>
            <View>
                <Image
                source={cover}
                style={styles.cover}
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.descrition}>
                    {description}
                </Text>
                <Text style={styles.price}>
                    R${value}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: 370,
        height: 100,
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
        width: 100,
        height: 88,
    },
    content:{
        width: '73%',
        paddingHorizontal: 10,
        justifyContent: 'flex-start',
        height: '80%',
    },
    descrition:{
        fontSize: 12,
        fontFamily: 'KanitRegular',

    },
    price:{
        fontSize: 15,
        fontFamily: 'KanitBold'
    }
})