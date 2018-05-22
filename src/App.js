import React, { Component } from "react";
import { List, Map } from "immutable";
import TodoList from "./components/todo-list";
import "./App.css";

const dummyTodos = List([
  Map({ id: 0, isDone: true, text: "make components" }),
  Map({ id: 1, isDone: false, text: "design actions" }),
  Map({ id: 2, isDone: false, text: "implement reducer" }),
  Map({ id: 3, isDone: false, text: "connect components" })
]);

class App extends Component {
  render() {
    return <TodoList todos={dummyTodos} />;
  }
}

export default App;
