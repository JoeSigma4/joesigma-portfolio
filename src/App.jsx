import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Title from "./components/Title/Title";
import About from "./components/about/About";
import Project from "./components/projects/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <Title
          title="Skills And Expertise"
          text="Technologies and tools I use to bring ideas to life"
        />
        <Skills />
        <Title
          title="Skills Featured"
          text="These are the projects I have done so far"
        />
        <Project />
        <Title
          title="About Me"
          text="Technologies and tools I use to bring ideas to life"
        />
        <About />
        <Title
          title="Get In Touch"
          text="Have a project in mind? Let's work together to create something amazing."
        />

        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
