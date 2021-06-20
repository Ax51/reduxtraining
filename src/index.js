import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './reducer';
import AppForScoreTable from './App-for-score-table';
import { BrowserRouter, Route } from 'react-router-dom';


const store = createStore(counter);
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route
                exact path='/'
                render={() =>
                    <App />} />
            <Route
                path='/secondpage'
                render={() =>
                    <AppForScoreTable />} />

        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);