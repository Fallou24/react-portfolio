import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import ScrollTop from "./components/scroolTop/ScrollTop";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import "./styles/app.scss";

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      <ScrollTop/>
    </>
  );
};

export default App;
