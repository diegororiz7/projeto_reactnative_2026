import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/NBA_Styles';

function NBAProps(props){

    let cidade = props.cidade;

    return(
        <View style = {styles.card}>
            <Image
                style = {styles.imagem}
                //source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/250px-Los_Angeles_Lakers_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'}}
                source = {props.imagem}
            />

            <View>
                <Text style = {[styles.time, {color: props.cor}]}>
                    {props.time}
                </Text>

                <Text style = {styles.texto}>Títulos: {props.titulos}</Text>

                <Text style = {styles.texto}>Cidade: {cidade}</Text>
            </View>
        </View>
    );
}

export default function NBAApp(){

    const Celtics = {
        time: 'Celtics',
        titulos: 18,
        cidade: 'Boston',
        imagem: 'data:image/webp;base64,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',
        cor: '#007A33'
    }

    const Lakers = {
        time: 'Lakers',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/250px-Los_Angeles_Lakers_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
        cor: '#FDB927',
        cidade: 'Los Angeles',
        titulos: '17'
    }

    const Bulls = {
        time: 'Bulls',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Chicago_Bulls_logo.svg/250px-Chicago_Bulls_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
        cor: '#F00',
        cidade: 'Chicago',
        titulos: '6'
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.titulo}>
                Maiores campeões NBA
            </Text>

            <NBAProps {...Lakers}/>
            <NBAProps {...Celtics}/>
            <NBAProps {...Bulls}/>
        </View>
    );
}