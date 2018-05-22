import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
  // make all the container components aware of the redux store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
