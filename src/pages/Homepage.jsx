import About from "../components/about/About";
import Herosection from "../components/HeroSection/Herosection";
import IconeSlider from "../components/IconeSlider/IconeSlider";
import NoteComponenets from "../components/noteComponenets/NoteComponenets";
import Howitworks from "../components/howitworks/Howitworks";
function Homepage() {
  return (<div>
  <Herosection />
  <About />
  <IconeSlider/>
  <Howitworks />
  </div>)
}

export default Homepage;
