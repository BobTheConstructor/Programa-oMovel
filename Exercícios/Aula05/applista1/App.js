import React from 'react'; // Importa a biblioteca React para criar componentes.
import {
  SafeAreaView, // Componente que ocupa toda a área segura da tela.
  View, // Componente de contêiner básico.
  VirtualizedList, // Componente de lista otimizada para grandes conjuntos de dados.
  StyleSheet, // API para criar estilos.
  Text, // Componente de texto.
  StatusBar // Componente para gerenciar a barra de status.
} from 'react-native'; // Importa componentes do React Native.

const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0), // Gera um ID único para cada item.
  title: `Item ${index + 1}`, // Define o título do item.
});

const getItemCount = _data => 50; // Retorna o número de itens na lista.

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={[]}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App; 
