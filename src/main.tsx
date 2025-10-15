import { createRoot } from "react-dom/client";
import "./index.css";
import "@/styles/fonts.scss";
import { RouterProvider } from "react-router";
import router from "./app/routes";
import { ContextQueryClient } from "./lib/query/ContextQueryClient";

createRoot(document.getElementById("root")!).render(
  <ContextQueryClient>
    <RouterProvider router={router} />
  </ContextQueryClient>
);
