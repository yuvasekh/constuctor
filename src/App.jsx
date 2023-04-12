import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route, Navigate, Link, Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Header title="My header" subtitle="subtitle2" />
      <div className="imgmid h-10 sm:h-20 md:h-30 lg:h-40 xl:h-50">
        <h1>Come And Join And Get Daily Paid Off</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer note="Footer Note" />
    </div>
  );
};

export default App;
