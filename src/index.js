import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import uniqid from "uniqid";
import App from "./App";
import "./style.scss";

const test = () => {
  const testst = store.getState();
  console.log(testst);
};

ReactDOM.render(
  <Provider store={store}>
    <App uniqid={uniqid} />
    <div onClick={test}>asldkjasljkhd</div>
  </Provider>,
  document.getElementById("wrapper")
);
