import React from "react";
import Personal_Info from "./personal_info";
import Feature from "./feature";
import Header from "../Header/Header";
import Portfolio from "./portfolio";
import Resume from "./Resume/resume";

const Home = () => {
  return (
    <div className="bg-[#222428] font-Optima h-[100vh]">
      <Header id="home" />
      <section id="home">
        <Personal_Info />
      </section>
      <section id="feature">
        <Feature />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="clients">
        <h1>Clients Section</h1>
      </section>
      <section id="pricing">
        <h1>Pricing Section</h1>
      </section>
      <section id="blog">
        <h1>Blog Section</h1>
      </section>
      <section id="contact">
        <h1>Contact Section</h1>
      </section>
    </div>
  );
};

export default Home;
