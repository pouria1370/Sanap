import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const rootElement = document.getElementById("root");
const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#008f9c", // Focused border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#008f9c", // Hover border color
          },
        },
      },
    },
  },
  direction: "rtl",
});
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CacheProvider value={cacheRtl}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </CacheProvider>
      </ThemeProvider>
    </StyledEngineProvider>
    ;
  </StrictMode>
);
