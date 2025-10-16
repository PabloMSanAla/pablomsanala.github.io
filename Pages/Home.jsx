import React from "react";
import Navigation from "../Components/Navigation.jsx";
import Hero from "../Components/Hero.jsx";
import About from "../Components/About.jsx";
import Education from "../Components/Education.jsx";
import Research from "../Components/Research.jsx";
import Photography from "../Components/Photography.jsx";
import Outdoors from "../Components/Outdoors.jsx";
import Contact from "../Components/Contact.jsx";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Research />
      <Photography />
      <Outdoors />
      <Contact />
    </div>
  );
}