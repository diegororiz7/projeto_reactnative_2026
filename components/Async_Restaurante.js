import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/Restaurante_Styles';

const STORAGE_KEY = '@AppRestaurante';

export default function Restaurante() {
  const [aberto, setAberto] = useState(false);
  const [prato, setPrato] = useState('');
  const [lista, setLista] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  async function recuperar(){
    const resposta = await AsyncStorage.getItem(STORAGE_KEY);
    if(resposta){
      const dados = JSON.parse(resposta);
      setLista(dados.lista || []);
      setAberto(dados.aberto || false);
    }
  }

  async function salvarLista(novaLista, status = aberto){
    setLista(novaLista);
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({lista: novaLista, aberto: status})
    );
  }

  async function adicionar(){
    if(!prato.trim()){
      Alert.alert('Atenção', 'Informe um prato!');
      return;
    }

    if(editandoId){
      const novaLista = lista.map(item =>
        item.id === editandoId
          ? {...item, nome: prato.trim()}
          : item
      );
      salvarLista(novaLista);
      setEditandoId(null);
    }else{
      const novo = {
        id: Date.now().toString(),
        nome: prato.trim(),
        ativo: false
      };
      const novaLista = [novo, ...lista];
      salvarLista(novaLista);
    }
    setPrato('');
  }

  function editar(item){
    setPrato(item.nome);
    setEditandoId(item.id);
  }

  function ativarPrato(id){
    const novaLista = lista.map(item => ({
      ...item,
      ativo: item.id === id
    }));
    salvarLista(novaLista);
  }

  function remover(id){
    const novaLista = lista.filter(
      item => item.id !== id 
    );
    salvarLista(novaLista);
  }

  function pratoAtivo(){
    const ativo = lista.find(item => item.ativo);
    return ativo ? ativo.nome : 'Não informado';
  }

  useEffect(() => {
    recuperar();
  },[]);

  return (
    <View style={styles.container}>
      <Text style = {styles.titulo}>Restaurante FASM</Text>

      <Text style = {styles.status}>Status: {aberto ? 'Aberto' : 'Fechado'}</Text>

      <Switch
        value = {aberto}
        onValueChange = {(value) => {
          setAberto(value);
          salvarLista(lista, value);
        }}
      />

      <Text style = {styles.text}>
        Prato do dia: {pratoAtivo()}
      </Text>

      <TextInput
        style = {styles.input}
        value = {prato}
        onChangeText = {setPrato}
        placeholder = 'Informe o prato'
      />

      <TouchableOpacity style = {styles.buttonAdd} onPress = {adicionar}>
        <Text style = {styles.buttonText}>
          {editandoId ? 'Salvar alteração' : 'Adicionar prato'}
        </Text>
      </TouchableOpacity>

      <FlatList
        data = {lista}
        keyExtractor = {(item) => item.id}
        style = {{width: '100%', marginTop: 20}}
        renderItem = {({item}) => (
          <View style = {styles.item}>
            <TouchableOpacity onPress = {() => ativarPrato(item.id)}>
              <Text style = {[
                styles.itemText,
                item.ativo && styles.itemAtivo
              ]}                
              >
                {item.nome}
              </Text>
            </TouchableOpacity>

            <View style = {styles.actions}>
              <TouchableOpacity onPress = {() => editar(item)}>
                <Text style = {styles.editar}>✏️</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress = {() => remover(item.id)}>
                <Text style = {styles.remover}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}


