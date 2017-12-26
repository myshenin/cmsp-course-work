import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import probability from "./reducers/next";


export default createStore(
    combineReducers({probability}),
    {},
    applyMiddleware(createLogger())
);