import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import Carousel from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    fetch('/api/demo')
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message));
  };

  useEffect(fetchDemoData, []);

  return (
    <div className="carousel">
      <Carousel />
    </div>
  );
};

export default App;
