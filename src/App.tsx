import React from "react";
import "./App.css";
import Main from "./components/Main";
import KeepProvider from "./KeepProvider";
function App() {
  return (
    <KeepProvider>
      <Main />
    </KeepProvider>
  );
}

export default App;
