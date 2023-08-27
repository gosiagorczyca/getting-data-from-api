import React from "react";
import AmiiboComponent from "./components/AmiiboComponent";
import Header from "./components/Header";

import { QueryClient, QueryClientProvider } from "react-query";
import { CssBaseline, Container, ThemeProvider } from "@mui/material";

import i18n from "i18next";
import { I18nextProvider } from "react-i18next";

import theme from "./theme";
import enTranslation from "./locales/en/translation.json";
import plTranslation from "./locales/pl/translation.json";

const queryClient = new QueryClient();

i18n.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      translation: enTranslation
    },
    pl: {
      translation: plTranslation
    }
  }
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container>
            <div className="App">
              <Header>
                <AmiiboComponent />
              </Header>
            </div>
          </Container>
        </ThemeProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
};

export default App;
