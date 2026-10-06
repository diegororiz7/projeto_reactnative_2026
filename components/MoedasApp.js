import React, {useState, useEffect, useRef} from 'react';
import {
    View, Text, TextInput, Animated, Button,
    ActivityIndicator, TouchableWithoutFeedback, StyleSheet
}from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Conversor_Moedas(){
    const [valor, setValor] = useState('');
    const [de, setDe] = useState('USD');
    const [para, setPara] = useState('BRL');
    const [cotacao, setCotacao] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [carregando, setCarregando] = useState(false);

    const moedas = ['BRL', 'USD', 'EUR', 'CAD', 'ARS', 'JPY', 'BTC'];

    const inverterMoedas = () => {
        const temp = de;
        setDe(para);
        setPara(temp);
        setCotacao(null);
        setResultado(null);
    }

    const converterMoedas = async () => {
        if(!valor || isNaN(valor) || valor <= 0){
            alert('Informe um valor válido!');
            return;
        }

        setCarregando(true);
        setCotacao(null);
        setResultado(null);

        try{
            const response = await fetch(
                `https://economia.awesomeapi.com.br/json/last/${de}-${para}`
            );
            const data = response.json();
            const key = '${de}${para}';
            const taxa = parseFloat(data[key].bid);

            const valorConvertido = parseFloat(valor) * taxa;
            setResultado(valorConvertido.toFixed(2));
            setCotacao(taxa);
        }catch(error){
            console.error('Erro ao realizar a conversão', error);
        }finally{
            setCarregando(false);
        }
    }
    
    return(
        <View style={styles.container}>
           
        </View>
    );
}