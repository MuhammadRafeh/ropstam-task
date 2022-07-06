import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

type loginButtonProps = {
    name: any;
    color?: string;
}

const LoginButton: React.FC<loginButtonProps> = ({ name, color }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Ionicons name={name} size={20} color={color}/>
        </TouchableOpacity>
    );
}

export default LoginButton;

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
