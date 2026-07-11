import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

import { CartProvider } from "./context/CartContext";
import { UIProvider } from "./context/UIContext";

createRoot(document.getElementById("root")).render(

  <StrictMode>

    <UIProvider>

      <CartProvider>

        <App />

      </CartProvider>

    </UIProvider>

  </StrictMode>

);