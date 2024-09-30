import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default function Products(props){
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <View>
                <View>

                </View>
            </View>

            <View style={{width: '80%'}}>
                <Text style={styles.price}>R$ 8888,32</Text>
            </View>

            <View style={{width: '20%'}}>
                <MaterialIcons name='add-circle' size={24} color='black' />
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
});