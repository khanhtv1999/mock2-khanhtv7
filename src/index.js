import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./redux/store";
let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
