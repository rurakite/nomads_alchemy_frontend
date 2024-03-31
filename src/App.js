import React, { Component } from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Popular from './Components/Popular/Popular';
import Features from "./Components/Features/Features";
import Countries from './Components/Countries/Countries';  
import Visas from './Components/Visas/Visas';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';



const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <About />
      <Blog />
      <Footer />
      {/* <Countries />
      <Visas />
      <Features /> */}
    </>
  );
};

export default App;
