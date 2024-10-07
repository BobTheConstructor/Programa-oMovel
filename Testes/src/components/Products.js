import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default function Products(props){
    return (
        <TouchableOpacity  onPress={props.onPress} style={styles.container}>
            <View style={styles.line}>
                <Image
                source={props.cover}
                style={styles.cover}
                />
                <View>
                    
                </View>

            <View>
                <Text style={styles.price}>R$ 8888,32</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
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
    cover:{
        width: 130,
        height: 50,
        borderRadius: 10,
        alignItems: 'flex-start',
    },
    price:{
        fontSize: 15,
        fontFamily: 'KanitBold',
    },
    line:{
        flexDirection: 'row',
    }
});