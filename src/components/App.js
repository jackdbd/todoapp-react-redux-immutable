import React, { Component } from "react";
import Header from "./Header";
import TodoList from "../containers/TodoList";
import Footer from "./Footer";
import "../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../../node_modules/materialize-css/dist/js/materialize";
import "./App.css";

class App extends Component {
  render() {
    const primaryColor = "deep-purple darken-4";
    const secondaryColor = "blue darken-1";
    return (
      <div className="app container">
        <Header primaryColor={primaryColor} />
        <div className="app-content">
          <TodoList
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
        </div>
        <Footer primaryColor={primaryColor} />
      </div>
    );
  }
}

export default App;
