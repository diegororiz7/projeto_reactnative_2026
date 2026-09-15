import React, {useState} from 'react';
import {View, Button, Text, Pressable} from 'react-native';
import styles from '../styles/Navegacao_Styles';
import Temperatura from './TemperaturaApp';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

const Guia = createBottomTabNavigator();

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

export default function Guia_NavegacaoApp(){
    return(
        <NavigationContainer>
            <Guia.Navigator initialRouteName='Home'>
                <Guia.Screen
                    name = 'Home'
                    component = {TelaHome}
                    options = {({navigation}) => ({
                        title: 'Tela Home',
                        headerStyle: {
                            backgroundColor: '#008'
                        },
                        tabBarLabel: 'Home',
                        headerTintColor: '#fff',
                        tabBarIcon: ({color, size}) => (
                            <Ionicons
                                name = 'home'
                                color = {color}
                                size = {size}
                            />
                        )
                    })}
                />

                <Guia.Screen
                    name = 'Curso'
                    component = {TelaCurso}
                    options = {({navigation}) => ({
                        title: 'Tela Curso',
                        headerStyle: {
                            backgroundColor: '#008'
                        },
                        tabBarLabel: 'Curso',
                        headerTintColor: '#fff',
                        tabBarIcon: ({color, size}) => (
                            <Ionicons
                                name = 'book'
                                color = {color}
                                size = {size}
                            />
                        )
                    })}
                />

                <Guia.Screen
                    name = 'Aluno'
                    component = {TelaAluno}
                    options = {({navigation}) => ({
                        title: 'Tela Aluno',
                        headerStyle: {
                            backgroundColor: '#008'
                        },
                        tabBarLabel: 'Aluno',
                        headerTintColor: '#fff',
                        tabBarIcon: ({color, size}) => (
                            <Ionicons
                                name = 'easel-sharp'
                                color = {color}
                                size = {size}
                            />
                        )
                    })}
                />

                <Guia.Screen
                    name = 'Temperatura'
                    component = {TelaTemperatura}
                    options = {({navigation}) => ({
                        title: 'Tela Temperatura',
                        headerStyle: {
                            backgroundColor: '#008'
                        },
                        tabBarLabel: 'Temperatura',
                        headerTintColor: '#fff',
                        tabBarIcon: ({color, size}) => (
                            <Ionicons
                                name = 'thermometer'
                                color = {color}
                                size = {size}
                            />
                        )
                    })}
                />
            </Guia.Navigator>
        </NavigationContainer>
    );
}