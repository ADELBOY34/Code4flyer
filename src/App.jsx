import {Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import React from "react";
import IconeSlider from "./components/IconeSlider/IconeSlider";
import TerminalSnippetViewer from "./components/TerminalSnipeetViewer/TerminalSnippetViewer";
import CodeComponenets from "./components/CodeComponenets/CodeComponenets";
import NoteComponenets from './components/noteComponenets/NoteComponenets';
import Howitworks from "./pages/Howitworks";
import Contact from './pages/ContactForm';

import TypeScriptPage from './pages/typeScriptPage/TypeScriptPage';
 

function App() {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/howitworks" element={<Howitworks />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/typescript" element={<TypeScriptPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

