import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions";
import Todo from "../components/todo";

const TodoList = props => {
  // const { todos, addTodo, toggleTodo } = props;

  const onKeyDown = event => {
    const isEnterKey = event.which === 13;
    if (isEnterKey) {
      const input = event.target;
      const text = input.value;
      const isLongEnough = text.length > 0;
      if (isLongEnough) {
        props.addTodo(text);
        input.value = "";
      }
    }
  };

  const renderTodo = todo => {
    return (
      <li
        key={todo.id}
        className="todo__item"
        onClick={() => props.toggleTodo(todo.id)}
      >
        <Todo todo={todo} />
      </li>
    );
  };

  return (
    <div className="todo">
      <input
        className="todo__entry"
        type="text"
        placeholder="Add todo"
        onKeyDown={onKeyDown}
      />
      <ul className="todo__list">
        {props.todos.map(todo => renderTodo(todo))}
      </ul>
    </div>
  );
};

/*
  Take a portion of the entire application state (managed by redux) and make it
  available to this container component via props.
*/
function mapStateToProps(state) {
  const props = {
    todos: state.todosStore.get("todos")
  };
  return props;
}

/* 
  Bind action creators to props and pass them to all reducers via the dispatch
  function. Anything returned from this function will end up as props on the
  TodoList container.
*/
function mapDispatchToProps(dispatch) {
  // object destructuring: {addTodo (prop): addTodo (action creator)}
  return bindActionCreators({ addTodo, toggleTodo }, dispatch);
  /*
    Note: the return statement above is equal to the following one:
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
    };
  */
}

/*
  Promote the "dumb", redux-unaware, presentational component, to a "smart",
  redux-aware, container component.
*/
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
