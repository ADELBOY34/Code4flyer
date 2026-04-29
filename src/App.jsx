import React from "react";
import { Route, Routes } from "react-router-dom";
 
import IconeSlider from "./components/IconeSlider/IconeSlider";
import TerminalSnippetViewer from "./components/TerminalSnipeetViewer/TerminalSnippetViewer";
import CodeComponenets from "./components/CodeComponenets/CodeComponenets";
import Homepage from "./pages/Homepage";

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
        <Route path="/" element={<Homepage />} />
    
      </Routes>
    </div>
  );
}

export default App;
