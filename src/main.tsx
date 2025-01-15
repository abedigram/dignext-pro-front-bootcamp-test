import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import rtlPlugin from "stylis-plugin-rtl";
import App from "./App.tsx";
import { BottomNav } from "./components/BottomNav.tsx";
import "./index.css";
import { store } from "./store/store.ts";

const theme = createTheme({
  direction: "rtl",
  typography: {
    allVariants: {
      fontFeatureSettings: "'ss02' on", // Ensure Farsi numbers are displayed
    },
    fontFamily: "Rubik",
  },
  palette: {
    primary: pink,
  },
});

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Container
            maxWidth="sm"
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100dvh",
              padding: 0,
            }}
          >
            <BrowserRouter>
              <App />
              <BottomNav />
            </BrowserRouter>
          </Container>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>
);
