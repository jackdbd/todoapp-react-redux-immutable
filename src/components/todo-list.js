import React from "react";
import Todo from "./todo";

const TodoList = props => {
  const { todos } = props;
  return (
    <div className="todo">
      <input type="text" placeholder="Add todo" />
      <ul className="todo__list">
        {todos.map(todo => (
          <li key={todo.id} className="todo__item">
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
