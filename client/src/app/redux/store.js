import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import next from "./reducers/next";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";


export default createStore(
    combineReducers({next}),
    {},
    applyMiddleware(createLogger(), thunk, promise())
);