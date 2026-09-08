import React, {useState} from 'react';
import {View, ScrollView, Switch, Pressable, 
       Modal, Text, TextInput, Alert} from 'react-native';
import styles from '../styles/Temperatura_Styles';

export default function TemperaturaApp(){
    const [temperatura, setTemperatura] = useState('');
    const [modoFahrenheit, setModoFahrenheit] = useState(false);
    const [alerta, setAlerta] = useState(false);
    const [modal, setModal] = useState(false);
    const [historico, setHistorico] = useState([]);

    const celsiusFahrenheit = (temp) => {
        return (temp * 9) / 5 + 32;
    }

    const verificarTemperatura = () => {
        const temperaturaNum = parseFloat(temperatura);

        if(!isNaN(temperaturaNum)){
            verificarAlerta(temperaturaNum);

            if(historico[0] !== temperaturaNum){
                setHistorico([
                    temperaturaNum,
                    ...historico.slice(0,4)
                ]);
            }
        }else{
            Alert.alert('Erro', 'Informe um número válido!');
        }
    }

    const verificarAlerta = (temp) => {
        if(temp > 30){
            setAlerta(true);
            setModal(true);
        }else{
            setAlerta(false);
        }
    }

    const limpar = () => {
        setTemperatura('');
        setHistorico([]);
    }

    const temperaturaNum = parseFloat(temperatura);

    const temperaturaExibida = !isNaN(temperaturaNum)
    ? (modoFahrenheit ?
        celsiusFahrenheit(temperaturaNum).toFixed(1)
        : temperaturaNum.toFixed(1)
    )
    : '--';

    const unidadeTemp = modoFahrenheit ? '°F' :'°C';

    return(
        <ScrollView contentContainerStyle = {styles.container}>
            <Text style = {styles.titulo}>
                Controle de Temperatura
            </Text>

            <View style = {styles.card}>
                <Text style = {styles.pergunta}>
                    Qual a temperatura atual?
                </Text>

                <TextInput
                    style = {styles.input}
                    value = {temperatura}
                    onChangeText = {setTemperatura}
                    keyboardType = 'numeric'
                    onBlur = {verificarTemperatura}
                />

                <Text style = {styles.temp}>{temperaturaExibida}{unidadeTemp}</Text>
            </View>

            <Text style = {styles.texto}>Alternar para Fahrenheit</Text>

            <Switch
                value = {modoFahrenheit}
                onValueChange = {setModoFahrenheit}
                thumbColor = {modoFahrenheit ? 'green' : 'red'}
                trackColor = {modoFahrenheit ? 'green' : 'red'}
            />

            <View style = {styles.botoes}>
                <Pressable
                    style = {styles.botao}
                    onPress = {verificarTemperatura}
                    onLongPress = {limpar}
                >
                    <Text>Clique para Verificar / Segure para Limpar</Text>
                </Pressable>
            </View>

            <Text style = {styles.subtitulo}>Histórico</Text>

            {historico.map((item, index) => (
                <Text key = {index} style = {styles.itemHistorico}>
                    {item}°C
                </Text>
            ))}

            <Modal
              animationType = 'slide'
              transparent = {true}
              visible = {alerta && modal}
            >
                <View style = {styles.modalContainer}>
                    <View style = {styles.modalCard}>
                        <Text style = {styles.modalTitulo}>Calor intenso</Text>

                        <Text style = {styles.modalTexto}>Beba água</Text>
                        <Text style = {styles.modalTexto}>Use protetor solar</Text>
                        <Text style = {styles.modalTexto}>Evite exposição ao sol</Text>

                        <Pressable
                          style = {styles.botaoFechar}
                          onPress = {() => setModal(false)}
                        >
                            <Text style = {styles.textoBotao}>Fechar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}