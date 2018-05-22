import React, { Component } from "react";
import TodoList from "./components/todo-list";
import "./App.css";

const dummyTodos = [
  { id: 0, isDone: true, text: "make components" },
  { id: 1, isDone: false, text: "design actions" },
  { id: 2, isDone: false, text: "implement reducer" },
  { id: 3, isDone: false, text: "connect components" }
];
class App extends Component {
  render() {
    return <TodoList todos={dummyTodos} />;
  }
}

export default App;
