import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import SiderOpen from "./SiderOpen";
import { Routes, Route, Navigate, Link, Outlet } from "react-router-dom";
const App = () => {
  return (
    <Fragment>
  <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer note="Footer Note" />
    </Fragment>
  );
};

export default App;
