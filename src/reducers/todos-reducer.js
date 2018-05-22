import { ADD_TODO, TOGGLE_TODO } from "../actions";
import { List, Map } from "immutable";

const defaultState = {
  todos: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ADD_TODO:
      // TODO
      return state;
    case TOGGLE_TODO:
      // TODO
      return state;
    default:
      return state;
  }
}
