import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import {BrowserRouter} from 'react-router-dom';

//Connecting React to Redux Store
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(

    <Provider store = {createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    
    , document.getElementById('root'));