import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import Contants from 'expo-constants';
import colors from '../../theme/colors';
import LoginButton from '../../components/UI/LoginButton';
import TextInput from '../../components/UI/TextInput';
import { useDispatch } from 'react-redux';
import { signin } from '../../store/actions';

const { height } = Dimensions.get('window')

type loginScreenProps = {
    navigation?: object;
}

const LoginScreen: React.FC<loginScreenProps> = ({ navigation }) => {

    const [email, setEmail] = useState<string>('hassan.zafar@ropstam.com');
    const [password, setPassword] = useState<string>('12345678');
    const dispatch = useDispatch();

    const onButtonPress = () => {
        dispatch(signin(email, password) as any)
    }

    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.title}>Hello Again!</Text>
            </View>
            <View >
                <Text style={styles.subTitle}>Chance to get your</Text>
            </View>
            <View>
                <Text style={{ ...styles.subTitle, marginBottom: 20 }}>life better</Text>
            </View>
            <View style={styles.textInputs}>
                <TextInput placeHolder={'Enter Email'} value={email} onChangeText={setEmail} />
            </View>
            <View style={styles.textInputs}>
                <TextInput placeHolder={'Enter Password'} value={password} onChangeText={setPassword} />
            </View>
            <TouchableOpacity style={{ marginBottom: 37, top: -10 }}>
                <Text style={{ textAlign: 'right' }}>Recovery Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onButtonPress}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
            </TouchableOpacity>
            <View style={styles.continueWith}>
                <Text>or continue with</Text>
            </View>
            <View style={styles.loginWithThree}>
                <LoginButton name={'logo-google'} />
                <LoginButton name={'logo-apple'} />
                <LoginButton name={'md-logo-facebook'} />
            </View>
            <View style={styles.registerNowRow}>
                <Text>Not a member?</Text>
                <TouchableOpacity>
                    <Text style={styles.registerNow}> Register now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.primary,
        marginTop: Contants.statusBarHeight,
        padding: 20,
        paddingTop: height / 5.8
    },
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 9
    },
    subTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 2,
        letterSpacing: 1
    },
    button: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        height: 55
    },
    textInputs: {
        marginBottom: 20
    },
    continueWith: {
        marginVertical: 22,
        alignItems: 'center'
    },
    loginWithThree: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 20
    },
    registerNowRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerNow: {
        color: 'green',
        fontWeight: 'bold'
    }
})
