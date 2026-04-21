import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./core/App.tsx";
import { GlobalStyle } from "./GlobalStyles.ts";
import { AppToastContianer } from "./common/ToastContainer/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <AppToastContianer />
        <App />
    </QueryClientProvider>
  </StrictMode>,
);
