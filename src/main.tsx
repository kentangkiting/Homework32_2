import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Details from "./details.tsx";
import { Provider } from "react-redux";
import store from "./store/todoStore.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/detail/:id" Component={Details} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
