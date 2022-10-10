import React from "react";
import "./App.css";
import Main from "./components/Main";
import KeepProvider from "./context/KeepProvider";
import { SnackbarProvider } from "notistack";
function App() {
  return (
    <SnackbarProvider maxSnack={4}>
      <KeepProvider>
        <Main />
      </KeepProvider>
    </SnackbarProvider>
  );
}

export default App;
