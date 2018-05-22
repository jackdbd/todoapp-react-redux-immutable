import { combineReducers } from "redux";
import todosReducer from "./todos-reducer";

const rootReducer = combineReducers({
  todosStore: todosReducer
});

export default rootReducer;
