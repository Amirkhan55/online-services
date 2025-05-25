import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./Components/loader/loader";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/about_us";
import Services from "./Components/Pages/service";
import OurProcess from "./Components/Pages/our_process";
import MyPortfolio from "./Components/Pages/my_portfolio";
import ContactUs from "./Components/Pages/contactus";
import MyTeam from "./Components/Pages/myTeam";
import DevelopmentServices from "./Components/Pages/development_services";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading delay (e.g., for 1.5s)
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/service/development" element={<DevelopmentServices />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route path="/team" element={<MyTeam />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
