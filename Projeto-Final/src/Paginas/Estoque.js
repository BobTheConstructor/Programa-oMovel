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
  const [isAdmin, setIsAdmin] = useState(false); // Para verificar se o usuário é administrador
  
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

  // Função para verificar se o usuário é administrador
  const verificarUsuario = async () => {
    try {
      const usuario = await AsyncStorage.getItem('usuario'); // Aqui você verifica se o usuário é admin
      if (usuario && JSON.parse(usuario).role === 'admin') {
        setIsAdmin(true);
      }
    } catch (error) {
      console.log("Erro ao verificar o usuário:", error);
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
    if (isAdmin) {
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
        alert('Por favor, preencha todos os campos!');
      }
    } else {
      alert('Você não tem permissão para adicionar produtos.');
    }
  };

  // Função para excluir um produto
  const excluirProduto = (id) => {
    if (isAdmin) {
      const novosItens = itens.filter(item => item.id !== id);
      setItens(novosItens);
      salvarProdutos(novosItens);  // Salvar a lista de produtos atualizada no AsyncStorage
    } else {
      alert('Você não tem permissão para excluir produtos.');
    }
  };

  // Carregar os produtos e verificar o login do usuário ao iniciar o componente
  useEffect(() => {
    carregarProdutos();
    verificarUsuario();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Adicionar Um Produto</Text>
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
          selectedValue={produtoTipo}
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
      <Text style={styles.titulo}>Produtos Listados</Text>
      <View style={styles.listContainer}>
        {itens.length === 0 ? (
          <Text style={styles.emptyList}>Nenhum produto no estoque</Text>
        ) : (
          itens.map(item => (
            <Card key={item.id} style={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.nome}</Text>
                  <View style={{flexDirection: 'row', padding: 5}}>
                    <Text style={(styles.productSize, {width: '65%'})}>Medida: {item.Medida}</Text>
                    <Text style={(styles.productSize, {width: '35%'})}>Estocados: {item.Estocados}</Text>
                  </View>
                  <View style={{flexDirection: 'row', padding: 5}}>
                    <Text style={(styles.productPrice, {width: '65%'})}>Valor: R${item.valor.toFixed(2)}</Text>
                    <Text style={(styles.productSize, {width: '35%'})}>Tipo: {item.Tipo}</Text>
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

});

export default EstoqueScreen;
