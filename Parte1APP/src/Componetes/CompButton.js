import React from 'react';
import {Button} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

const CompButton = (props) => {
    return (
        <View style = {styles.contentButton}>
            <Button style = {styles.button}
                mode = "contained"
                color = '#FFD700'
                onPress = {props.onPress}
            >{props.title}
            </Button>
        </View>
    )
}

export default CompButton

const styles = StyleSheet.create({
    button: {
        padding: 10,
        marginTop: 10
    },
    contentButton: {
        width: '100%',
        marginTop: 10
    }
})
