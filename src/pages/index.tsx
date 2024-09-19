import Navbar from "@/components/layouts/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
  </div>
  );
}
