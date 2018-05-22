import { ADD_TODO, TOGGLE_TODO } from "../actions";
import { List, Map } from "immutable";

const defaultState = Map({
  todos: List([])
});

export default function(state = defaultState, action) {
  // use some variables to improve readability
  let newState, todos;

  switch (action.type) {
    case ADD_TODO:
      newState = Map({
        todos: state.get("todos").push(action.payload)
      });
      return newState;

    case TOGGLE_TODO:
      todos = state.get("todos").map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
      newState = Map({
        todos
      });
      return newState;
    default:
      return state;
  }
}
