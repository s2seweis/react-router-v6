import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { alertsReducer } from './reducers/alertsReducer';
import { usersReducer } from './reducers/usersReducer';
import { displayUsersReducer } from './reducers/displayUsersReducer';
import { settingsReducer } from './reducers/settingsReducer';
import { currentUserReducer } from './reducers/currentUserReducer';

const rootReducer = combineReducers({
   alertsReducer,
   usersReducer,
   displayUsersReducer,
   settingsReducer,
   currentUserReducer,

});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
    
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
});

export default store;