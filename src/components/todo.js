import React from "react";

const Todo = props => {
  const { todo } = props;
  // todo is a Map Immutable.js object, not a plain Javascript object
  if (todo.get("isDone")) {
    return <strike>{todo.get("text")}</strike>;
  } else {
    return <span>{todo.get("text")}</span>;
  }
};

export default Todo;
