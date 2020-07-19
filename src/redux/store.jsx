import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "./reducers";
export const DataStore = createStore(dataReducer, applyMiddleware(thunk));
