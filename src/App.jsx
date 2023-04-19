import React, { Fragment, useEffect,useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route, Navigate, Link, Outlet,useLocation } from "react-router-dom";
import SliderOpen from "./SiderOpen";
import Register from './Register'
import Homeheader from "./Homeheader";
import { Layout } from "antd";
import { Contractor } from "./Roles/Contractor";
const { Content } = Layout;

const App = () => {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname,"yuva")
const [isLoggedin,setisLoggesin]=useState(localStorage.getItem('isLoggedin'))

useEffect(()=>
{
 
},[isLoggedin])
  return (
    <Fragment>

      <Header/>

  <Layout >
    {
  pathname==='/contractor'?<> <SliderOpen /></>:<>  <Homeheader/></>

    }
     
      <Layout>
        <Content >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contractor" element={<Contractor />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
    {
  pathname==='/contractor'?<></>:<>  <Footer/></>

    }
    </Fragment>
  );
};

export default App;
