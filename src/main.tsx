import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// @ts-expect-error bla
import { registerSW } from "virtual:pwa-register";

registerSW({
  onNeedRefresh() {
    console.log("Neues Update verfügbar. Bitte neu laden!");
  },
  onOfflineReady() {
    console.log("App ist jetzt offline verfügbar!");
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
