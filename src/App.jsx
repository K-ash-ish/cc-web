import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className=" w-full h-screen  ">
      <Navbar />
      <HeroSection />
      <Services />
      <Testimonials />
    </div>
  );
}

export default App;
