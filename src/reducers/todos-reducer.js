import { ADD_TODO, TOGGLE_TODO } from "../actions";
import { List, Map } from "immutable";

const defaultState = Map({
  todos: List([])
})

export default function(state = defaultState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newState = Map({
        todos: state.get('todos').push(action.payload)
      })
      return newState;
    case TOGGLE_TODO:
      // TODO
      return state;
    default:
      return state;
  }
}
