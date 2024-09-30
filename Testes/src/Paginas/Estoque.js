import * as React from 'react';
 import { View, Text, StyleSheet, FlatList, StatusBar, Button} from 'react-native';


 const DADOS = [
    {
    id: '3',
    descricao: 'TV Led 49',
    categoria_id: 2
    },
    {
    id: '2',

    descricao:  'on',

    categoria_id: 3
    },
    {
    id: '1',
    descricao: 'Qualquer semelhança é mera coincidência',
    categoria_id: 1
    },
];

const Item = ({ descricao }) => (
    <View style={styles.item}>
    <Text style={styles.title}>{descricao} </Text>
    </View>
);

function StockScreen() {

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Tela Estoque</Text>
             <View style={styles.container}>
                <FlatList
                    data={DADOS}
                    renderItem={({item}) => <Item descricao={item.descricao} />}
                    keyExtractor={item => item.id}
                />
             </View>
        </View>

        
    ;
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    },
    item: {
    backgroundColor: 'lightblue',
    padding: 20,
    height: 100,
    marginVertical: 8,
    marginHorizontal: 16,
    },
    title: {
    fontSize: 12,
    },
});

export default StockScreen;