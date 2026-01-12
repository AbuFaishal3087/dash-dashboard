import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import useAuthStore from "./store/useAuthStore";
import "./index.css";
import { router } from "./router";


function AppRouter() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <RouterProvider
      router={router}
      context={
        {
          auth: {
            isLoggedIn,
          },
        }
      }
    />
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
