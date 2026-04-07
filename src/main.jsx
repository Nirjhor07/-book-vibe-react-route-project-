import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Hudai from "./components/Hudai.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hudai></Hudai>
  </StrictMode>,
);
