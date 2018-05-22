import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Todo from "../components/todo";
import { addTodo, toggleTodo } from "../actions";

const TodoList = props => {
  const { todos } = props;
  return (
    <div className="todo">
      <input type="text" placeholder="Add todo" />
      <ul className="todo__list">
        {todos.map(todo => (
          <li key={todo.get("id")} className="todo__item">
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

// we don't need to map any state to props in this component, but `connect` still requires a first argument
const mapStateToProps = null;

function mapDispatchToProps(dispatch) {
  bindActionCreators({ addTodo, toggleTodo }, dispatch);
}

// Promote the "dumb", redux-unaware, presentational component, to a "smart", redux-aware, container component
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
