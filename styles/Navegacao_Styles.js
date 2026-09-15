import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewTN:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoTN:{
    fontSize: 20,
    color: '#1c1c1c',
  },
  botaoContainer:{
    flexDirection:'column',
    justifyContent:'center',
    marginVertical:20,
    margin: 20
  },
  botao:{
    backgroundColor:'#008',
    padding:12,
    borderRadius:8,
    margin: 20
  },
});

export default styles;