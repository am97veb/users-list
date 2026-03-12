import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./core/App.tsx";
import { Provider } from "react-redux";
import { store } from "./core/store.ts";
import { GlobalStyle } from "./GlobalStyles.ts";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>,
);
