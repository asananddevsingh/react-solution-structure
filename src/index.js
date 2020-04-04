import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store/store";
import { WithErrorBoundary } from "./hoc";
import "./i18n";

const app = (
  // <Suspense fallback={() => <div>Error...</div>}>
  <Provider store={store} >
    <WithErrorBoundary>
      <Router>
        <App />
      </Router>
    </WithErrorBoundary>
  </Provider>
  // </Suspense>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
