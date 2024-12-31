import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Route from "./routes/Route.jsx";
import AuthContext from "./context/AuthContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <Route />
      </AuthContext>
    </QueryClientProvider>
  </StrictMode>
);
