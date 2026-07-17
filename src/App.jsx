import About from "./Components/About";
import AffiliationsSection from "./Components/AffiliationsSection";
import Books from "./Components/Books";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import GhanaProjects from "./Components/GhanaProjects";
import Header from "./Components/Header";
import HeroSection from "./Components/Herosection";
import Research from "./Components/Research";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <AffiliationsSection />
      <Research />
      <GhanaProjects />
      <Books />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
