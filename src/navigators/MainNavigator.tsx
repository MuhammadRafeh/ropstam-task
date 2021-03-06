import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Main/HomeScreen';

const Stack = createStackNavigator();

function MainNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default MainNavigator;
