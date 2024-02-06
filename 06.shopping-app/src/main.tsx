import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Global } from "@emotion/react";
import globalStyles from "./styles/globalStyles.ts";
import AuthGuard from "./components/auth/AuthGuard.tsx";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <QueryClientProvider client={client}>
      <RecoilRoot>
        <AuthGuard>
          <App />
        </AuthGuard>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);
