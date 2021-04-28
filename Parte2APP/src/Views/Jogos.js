import React, {useState, useLayoutEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {View, ImageBackground, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import * as PartidasCopaService from '../Service/CopaBrasil';

const Jogos = (props) => {
    const {navigation} = props
    const [partidasCopa, setPartidasCopa] = useState([])

    useLayoutEffect(() => {
        PartidasCopaService.getPartidasCopaBrasil(props.route.params)
            .then((dados) => {
                setPartidasCopa(dados)
            })
            .catch((erro) => console.log(erro))
    }, [])

    return (
        <View style = {styles.container}>
            <ImageBackground source = {require('../Imagens/Jogos.jpg')} style = {styles.image}>
                <SafeAreaView style = {styles.lista}>
                    <FlatList
                        data = {partidasCopa}
                        renderItem = {
                            ({item}) =>
                                <View>
                                    <View style = {styles.contentView}>
                                        <View style = {styles.contentPlacar}>
                                            <Text style = {styles.textPlacar}>{item.partida_ida.placar}</Text>
                                            <Text style = {styles.textDescricaoPartida}>{"Estádio: " + item.partida_ida.estadio.nome_popular}</Text>
                                            <Text style = {styles.textDescricaoPartida}>{"Data: " + item.partida_ida.data_realizacao}</Text>
                                            <Text style = {styles.textDescricaoPartida}>{"Horário: " + item.partida_ida.hora_realizacao}</Text>                                            
                                        </View>
                                    </View>
                                </View>
                        }
                        keyExtractor={partida => String(partida.nome)}
                    />
                    <StatusBar style="auto" />
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}
export default Jogos

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    textDescricaoPartida: {
        color: "#fff",
        fontSize: 16
    },
    contentPlacar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentView: {
        borderWidth: 1,
        borderColor: '#000',
        margin: 10,
        padding: 30,
        borderRadius: 10,
        backgroundColor: "#008000"
    },
    container: {
        flex: 1,
        flexDirection: "column"
    },
    textPlacar: {
        fontSize: 20,
        fontWeight: '500',
        color: "#fff",
        marginBottom: 10
    }
})
