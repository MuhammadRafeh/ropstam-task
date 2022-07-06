import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

type buttonProps = {
    title: string;
    onPress: any;
    isLogin?: boolean;
}

const Button: React.FC<buttonProps> = ({ title, onPress, isLogin }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} disabled={isLogin}>
            {
                isLogin ? (<ActivityIndicator size={16} color={'red'} />) : (
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{title}</Text>
                )
            }
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
        height: 55,
        flexDirection: 'row'
    }
})
