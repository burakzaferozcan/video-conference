import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import store from "./store/index.jsx";

createRoot(document.getElementById("root")).render(
  <Provider {...store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
