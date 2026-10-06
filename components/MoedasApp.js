import React, {useState, useEffect, useRef} from 'react';
import {
    View, Text, TextInput, Animated, Button,
    ActivityIndicator, TouchableWithoutFeedback, StyleSheet
}from 'react-native';
//Exeecutar no terminal npx expo install @react-native-picker/picker 
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/Moeda_Styles';

export default function Conversor_Moedas(){
    const [valor, setValor] = useState('');
    const [de, setDe] = useState('USD');
    const [para, setPara] = useState('BRL');
    const [cotacao, setCotacao] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [carregando, setCarregando] = useState(false);

    const moedas = ['BRL', 'USD', 'EUR', 'CAD', 'ARS', 'JPY', 'BTC', 
                    'RUB', 'INR', 'GBP', 'ILS', 'ETH', 'SOL'];

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
            const data = await response.json();
            const key = `${de}${para}`;
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
            <Text style = {styles.title}>Conversor de Moedas💲</Text>

            <View style = {styles.pickerContainer}>
                <Text style = {styles.label}>De: </Text>

                <Picker
                    style = {styles.picker}
                    selectedValue = {de}
                    onValueChange = {(itemValue) => setDe(itemValue)}
                >
                    {moedas.map((m) => (
                        <Picker.Item label = {m} value = {m} key = {m}/>
                    ))}
                </Picker>
            </View>

            <View style = {styles.pickerContainer}>
                <Text style = {styles.label}>Para: </Text>

                <Picker
                    style = {styles.picker}
                    selectedValue = {para}
                    onValueChange = {(itemValue) => setPara(itemValue)}
                >
                    {moedas.map((m) => (
                        <Picker.Item label = {m} value = {m} key = {m}/>
                    ))}
                </Picker>
            </View>

            <View style = {{marginVertical: 10, width: '80%'}}>
                <Button
                    title = 'Inverter moedas'
                    onPress = {inverterMoedas}
                />
            </View>

            <TextInput
                style = {styles.input}
                value = {valor}
                onChangeText = {setValor}
                keyboardType = 'numeric'
                placeholder = 'Informe o valor a ser convertido'
            />

            <View style = {{marginVertical: 10, width: '80%'}}>
                <Button
                    title = 'Converter valor'
                    onPress = {converterMoedas}
                />
            </View>

            {carregando && (
                <ActivityIndicator
                    size = 'large'
                    color = 'green'
                    animating = {true}
                    style = {{marginTop: 20}}
                />
            )}

            {resultado && cotacao && (
                <View style = {styles.resultBox}>
                    <Text style = {styles.resultLine}>
                        Valor digitado: {parseFloat(valor).toFixed(2)} {de}
                    </Text>

                    <Text style = {styles.resultLine}>
                        Cotação: 1 {de} = {cotacao.toFixed(4)} {para}
                    </Text>

                    <Text style = {styles.resultLine}>
                        Valor convertido: {resultado} {para}
                    </Text>
                </View>
            )}
        </View>
    );
}