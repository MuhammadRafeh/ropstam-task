import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Auth/Login';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;
