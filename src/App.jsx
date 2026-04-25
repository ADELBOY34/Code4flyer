import React from "react";
import { Route, Routes } from "react-router-dom";
import TerminalSnippetViewer from "./components/TerminalSnipeetViewer/TerminalSnippetViewer";

function App() {
  return (
    <div>
       
      <Routes>
        <Route path="/" element={<h1>home page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
