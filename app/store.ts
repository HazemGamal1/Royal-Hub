import { configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice'

const rootReducer = combineReducers({
    cart: cartReducer,
})

const persistConfig = {
    key: 'reduxCart',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;