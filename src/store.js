import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const enhancer = composeWithDevTools(applyMiddleware(logger));
const store = createStore(rootReducer, enhancer);

export default store;
