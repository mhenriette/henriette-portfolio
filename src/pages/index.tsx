import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
// import Expetise from "@/components/sections/Expetise";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechSkills from "@/components/sections/TechSkills";

export default function Home() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <About/>
      <Projects />
      <TechSkills />
      <Contact />
      <Footer />
      {/* <Expetise/> */}
  </div>
  );
}
