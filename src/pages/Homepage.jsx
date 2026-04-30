import About from "../components/about/About";
import Herosection from "../components/HeroSection/Herosection";
import IconeSlider from "../components/IconeSlider/IconeSlider";
import NoteComponenets from "../components/noteComponenets/NoteComponenets";
import Howitworks from "../components/howitworks/Howitworks";
function Homepage() {
  return (<div>
  <Herosection />
  <NoteComponenets note={"Should I use Create React App? No. Create React App has been deprecated. For more information, see Sunsetting Create React App."}/>  
  <About />
  <IconeSlider/>
  <Howitworks />
  </div>)
}

export default Homepage;
