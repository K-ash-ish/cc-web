import About from "./components/About";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className=" w-full h-screen  ">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
