import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Books from "@/components/Books";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Books />
        <Contact />
      </main>
      <Footer />
    </>
  );
}