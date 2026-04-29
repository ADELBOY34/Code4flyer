import About from "../components/about/About";
import Herosection from "../components/HeroSection/Herosection";
import Howitworks from "../components/howitworks/Howitworks";

function Homepage() {
  return (
    <div>
      <Herosection />
      <Howitworks />
      <About />
    </div>
  );
}

export default Homepage;
