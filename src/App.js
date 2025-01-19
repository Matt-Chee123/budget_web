import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./config/app_routing"


function App() {
  return (

    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
