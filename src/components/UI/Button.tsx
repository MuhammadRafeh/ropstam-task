import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type buttonProps = {
    title: string;
    onPress: any;
}

const Button: React.FC<buttonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        height: 55
    }
})
