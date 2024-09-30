import * as React from 'react';
import { View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [];

const getItems = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index+1}`
});

const getItemsCount = (data) => 100;

const Item = ({ title }) => (
    <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    </View>
);

function AboutScreen() {
    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Tela Sobre</Text>
            <VirtualizedList
         data={DATA}
         initialNumToRender={4}
         renderItem={({ item }) => <Item title={item.title} />}
         keyExtractor={item => item.key}
         getItemCount={getItemsCount}
         getItem={getItems}
         />
        </View>
    );
}

 const styles = StyleSheet.create({
     container: {
     flex: 1,
     marginTop: StatusBar.currentHeight,
     },
     item: {
     backgroundColor: '#0000ff',
     height: 100,
     justifyContent: 'center',
     marginVertical: 8,
     marginHorizontal: 16,
     padding: 10,
     },
     title: {
     fontSize: 22,
     },
 });

export default AboutScreen;