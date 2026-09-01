import React, { useState } from 'react';
import {View, Text, Image, ScrollView, Button} from 'react-native';
import styles from '../styles/Playlist_Styles';

function PlaylistItem({musica, banda, imagem, alternarContador}){
    const [ligado, setLigado] = useState(false);

    function alternarMusica(){
        if(ligado){
            alternarContador((valor) => valor - 1);
            //setLigado(ligado => false);
        }else{
            alternarContador((valor) => valor + 1);
            //setLigado(ligado => true)
        }
        setLigado(!ligado);
    }

    return(
        <View style = {styles.card}>
            <Image
                source = {imagem}
                style = {styles.imagem}
            />

            <Text style = {styles.musica}>{musica}</Text>
            <Text style = {styles.banda}>{banda}</Text>

            <Text style = {[styles.status, 
                {color: ligado ? 'green' : 'red'}
            ]}>
                {ligado ? 'Tocando' : 'Parado'}
            </Text>

            <View style = {styles.botao}>
                <Button
                    onPress = {alternarMusica}
                    title = {ligado ? 'Pause' : 'Play'}
                    color = {ligado ? 'red' : 'green'}
                />
            </View>
        </View>
    );
}

export default function PlaylistApp(){

    const musicas = [
        {
            musica: 'Evidencias',
            banda: 'Chitãozinho e Xororó',
            imagem: require('../source/images/cx.jpg'),
            //imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chit%C3%A3ozinho_%26_Xoror%C3%B3_-_Tom_Brasil_%2836014882534%29.jpg/250px-Chit%C3%A3ozinho_%26_Xoror%C3%B3_-_Tom_Brasil_%2836014882534%29.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'
        },
        {
            musica: '3 X 4',
            banda: 'Engenheiros do Hawaii',
            imagem: require('../source/images/eng_haw.jpg'),
            //imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Engenheiros_do_Hawaii_forma%C3%A7%C3%A3o_GLM_na_d%C3%A9cada_de_80.jpg/330px-Engenheiros_do_Hawaii_forma%C3%A7%C3%A3o_GLM_na_d%C3%A9cada_de_80.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'
        },
        {
            musica: 'Toda cor',
            banda: 'Titãs',
            imagem: require('../source/images/titas.png'),
            //imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Tit%C3%A3s_2019.png/330px-Tit%C3%A3s_2019.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'
        }
    ];

    const [tocando, setTocando] = useState(0);

    return(
        <View style = {styles.container}>
            <ScrollView contentContainerStyle = {styles.scroll}>
                <Text style = {styles.titulo}>Rádio FASM</Text>

                <Text style = {styles.contador}>Tocando agora: {tocando}</Text>

                {musicas.map((musicas, index) => (
                    <PlaylistItem
                        key = {index}
                        musica = {musicas.musica}
                        banda = {musicas.banda}
                        imagem = {musicas.imagem}
                        alternarContador = {setTocando}
                    />
                ))}
            </ScrollView>
        </View>
    );
}