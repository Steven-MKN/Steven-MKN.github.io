import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import useInitAppHooks from "./useInitAppHooks";

function App() {
  useInitAppHooks();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage/>}/>
        <Route path={"/project"} element={<ProjectPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
