import React, {useState, useEffect, useRef} from 'react';
import {
    View, Text, TextInput, Animated, Button,
    ActivityIndicator, TouchableWithoutFeedback, StyleSheet
}from 'react-native';
//import { Picker } from '@react-native-picker/picker';

export default function Conversor_Moedas(){
    const [valor, setValor] = useState('');
    const [de, setDe] = useState('USD');
    const [para, setPara] = useState('BRL');
    const [cotacao, setCotacao] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [carregando, setCarregando] = useState(false);

    const moedas = ['BRL', 'USD', 'EUR', 'CAD', 'ARS', 'JPY', 'BTC'];
    
    return(
        <View style={styles.container}>
           
        </View>
    );
}