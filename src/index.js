import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);


reportWebVitals();
