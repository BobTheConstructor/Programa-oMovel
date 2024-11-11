// src/screens/EstoqueScreen.js
import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Componente de Estoque
const EstoqueScreen = () => {
  const [produtoNome, setProdutoNome] = useState('');
  const [produtoValor, setProdutoValor] = useState('');
  const [produtoMedida, setProdutoMedida] = useState('');
  const [produtoEstoque, setProdutoEstoque] = useState('');
  const [produtoTipo, setProdutoTipo] = useState('');
  const [itens, setItens] = useState([]);
  

  // Função para carregar os produtos do AsyncStorage
  const carregarProdutos = async () => {
    try {
      const produtosSalvos = await AsyncStorage.getItem('produtos');
      if (produtosSalvos !== null) {
        setItens(JSON.parse(produtosSalvos));
      }
    } catch (error) {
      console.log("Erro ao carregar os produtos:", error);
    }
  };

  // Função para salvar os produtos no AsyncStorage
  const salvarProdutos = async (produtos) => {
    try {
      await AsyncStorage.setItem('produtos', JSON.stringify(produtos));
    } catch (error) {
      console.log("Erro ao salvar os produtos:", error);
    }
  };

  // Função para adicionar um novo produto
  const adicionarProduto = () => {
    if (produtoNome && produtoValor && produtoEstoque && produtoMedida && produtoTipo) {
      const novoProduto = {
        id: itens.length + 1,
        nome: produtoNome,
        valor: parseFloat(produtoValor),
        Estocados: parseInt(produtoEstoque),
        Medida: parseFloat(produtoMedida),
        Tipo: produtoTipo
      };
      const novosItens = [...itens, novoProduto];
      setItens(novosItens);
      salvarProdutos(novosItens);  // Salvar os novos produtos no AsyncStorage
      // Limpar os campos após adicionar
      setProdutoNome('');
      setProdutoValor('');
      setProdutoEstoque('');
      setProdutoMedida('');
      setProdutoTipo('');
    } else {
      alert('Por favor, preencha todos os campos e selecione uma foto!');
    }
  };

  // Função para excluir um produto
  const excluirProduto = (id) => {
    const novosItens = itens.filter(item => item.id !== id);
    setItens(novosItens);
    salvarProdutos(novosItens);  // Salvar a lista de produtos atualizada no AsyncStorage
  };

  // Carregar os produtos ao iniciar o componente
  useEffect(() => {
    carregarProdutos();
  }, []);

  return (

    
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Adionar Um Produto</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          value={produtoNome}
          onChangeText={setProdutoNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Tamanho"
          value={produtoMedida}
          keyboardType="numeric"
          onChangeText={setProdutoMedida}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantidade no Estoque"
          value={produtoEstoque}
          keyboardType="numeric"
          onChangeText={setProdutoEstoque}
        />
        <TextInput
          style={styles.input}
          placeholder="Valor"
          value={produtoValor}
          keyboardType="numeric"
          onChangeText={setProdutoValor}
        />
        <Picker
        selectedValue={produtoValor}
        style={styles.picker}
        onValueChange={(produtoTipo) => setProdutoTipo(produtoTipo)}
        >
          <Picker.Item label="Carro" value="carro" />
          <Picker.Item label="Moto" value="moto" />
          <Picker.Item label="Caminhão" value="caminhao" />
          <Picker.Item label="Bicicleta" value="bicicleta" />
        </Picker>
        <Button title="Adicionar Produto" onPress={adicionarProduto} />
      </View>
      <Text style={styles.titulo}> Produtos Listados</Text>
      <View style={styles.listContainer}>
        {itens.length === 0 ? (
          <Text style={styles.emptyList}>Nenhum produto no estoque</Text>
        ) : (
          itens.map(item => (
            <Card key={item.id} style={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.nome}</Text>
                  <View style={{flexDirection: 'row',padding:5}}>
                  <Text style={(styles.productSize,{width:'65%'})}>Medida: {item.Medida}</Text>
                  <Text style={(styles.productSize,{width:'35%'})}>Estocados: {item.Estocados}</Text>
                  </View>
                  <View style={{flexDirection: 'row', padding:5}}>
                  <Text style={(styles.productPrice, {width:'65%'})}>Valor: R${item.valor.toFixed(2)}</Text>
                  <Text style={(styles.productSize,{width:'35%'})}>Tipo: {item.Tipo}</Text>
                  </View>
                  <TouchableOpacity onPress={() => excluirProduto(item.id)} style={styles.deleteButton}>
                    <Text style={styles.deleteButtonText}>Excluir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          ))
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  selectImageButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 4,
    marginBottom: 12,
    alignItems: 'center',
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  selectImageText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listContainer: {
    marginTop: 20,
  },
  emptyList: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
  titulo:{
    fontSize:25, 
    fontFamily: 'KanitBold', 
    alignSelf:'center', 
    paddingBottom:15,
  },
  //visual dos produtos
  card: {
    marginBottom: 12,
    padding: 16,
    borderRadius: 25,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productInfo: {
    width:'100%'
  },
  productName: {
    fontSize: 25,
    fontFamily: 'KanitBold',
  },
  productSize: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'KanitLight',
  },
  productPrice: {
    fontSize: 18,
    color: '#333',
    fontFamily: 'KanitRegular',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginTop: 10,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EstoqueScreen;
