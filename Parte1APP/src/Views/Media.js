import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import CompButton from '../Componetes/CompButton';
import CompCard from '../Componetes/CompCard';

const Media = (props) => {
    const {navigation} = props
    const CarroConsumo = props.route.params
    return (
        <View style = {styles.container}>
            <ImageBackground source = {require('../images/Media.jpg')} style={styles.image}>
                <View style = {styles.contentView} >
                    <CompCard style = {styles.cardStyle}                        
                        title = "Indicação da Categoria"
                        backgroundColor = '#FFD700'
                        conteudo = {CarroConsumo.Categoria}
                    />
                    <CompCard style={styles.cardStyle}
                        title = "Média de KM por litro"
                        conteudo = {CarroConsumo.MediaConsumida}
                    />
                    <CompButton style = {styles.button}
                        mode = "contained"
                        title = "Retornar"
                        onPress = {() => navigation.goBack()}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}
export default Media

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
    iconMedia: {
        width: 50,
        height: 50,
        marginBottom: 20
    },
    container: {
        flex: 1,
        flexDirection: "column"
    }
})

