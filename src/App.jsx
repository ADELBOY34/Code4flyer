import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Howitworks from "./pages/Howitworks";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/howitworks" element={<Howitworks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

