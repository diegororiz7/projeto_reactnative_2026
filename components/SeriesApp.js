import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, 
        FlatList, TextInput, Button} from 'react-native';
import styles from '../styles/Series_Styles';

export default function SeriesApp(){

    const [series, setSeries] = useState([
        {
            id: '1',
            nome: 'Friends',
            ano: 1994,
            imagem: require('../source/images/friends.png'),
            visto: false,
            curtido: false
        },
        {
            id: '2',
            nome: 'Breaking Bad',
            ano: 2005,
            imagem: require('../source/images/breaking.png'),
            visto: false,
            curtido: false
        },
        {
            id: '3',
            nome: 'Lost',
            ano: 2004,
            imagem: require('../source/images/lost.png'),
            visto: false,
            curtido: false
        }
    ]);

    const [nome, setNome] = useState('');
    const [ano, setAno] = useState('');

    const adicionarSerie = () => {
        if(!nome.trim() && !ano.trim()){
            alert('Informe o nome e ano da série!');
            return;
        }

        const novaSerie = {
            id: Date.now().toString(),
            nome,
            ano,
            imagem: require('../source/images/sem_imagem.png'),
            visto: false,
            curtido: false
        }

        setSeries([...series, novaSerie]);
        setNome('');
        setAno('');
    }

    const removerSerie = (id) => {
        setSeries(series.filter(s =>
            s.id !== id
        ))
    }

    const curtirSerie = (id) => {
        setSeries(series.map(s =>
            s.id === id ? {...s, curtido: !s.curtido} : s           
        ))
    }

    const vistoSerie = (id) => {
        setSeries(series.map(s => 
            s.id === id ? {...s, visto: !s.visto} : s
        ))
    }

    const renderItem = ({item}) => (
        <View style = {[styles.card,
            item.visto && {backgroundColor: '#d5f5e3'}
        ]}>
            <Image
                source = {item.imagem}
                style = {styles.imagem}
                resizeMode= 'contain'
            />

            <Text style = {styles.nome}>{item.nome}</Text>
            <Text style = {styles.ano}>{item.ano}</Text>

            {item.visto && (
                <Text style = {styles.visto}>✔Já assisti</Text>
            )}

            <View style = {styles.acoes}>
                <TouchableOpacity                    
                    onPress={() => curtirSerie(item.id)}
                >
                    <Text style = {styles.icone}>{item.curtido ? '❤️' : '🤍'}</Text>
                </TouchableOpacity>

                <TouchableOpacity                    
                    onPress={() => removerSerie(item.id)}
                >
                    <Text style = {styles.icone}>🗑</Text>
                </TouchableOpacity>

                <TouchableOpacity                    
                    onPress={() => vistoSerie(item.id)}
                >
                    <Text style = {styles.icone}>✔</Text>
                </TouchableOpacity>
            </View>
        </View>
    )   

    return(
        <View style = {styles.container}>
            <Text style = {styles.titulo}>FASM Flix</Text>

            <FlatList
                data = {series}
                keyExtractor = {(item) => item.id}
                renderItem = {renderItem}
                contentContainerStyle = {{paddingBottom: 20, alignItems: 'center'}}
            />

            <TextInput
                style = {styles.input}
                value = {nome}
                onChangeText = {setNome}
                placeholder = 'Informe o nome'
            />

            <TextInput
                style = {styles.input}
                value = {ano}
                onChangeText = {setAno}
                placeholder = 'Informe o ano'
                keyboardType = 'numeric'
            />

            <Button title = 'Adicionar série' onPress = {adicionarSerie} />
        </View>
    );
}