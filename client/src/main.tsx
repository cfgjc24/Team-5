import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      {/* maybe light instead? */}
      <main className="dark text-foreground bg-background h-screen overflow-hidden p-5">
        <App />
      </main>
    </NextUIProvider>
  </StrictMode>
);
