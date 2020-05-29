import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { RoomProvider } from "./context";

ReactDOM.render(
  <RoomProvider>
    <App />
  </RoomProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
