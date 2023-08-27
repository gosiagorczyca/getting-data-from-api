import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";

i18n.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    pl: {
      translation: require("./locales/pl/translation.json")
    },
    cs: {
      translation: require("./locales/cs/translation.json")
    },
    en: {
      translation: require("./locales/en/translation.json")
    }
  }
});

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>,
  document.getElementById("root")
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
