import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { devToolsEnhancer } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import phonebookReducer from './contactReducer';

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, devToolsEnhancer());
export const persistor = persistStore(store);
