import React from 'react'
import ReactDOM from 'react-dom'
import MyApp from './App'
// add style
import './index.css'
import {Provider} from './context/albums';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
// since the provider component wrap the context provider, simplily call the 
// outter provider without props 
root.render(
    <Provider>
        <MyApp/>
    </Provider>)