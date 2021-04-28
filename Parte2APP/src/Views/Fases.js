import React, {useState, useLayoutEffect} from 'react';
import {View, SafeAreaView, StyleSheet, ImageBackground, FlatList} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import * as FasesCopaService from '../Service/CopaBrasil';
import Card from '../Componentes/CompCard';

const Fases = (props) => {
    const {navigation} = props
    const [Fases, setFases] = useState([])

    useLayoutEffect(() => {
        FasesCopaService.getFasesCopaBrasil()
            .then((dados) => {
                setFases(dados)
            })
            .catch((erro) => console.log(erro))
    }, [])

    return (
        <View style = {styles.container}>
            <ImageBackground source = {require('../Imagens/Fases-Fundo.jpg')} style = {styles.image}>
                <SafeAreaView style = {styles.lista}>
                    <FlatList
                        data = {Fases}
                        renderItem = {
                            ({item}) =>
                                <View style = {styles.contentView}>
                                     {item.status == 'finalizado' ?
                                    <Card
                                        title = {item.nome}
                                        conteudo = {"Status: " + item.status}
                                        titleButton = "Ver Resultados"
                                        onPress = {() => navigation.navigate("Jogos", item._link)}
                                        imagem = {require('../Imagens/Fases.jpg')}
                                    />:
                                    <View></View>
                                    }
                                </View>
                        }
                        keyExtractor={fase => String(fase.fase_id)}
                    />
                    <StatusBar style="auto"/>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}
export default Fases

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    listaFases: {
        height: '95%'
    },
    container: {
        flex: 1,
        flexDirection: "column"
    }
})
