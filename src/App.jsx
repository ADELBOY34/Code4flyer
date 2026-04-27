import React from "react";
import { Route, Routes } from "react-router-dom";
import TerminalSnippetViewer from "./components/TerminalSnipeetViewer/TerminalSnippetViewer";
import CodeComponenets from "./components/CodeComponenets/CodeComponenets";

function App() {
  return (
    <div>
      <TerminalSnippetViewer command={" npm run dev "}/>
      
      <Routes>
        <Route path="/" element={<h1>home page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
