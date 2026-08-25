import React,{Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import styles from '../styles/Paises_Styles';

function PaisFuncao(props){
  return(
    <View style = {styles.card}>
      <Text style = {styles.titulo}>Função - {props.nome}</Text>

      <Image
        style = {styles.imagem}
        //source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/250px-Flag_of_Brazil.svg.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'}}
        source = {props.bandeira}
      />

      <Text>Capital: {props.capital}</Text>

      <Text>Continente: {props.continente}</Text>
    </View>
  );
}

class EstadoClasse extends Component{
  render(){
    return(
      <View style = {styles.card}>
        <Text style = {styles.titulo}>Classe - {this.props.nome}</Text>

        <Image
          style = {styles.imagem}
          //source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bandeira_de_Minas_Gerais.svg/250px-Bandeira_de_Minas_Gerais.svg.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'}}
          source = {this.props.bandeira}
        />

        <Text>Capital: {this.props.capital}</Text>

        <Text>País: {this.props.pais}</Text>
      </View>
    );
  }
}

const ArrowCidade =(props)=> {
  return(
    <View style = {styles.card}>
      <Text style = {styles.titulo}>Arrow - {props.nome}</Text>

      <Image
        style = {styles.imagem}
        //source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Flag_of_Muria%C3%A9_MG.png/120px-Flag_of_Muria%C3%A9_MG.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'}}
        source = {props.bandeira}
      />

      <Text>Bairro: {props.bairro}</Text>

      <Text>Estado: {props.estado}</Text>
    </View>
  );
}

export default function PaisesApp(){
  return(
    <View style = {styles.container}>
      <Text style = {styles.header}>Função vs Classe</Text>

      <PaisFuncao 
        nome = 'Brasil'
        bandeira = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/250px-Flag_of_Brazil.svg.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'
        capital = 'Brasília'
        continente = 'América do Sul'
      />

      <EstadoClasse 
        nome = 'Minas Gerais'
        bandeira = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bandeira_de_Minas_Gerais.svg/250px-Bandeira_de_Minas_Gerais.svg.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'      
        capital = 'Belo Horizonte'
        pais = 'Brasil'
      />

      <ArrowCidade 
        nome = 'Muriaé'
        bandeira = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Flag_of_Muria%C3%A9_MG.png/120px-Flag_of_Muria%C3%A9_MG.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'
        bairro = 'Centro'
        estado = 'Minas Gerais'
      />
    </View>
  );
}

