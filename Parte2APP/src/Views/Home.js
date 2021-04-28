import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import Card from '../Componentes/CompCard';

const Home = (props) => {
    const {navigation} = props
    return (
        <View style = {styles.container}>
            <ImageBackground source = {require('../Imagens/Home.jpg')} style = {styles.image}>
                <View style = {styles.contentView}>
                    <Card                        
                        title = "Copa do Brasil 2021"
                        conteudo = "Ver as fases do campeonato."
                        titleButton = "Fases do Campeonato"
                        imagem = {require('../Imagens/Logo.jpg')}
                        onPress = {() => navigation.navigate("Fases")}
                    />
                    <StatusBar style="auto"/>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Home
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
    container: {
        flex: 1,
        flexDirection: "column"
    }
})
