import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Experince from "./components/Experince";
import Feedback from "./components/Feedback";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Works from "./components/Works";
import StarsCanvas from "./components/Canvas/Stars";
function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experince />
        <Tech />
        <Works />
        <Contact />
        <StarsCanvas />
        <Feedback />
      </div>
    </BrowserRouter>
  );
}

export default App;
