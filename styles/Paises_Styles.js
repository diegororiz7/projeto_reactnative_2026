import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header:{
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  card:{
    borderWidth: 1,
    padding: 15,
    margin: 10,
    width: 250,
    alignItems: 'center'
  },
  titulo:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  imagem:{
    width: 120,
    height: 80,
    marginBottom: 10
  }
});

export default styles;