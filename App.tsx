import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useSelector } from 'react-redux';
import MainNavigator from './src/navigators/MainNavigator';
import AuthNavigator from './src/navigators/AuthNavigator';

type authReducerTypes = {
  email?: string;
  token?: string;
}

type stateTypes = {
  auth: authReducerTypes;
}

function App() {
  const email = useSelector((state: stateTypes) => state.auth.email);
  return (
    <NavigationContainer>
      {
        email ? (
          <MainNavigator />
        ) : (
          <AuthNavigator />
        )
      }
    </NavigationContainer>
  );
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
