import React from 'react';
import { StyleSheet, TextInput as VanillaTextInput } from 'react-native';

type textInputProps = {
    placeHolder?: string;
    value?: string;
    onChangeText?: (newValue: string) => void;
}

const TextInput: React.FC<textInputProps> = ({ placeHolder, value, onChangeText }) => {
    return (
        <VanillaTextInput style={styles.container} placeholder={placeHolder} value={value} onChangeText={onChangeText} />
    );
}

export default TextInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: 50,
        paddingHorizontal: 20
    }
})
