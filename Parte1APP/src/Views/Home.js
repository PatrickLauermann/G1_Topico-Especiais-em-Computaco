import React, {useState} from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import CompInput from '../Componetes/CompImput';
import CompButton from '../Componetes/CompButton';

const Home = (props) => {
    const {navigation} = props
    const [CarroKM, setCarroKM] = useState('')
    const [CarroConsumo, setCarroConsumo] = useState('')

    const Media = () => {
        let MediaLitro = 0
        var Classificacao = ''
        MediaLitro = (CarroKM / CarroConsumo)
        MediaLitro = parseFloat(MediaLitro.toFixed(2))

        if (MediaLitro > 12) Classificacao = "A"
        else if (MediaLitro > 10) Classificacao = "B"
        else if (MediaLitro > 8) Classificacao = "C"
        else if (MediaLitro > 4) Classificacao = "D"
        else Classificacao = "E"

        let resultado = {
            Categoria: Classificacao,
            MediaConsumida: MediaLitro
        }
        navigation.navigate("Media", resultado)
        setCarroKM('')
        setCarroConsumo('')
    }

    return (
        <View style={styles.container}>
            <ImageBackground source = {require('../images/Home.jpg')} style={styles.image}>
                <View style = {styles.contentView}>
                    <Text style = {styles.title}>Média de Consumo</Text>
                    <CompInput
                        placeholder = "Digite os quilômetros percorridos"
                        value = {CarroKM}
                        setValue = {setCarroKM}
                    />
                    <CompInput
                        placeholder = "Digite a quantidade de litros de gasolina"
                        value = {CarroConsumo}
                        setValue = {setCarroConsumo}
                    />
                    <CompButton
                        title = "Calcular Média de KM por litro"
                        onPress = {Media}
                    />
                    <StatusBar style="auto"/>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    title: {
        margin: 10,
        color: '#000000',
        backgroundColor: '#FFD700',
        fontSize: 30
    },
    container: {
        flex: 1,
        flexDirection: "column"
    },
    iconHome: {
        width: 50,
        height: 50
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    contentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
