import React from "react";
import { BrowserRouter } from "react-router-dom";
//navbar component
import AppRouter from "./config/app_routing"


function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
