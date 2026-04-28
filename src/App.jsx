import React from "react";
import { Route, Routes } from "react-router-dom";
import About from '../src/components/about/About'
function App() {
  return (
    <div>
       <About/>
      <Routes>
        <Route path="/" element={<h1>home page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
