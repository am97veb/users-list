import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./core/App.tsx";
import { Provider } from "react-redux";
import { store } from "./core/store.ts";
import { GlobalStyle } from "./GlobalStyles.ts";
import { AppToastContianer } from "./ToastContainer/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyle />
        <AppToastContianer />
        <App />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
