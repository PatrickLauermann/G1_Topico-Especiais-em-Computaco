import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Title, Paragraph} from 'react-native-paper';

const CustomCard = (props) => {
    return (
        <View style = {styles.cardStyle}>
            <Card>
                <Card.Cover source = {props.imagem} />
                <Card.Content>
                    <Title style = {styles.cardTitle}>{props.title}</Title>
                    <Paragraph style = {styles.cardParagraph}>{props.conteudo}</Paragraph>
                </Card.Content>
                <Card.Actions style = {styles.contentButton}>
                    <Button style = {styles.button}
                        mode = "contained" 
                        onPress = {props.onPress}
                    >{props.titleButton}
                    </Button>
                </Card.Actions>
            </Card>
        </View>
    )
}

export default CustomCard

const styles = StyleSheet.create({
    cardTitle: {
        marginTop: 10,
        color: '#008000'
    },
    button: {
        backgroundColor: "#008000",
        width: '100%',
        padding: 10,
        marginTop: 10,
        fontWeight: 'bold'
    },
    contentButton: {
        marginTop: 10,
        fontWeight: 'bold'
    },
    cardParagraph: {
        fontSize: 18,
        marginTop: 10,
        lineHeight: 25,
        color: '#008000'
    },
    cardStyle: {
        width: '85%',
        margin: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})
