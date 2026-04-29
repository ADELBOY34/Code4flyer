import React from "react";
import { Route, Routes } from "react-router-dom";
 
import IconeSlider from "./components/IconeSlider/IconeSlider";
import TerminalSnippetViewer from "./components/TerminalSnipeetViewer/TerminalSnippetViewer";
import CodeComponenets from "./components/CodeComponenets/CodeComponenets";
function App() {
  return (
    <div>
      <IconeSlider/>
      <br />
       <TerminalSnippetViewer/>
       <br />
       <CodeComponenets/>
      <Routes>
        <Route path="/" element={<h1>home page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
