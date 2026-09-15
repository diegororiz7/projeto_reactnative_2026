import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Pressable,
    ActivityIndicator, FlatList
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/StatusBar_Styles';

export default function StatusBar_App(){

    const [corStatus, setCorStatus] = useState('black');
    const [oculto, setOculto] = useState(true);
    const [carregando, setCarregando] = useState(true);

    const [tarefas, setTarefas] = useState([
        {id: 1, titulo: 'Estudar React Native', concluida: false},
        {id: 2, titulo: 'Trabalho de Extensão', concluida: false},
        {id: 3, titulo: 'Simulado ENADE', concluida: false}
    ]);

    const [corIndicador, setCordIndicador] = useState('green');
    const [tamanhoIndicador, setTamanhoIndicador] = useState('large');  
    
    const alternarStatus = (id) => {
        setTarefas(tarefas.map(t =>
            t.id === id ?{...t, concluida: !t.concluida} : t
        ))
    }

    const removerTarefas = (id) => {
        setTarefas(tarefas.filter(t => 
            t.id !== id
        ))
    }

    return(
        <View style = {styles.container}>

        </View>
    );
}