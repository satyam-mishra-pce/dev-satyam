"use client";

import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Achievements from "./OtherAchievements";
import Connect from "./Connect";
import Footer from "./Footer";
import Experience from "./Experience";
import BuiltUsing from "./BuiltUsing";

const Portfolio = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <BuiltUsing />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
