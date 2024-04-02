import { React } from "react";
import { Route, Routes } from "react-router-dom";



import './app.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import CountriesList from './Components/CountriesList/CountriesList';
import SingleCountry from './Components/SingleCountry/SingleCountry';



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/" element={<CountriesList />} />
        <Route path="/country/:id/" element={<SingleCountry />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
