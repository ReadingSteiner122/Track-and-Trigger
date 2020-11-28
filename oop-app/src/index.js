import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { PersistGate } from 'redux-persist/integration/react'
import {reducer} from "./Redux/reducer"

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, reducer)


const reduxStore = createStore(persistedReducer);
const persistor = persistStore(reduxStore)


ReactDOM.render(
    <ReduxProvider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>

        <App />
    </PersistGate>
    </ReduxProvider>,
    document.getElementById("root")
);

reportWebVitals();