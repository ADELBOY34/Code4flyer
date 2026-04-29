import {Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import React from "react";
 
 
import IconeSlider from "./components/IconeSlider/IconeSlider";
import TerminalSnippetViewer from "./components/TerminalSnipeetViewer/TerminalSnippetViewer";
import CodeComponenets from "./components/CodeComponenets/CodeComponenets";
import Homepage from "./pages/Homepage";
import NoteComponenets from './components/noteComponenets/NoteComponenets';

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
      </div>
  );
}

export default App;

