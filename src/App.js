import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./config/app_routing"
import { AxiosProvider } from './contexts/axiosContext';  // Import AxiosProvider


function App() {
  return (
    <AxiosProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </AxiosProvider>
  );
}

export default App;
