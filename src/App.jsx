import React from "react";
import { Route, Routes } from "react-router-dom";
 
import IconeSlider from "./components/IconeSlider/IconeSlider";
function App() {
  return (
    <div>
      <IconeSlider/>
       
      <Routes>
        <Route path="/" element={<h1>home page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
