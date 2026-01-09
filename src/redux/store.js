import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import OrderSlice from './slices/orderSlice';
import ProductSlice from './slices/productSlice';
import MenuSlice from './slices/menuSlice'
import DriverSice from "./slices/driverSlice";
const persistConfig = {
    key: 'root',
    storage
}
const rootReducer =combineReducers({
    orders: OrderSlice,
    products:ProductSlice,
    menu:MenuSlice,
    driver:DriverSice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)