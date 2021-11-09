import {combineReducers} from 'redux';
import addProductReducer from "./addProduct/reducer";
import searchValueReducer from './searchValue/reducer'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    addProduct: addProductReducer,
    searchValue: searchValueReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'addProduct',
        'searchValue'
    ]
}

export default persistReducer(persistConfig, rootReducer)