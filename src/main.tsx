import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";

import en from "~/i18n/en.json";
import de from "~/i18n/de.json";

// @ts-expect-error bla
import { registerSW } from "virtual:pwa-register";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

registerSW({
  onNeedRefresh() {
    console.log("Neues Update verfügbar. Bitte neu laden!");
  },
  onOfflineReady() {
    console.log("App ist jetzt offline verfügbar!");
  },
});

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    resources: {
      en,
      de,
    },
    fallbackLng: "de",
    interpolation: {
      escapeValue: false,
    },
  });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
