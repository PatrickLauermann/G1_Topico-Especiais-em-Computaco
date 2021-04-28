import React from 'react';
import {TextInput} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

const CompImput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                label = {props.placeholder}
                value = {props.value}
                keyboardType = "numeric"
                onChangeText = {(conteudo) => props.setValue(conteudo)}
            />
        </View>
    )
}

export default CompImput

const styles = StyleSheet.create({
    container: {
        width: "100%", 
        marginTop: 15
    }
})
