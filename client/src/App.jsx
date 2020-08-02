import React from 'react';
import Carousel from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar';
import Cards from './components/Cards';
import InputBarA from './components/InputBar';
import './App.css';

const App = () => {
  return (
    <>
      <div>
        <Navbar1 />
      </div>
      <div id="#myCarousel">
        <Carousel />
      </div>
      <div>
        <InputBarA />
      </div>
      <div id="cards">
        <Cards />
      </div>
    </>
  );
};

export default App;
