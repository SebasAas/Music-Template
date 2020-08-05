import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import thunk from "redux-thunk";
import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk];

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, initialState, compose(applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

let persistor = persistStore(store)

export { store, persistor }