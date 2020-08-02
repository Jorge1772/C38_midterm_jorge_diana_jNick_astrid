import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import FaqPage from './components/FaqPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/Carousel';

import './App.css';


const App = () => {


  return (
      <AppContextProvider>
          <Carousel />
           <FaqPage/> 
      </AppContextProvider>
  );
};

export default App;
