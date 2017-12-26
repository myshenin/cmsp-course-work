import React from 'react';
import App from "./containers/App";
import {Provider} from "react-redux";
import store from './redux/store';
import {render} from 'react-dom';

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    window.document.getElementById('app')
);