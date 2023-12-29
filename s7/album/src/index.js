import React from 'react'
import ReactDOM from 'react-dom'
import MyApp from './App'
// add style
import './index.css'

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<MyApp/>)