import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from "./reducers";
import ReduxThunk from 'redux-thunk';
import storage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
export let persistor = persistStore(store)
