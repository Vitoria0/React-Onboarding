import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";

import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { theme } from "./theme";
import { store } from "./app/store";
import { Provider } from "react-redux";
import App from "./app/App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
          </Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
