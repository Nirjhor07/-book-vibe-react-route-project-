import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";
import ReadListProvider from "./components/ContextApi/ReadListProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReadListProvider>
      <RouterProvider router={router}></RouterProvider>
    </ReadListProvider>
  </StrictMode>,
);
