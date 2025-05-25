import React from "react";
import Header from "../Header/Header";
import Portfolio from "./portfolio";
import CarouselWithContent from "./home_carousel";
import We_are from "./we_are";
import ThingsWeAre from "./things_we_are";
import Team from "./team";
import Clients from "./clients";
import Testimonial from "./testimonial";
import GetInTouch from "./getInTouch";
import Footer_div from "../Footer/footer";
const Home = () => {
  return (
    <div className="font-Optima h-[100vh]">
      <Header id="home" />
      <section id="home">
        <CarouselWithContent />
        {/* <Personal_Info /> */}
      </section>
      <section id="we_are">
        <We_are />
      </section>
      <section id="things_we_are">
        <ThingsWeAre />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="getInTouch">
        <GetInTouch />
      </section>

      <Footer_div />
    </div>
  );
};

export default Home;
