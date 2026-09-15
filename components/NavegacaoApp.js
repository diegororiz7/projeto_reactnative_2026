import React, {useState} from 'react';
import {View, Button, Text, Pressable} from 'react-native';
import styles from '../styles/Navegacao_Styles';
import Temperatura from './TemperaturaApp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Ionicons} from '@expo/vector-icons';

const Pilha = createStackNavigator();

function TelaHome({navigation}){
    return(
        <View style = {styles.viewTN}>
            <Text style = {styles.textoTN}>FASM</Text>
            <Text style = {styles.textoTN}>Santa Marcelina</Text>

            <View style = {styles.botaoContainer}>
                <Pressable
                    style = {styles.botao}
                    onPress = {() => navigation.navigate('Curso')}
                    onLongPress = {() => navigation.navigate('Aluno')}
                >
                    <Text style = {{color: 'white'}}>
                        Clicar = Tela Curso / Pressionar = Tela Aluno
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

function TelaCurso({navigation}){
    return(
        <View style = {styles.viewTN}>
            <Text style = {styles.textoTN}>ADS</Text>
            <Text style = {styles.textoTN}>2026</Text>

            <View style = {styles.botaoContainer}>
                <Pressable
                    style = {styles.botao}
                    onPress = {() => navigation.navigate('Home')}
                    onLongPress = {() => navigation.navigate('Aluno')}
                >
                    <Text style = {{color: 'white'}}>
                        Clicar = Tela Home / Pressionar = Tela Aluno
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

function TelaAluno({navigation}){
    return(
        <View style = {styles.viewTN}>
            <Text style = {styles.textoTN}>Diego Roriz</Text>
            <Text style = {styles.textoTN}>4° período</Text>

            <Pressable
                style = {styles.botao}
                onPress = {() => navigation.navigate('Home')}
                onLongPress = {() => navigation.navigate('Curso')}
            >
                <Text style = {{color: 'white'}}>
                    Clicar = Tela Home / Pressionar = Tela Curso
                </Text>
            </Pressable>
        </View>
    );
}

function TelaTemperatura({navigation}){
    return(
        <Temperatura />
    );
}

export default function NavegacaoApp(){
    return(
        <NavigationContainer>
            <Pilha.Navigator initialRouteName='Home'>
                <Pilha.Screen
                    name = 'Home'
                    component = {TelaHome}
                    options = {({navigation}) => ({
                        title: 'Tela Home',
                        headerStyle: {
                            backgroundColor: '#008'
                        },
                        tabBarLabel: 'Home',
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <Ionicons
                                name = 'book'
                                size = {30}
                                style = {{marginRight: 15}}
                                color = '#fff'
                                onPress = {
                                    () => navigation.navigate('Curso')
                                }
                            />
                        )
                    })}
                />

                <Pilha.Screen
                    name = 'Curso'
                    component = {TelaCurso}
                    options = {({navigation}) => ({
                        title: 'Tela Curso',
                        headerStyle: {
                            backgroundColor: '#008'
                        },
                        tabBarLabel: 'Curso',
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <Ionicons
                                name = 'easel-sharp'
                                size = {30}
                                style = {{marginRight: 15}}
                                color = '#fff'
                                onPress = {
                                    () => navigation.navigate('Aluno')
                                }
                            />
                        )
                    })}
                />

                <Pilha.Screen
                    name = 'Aluno'
                    component = {TelaAluno}
                    options = {({navigation}) => ({
                        title: 'Tela Aluno',
                        headerStyle: {
                            backgroundColor: '#008'
                        },
                        tabBarLabel: 'Aluno',
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <Ionicons
                                name = 'home'
                                size = {30}
                                style = {{marginRight: 15}}
                                color = '#fff'
                                onPress = {
                                    () => navigation.navigate('Home')
                                }
                            />
                        )
                    })}
                />

                <Pilha.Screen
                    name = 'Temperatura'
                    component = {TelaTemperatura}
                    options = {({navigation}) => ({
                        title: 'Tela Temperatura',
                        headerStyle: {
                            backgroundColor: '#008'
                        },
                        tabBarLabel: 'Temperatura',
                        headerTintColor: '#fff',
                        headerRight: () => (
                            <Ionicons
                                name = 'home'
                                size = {30}
                                style = {{marginRight: 15}}
                                color = '#fff'
                                onPress = {
                                    () => navigation.navigate('Home')
                                }
                            />
                        )
                    })}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    );
}