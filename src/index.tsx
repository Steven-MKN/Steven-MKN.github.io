import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'
import {createRoot} from "react-dom/client";
import Store from "./Store";

// @ts-ignore
const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Store>
            <App/>
        </Store>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
