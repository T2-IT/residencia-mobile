import React,{useState} from 'react';
import { View, Button, Text, TextInput, ScrollView} from 'react-native';
import { adicionarProdutos} from '../src/data/produto_db'



function ProdutoCadastro() {
    const [nomeProduto, setNomeProduto] = useState();
      const [categoria, setCategoria] = useState();
      const [preco, setPreco] = useState();

    function salvarProduto(){
        //adicionar validacao de dados nulos
        adicionarProdutos(nome, descricao, preco)
    }


  return (
    <ScrollView>
      <TextInput
        placeholder="Nome produto"
        onChangeText={produto => {
        setNomeProduto(produto)
          
        }}></TextInput>
      <TextInput
        placeholder="Categoria"
        onChangeText={nCategoria => {
          setCategoria(nCategoria);
        }}></TextInput>
      <TextInput
        placeholder="Preço"
        onChangeText={nPreco => {
          setPreco(nPreco);
        }}></TextInput>
      <Button
        title="Cadastrar produto"
        onPress={() => { //salvarProduto
          setNomeProduto(salvarProduto);
        }}
      />
      <View>
        <Text>{nomeProduto}</Text>
        <Text>{categoria}</Text>
        <Text>{preco}</Text>
      </View>
    </ScrollView>
  );
}
export default ProdutoCadastro;