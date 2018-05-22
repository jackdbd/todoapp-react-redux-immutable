import { ADD_TODO, TOGGLE_TODO } from "../actions";
import { List, Map } from "immutable";

const defaultState = Map({
  todos: List([])
});

export default function(state = defaultState, action) {
  // use some variables to improve readability
  let newState, newTodo, newTodos;

  switch (action.type) {
    case ADD_TODO:
      newTodo = Map(action.payload);
      newTodos = state.get("todos").push(newTodo);
      newState = Map({
        todos: newTodos
      });
      return newState;

    case TOGGLE_TODO:
      newTodos = state.get("todos").map(todo => {
        if (todo.get("id") === action.payload) {
          return todo.update("isDone", isDone => !isDone);
        } else {
          return todo;
        }
      });
      newState = Map({
        todos: newTodos
      });
      return newState;
    default:
      return state;
  }
}
