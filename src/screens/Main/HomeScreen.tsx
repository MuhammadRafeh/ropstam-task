import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import Contants from 'expo-constants';
import Button from '../../components/UI/Button';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions';

type homeScreenProps = {
    navigation?: object;
}

const HomeScreen: React.FC<homeScreenProps> = ({ navigation }) => {
    const dispatch = useDispatch();

    const onLogoutPress = () => {
        dispatch(logout());
    }

    return (
        <View>
            <Button title={'Logout'} onPress={onLogoutPress} />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.primary,
        marginTop: Contants.statusBarHeight,
    },
})
