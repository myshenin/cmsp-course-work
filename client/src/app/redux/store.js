import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import next from "./reducers/next";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import iterationAmount from "./reducers/setIterationAmount";


export default createStore(
    combineReducers({next, iterationAmount}),
    {},
    applyMiddleware(createLogger(), thunk, promise())
);