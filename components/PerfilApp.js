import React,{useState} from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';

export default function PerfilApp(){

  const cargos = [
    'Analista de Sistemas',
    'Professor',
    'Desenvolvedor Mobile',
    'DBA',
    'Analista de Testes',
    'DevOps',
    'Suporte Técnico',
    'Gerente de TI'
  ];

  const [cargoAtual, setCargoAtual] = useState('Qual é o meu cargo?');

  function gerarCargo(){
    const indice = Math.floor(Math.random() * cargos.length);
    setCargoAtual(cargos[indice]);
  }

  return(
    <View style = {styles.container}>
      <Image
        style = {styles.foto}
        source = {{uri: 'https://avatars.githubusercontent.com/u/93293247?v=4&size=64'}}
      />

      <Text style = {styles.nome}>
        Diego Roriz
      </Text>

      <Text style = {styles.cargo}>
        {cargoAtual}
      </Text>

      <View style = {styles.card}>
        <Text style = {styles.titulo}>
          Sobre mim
        </Text>

        <Text style = {styles.texto}>💼Analista de Sistemas</Text>
        <Text style = {styles.texto}>💼Professor FASM</Text>
        <Text style = {styles.texto}>💼Profissional de Tecnologia</Text>
      </View>

      <View style = {styles.card}>
        <Text style = {styles.titulo}>
          Habilidades
        </Text>

        <Text style = {styles.texto}>✅React Native</Text>
        <Text style = {styles.texto}>✅Flutter</Text>
        <Text style = {styles.texto}>✅Firebase</Text>
      </View>

      <Button
        onPress = {gerarCargo}
        title = 'Escolha o cargo!'
        color = {'green'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#e8eef5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  foto:{
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 10
  },
  nome:{
    fontSize: 26,
    fontWeight: 'bold'
  },
  cargo:{
    fontSize: 18,
    color: 'grey',
    marginBottom: 20
  },
  card:{
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 4
  },
  titulo:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  texto:{
    fontSize: 16
  }
})