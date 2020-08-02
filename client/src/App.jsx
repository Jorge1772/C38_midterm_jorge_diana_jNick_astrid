import React from 'react';
import Carousel from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar';
import MainButtton from './components/Button';
import InputBarA from './components/InputBar';
import './App.css';

const App = () => {
  return (
    <div>
      <div>
        <Navbar1 />
      </div>
      <div>
        <Carousel />
      </div>
      <InputBarA />
      <MainButtton />
    </div>
  );
};

export default App;
