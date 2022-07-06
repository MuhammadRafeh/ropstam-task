import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import colors from '../../theme/colors';
import Contants from 'expo-constants';
import Button from '../../components/UI/Button';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions';

type homeScreenProps = {
    navigation?: object;
}

type itemProps = {
    title?: string;
    body?: string;
    userId?: string
}

type itemTypes = {
    item: itemProps
}

const Item: React.FC<itemTypes> = ({ item }) => {
    return (
        <View style={{ marginVertical: 20, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 20 }}>
            <Text>{item.userId}</Text>
            <Text style={{ textAlign: 'justify' }}>{item.title}</Text>
            <Text style={{ textAlign: 'justify' }}>{item.body}</Text>
        </View>
    )
}

const HomeScreen: React.FC<homeScreenProps> = ({ navigation }) => {
    const [data, setData] = useState<Array<object>>([]);
    const [error, setError] = useState<boolean>(false);

    const dispatch = useDispatch();
    const focus = useRef(true);
    const loading = useRef(true);

    const onLogoutPress = () => {
        dispatch(logout());
    }

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/Posts')
            .then((response) => response.json())
            .then((data) => {
                if (focus.current) {
                    loading.current = false;
                    setData(data)
                    // console.log(data)
                }
            }).catch(err => {
                if (focus.current) setError(true)
            })
    }

    useEffect(() => {
        fetchData();
        return () => {
            focus.current = false
        }
    }, [])

    return (
        <View style={styles.screen}>
            <View style={{ marginBottom: 30 }}>
                <Button title={'Logout'} onPress={onLogoutPress} />
            </View>
            {
                error && <Text style={{ textAlign: 'center', color: 'blue' }} onPress={fetchData}>Try Again</Text>
            }

            <FlatList
                data={data}
                keyExtractor={(obj: any) => obj.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <Item item={item} />
                    )
                }}
            />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.primary,
        marginTop: Contants.statusBarHeight,
        padding: 20
    },
})
