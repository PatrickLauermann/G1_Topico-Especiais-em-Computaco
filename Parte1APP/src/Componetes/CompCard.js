import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Paragraph, Card} from 'react-native-paper';

const CompCard = (props) => {
    return (
        <View style={styles.cardStyle}>
            <Card>
                <Card.Content>                    
                    <Title style={styles.cardTitle}>{props.title}</Title>
                    <Paragraph style={styles.cardParagraph}>{props.conteudo}</Paragraph>
                </Card.Content>
            </Card>
        </View>
    )
}
export default CompCard

const styles = StyleSheet.create({
    cardParagraph: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    cardTitle: {
        color: '#000000',
        backgroundColor: '#FFD700'
    },
    cardStyle: {
        width: '100%',
        margin: 15,
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})
