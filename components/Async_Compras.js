import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert
} from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/Compras_Styles';

const STORAGE_KEY = '@AppComprasValor';

export default function ListaCompras() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [lista, setLista] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
 
  return (
    <View style={styles.container}>
     
    </View>
  );
}