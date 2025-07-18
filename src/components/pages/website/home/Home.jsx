import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import About from "./about/About";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact/Contact";

const Home = () => {
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <Header />
          <Hero />
          <Services />
          <About />
          <Testimonials />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
