import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      {/* maybe light instead? */}
      <main className="dark text-foreground bg-background h-screen overflow-hidden">
      <App />
      </main>
    </NextUIProvider>
  </StrictMode>
);
