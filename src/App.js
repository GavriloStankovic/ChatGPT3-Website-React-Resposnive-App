import React from "react";
import "./App.css";
import Brand from "./components/brand/Brand.jsx";
import Cta from "./components/cta/Cta.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./containers/footer/Footer.jsx";
import Blog from "./containers/blog/Blog.jsx";
import Possibility from "./containers/possibility/Possibility.jsx";
import Features from "./containers/features/Features.jsx";
import WhatGPT3 from "./containers/whatGPT3/whatGPT3.jsx";
import Header from "./containers/header/Header.jsx";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
