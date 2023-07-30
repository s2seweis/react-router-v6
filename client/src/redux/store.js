import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from "redux";
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import { alertsReducer } from './reducers/alertsReducer';

import { usersReducer } from './reducers/usersReducer';

import { displayUsersReducer } from './reducers/displayUsersReducer';



const rootReducer = combineReducers({
   alertsReducer,
   usersReducer,
   displayUsersReducer
})




const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['usersReducer' ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store;