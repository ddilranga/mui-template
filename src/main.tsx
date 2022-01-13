import React from "react";
import ReactDOM from "react-dom";
import App from "views/App";

if (import.meta.env.DEV) {
  const { worker } = await import("./mocks/browser");

  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
