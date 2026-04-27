import React from "react";
import { Route, Routes } from "react-router-dom";
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
