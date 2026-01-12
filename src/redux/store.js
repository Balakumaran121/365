import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import OrderSlice from './slices/orderSlice';
import ProductSlice from './slices/productSlice';
import MenuSlice from './slices/menuSlice'
import DriverSice from "./slices/driverSlice";
import TripSlice from './slices/tripSlice'
import vehicleSlice from "./slices/vehicleSlice";
const persistConfig = {
    key: 'root',
    storage
}
const rootReducer = combineReducers({
    orders: OrderSlice,
    products: ProductSlice,
    menu: MenuSlice,
    driver: DriverSice,
    trip: TripSlice,
    vehicle: vehicleSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)