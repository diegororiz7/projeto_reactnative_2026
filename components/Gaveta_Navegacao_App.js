import React, {useState} from 'react';
import {View, Button, Text, Pressable} from 'react-native';
import styles from '../styles/Navegacao_Styles';
import Temperatura from './TemperaturaApp';
import Series from './SeriesApp';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';

const Gaveta = createDrawerNavigator();

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

function TelaSeries({navigation}){
    return(
        <Series />
    );
}

export default function Gaveta_NavegacaoApp(){
    return(
        <NavigationContainer>
            <Gaveta.Navigator initialRouteName='Home'>
                <Gaveta.Screen
                    name = 'Home'
                    component = {TelaHome}
                    options = {({navigation}) => ({
                        title: 'Tela Home',
                        headerStyle: {
                            backgroundColor: '#008'
                        },
                        tabBarLabel: 'Home',
                        headerTintColor: '#fff',
                        drawerIcon: ({color, size}) => (
                            <Ionicons
                                name = 'home'
                                color = {color}
                                size = {size}
                            />
                        )
                    })}
                />

                <Gaveta.Screen
                    name = 'Curso'
                    component = {TelaCurso}
                    options = {({navigation}) => ({
                        title: 'Tela Curso',
                        headerStyle: {
                            backgroundColor: '#008'
                        },
                        tabBarLabel: 'Curso',
                        headerTintColor: '#fff',
                        drawerIcon: ({color, size}) => (
                            <Ionicons
                                name = 'book'
                                color = {color}
                                size = {size}
                            />
                        )
                    })}
                />

                <Gaveta.Screen
                    name = 'Aluno'
                    component = {TelaAluno}
                    options = {({navigation}) => ({
                        title: 'Tela Aluno',
                        headerStyle: {
                            backgroundColor: '#008'
                        },
                        tabBarLabel: 'Aluno',
                        headerTintColor: '#fff',
                        drawerIcon: ({color, size}) => (
                            <Ionicons
                                name = 'easel-sharp'
                                color = {color}
                                size = {size}
                            />
                        )
                    })}
                />

                <Gaveta.Screen
                    name = 'Temperatura'
                    component = {TelaTemperatura}
                    options = {({navigation}) => ({
                        title: 'Tela Temperatura',
                        headerStyle: {
                            backgroundColor: '#008'
                        },
                        tabBarLabel: 'Temperatura',
                        headerTintColor: '#fff',
                        drawerIcon: ({color, size}) => (
                            <Ionicons
                                name = 'thermometer'
                                color = {color}
                                size = {size}
                            />
                        )
                    })}
                />

                <Gaveta.Screen
                    name = 'Series'
                    component = {TelaSeries}
                    options = {({navigation}) => ({
                        title: 'Tela Series',
                        headerStyle: {
                            backgroundColor: '#008'
                        },
                        tabBarLabel: 'Séries',
                        headerTintColor: '#fff',
                        drawerIcon: ({color, size}) => (
                            <Ionicons
                                name = 'card-outline'
                                color = {color}
                                size = {size}
                            />
                        )
                    })}
                />
            </Gaveta.Navigator>
        </NavigationContainer>
    );
}