import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import useInitAppHooks from "./hooks/useInitAppHooks";
import { ThemeProvider } from "@mui/material";
import useAppTheme from "./hooks/useAppTheme";
import Store from "./Store";

function App() {
  useInitAppHooks();
  const theme = useAppTheme();
  return (
    <Store>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<LandingPage />} />
            <Route path={"/project"} element={<ProjectPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Store>
  );
}

export default App;
