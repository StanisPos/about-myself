import { createStore, applyMiddleware } from "C:/Users/stanislav/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";


export const store = createStore(rootReducer, applyMiddleware(thunk, logger))