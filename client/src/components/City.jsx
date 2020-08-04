import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Cards from './Cards';

const City = ({ match }) => {
  const [parks, setParks] = useState([]);

  const fetchParks = async () => {
    const city = match.params.city;
    try {
      const response = await axios.get(`/api/places/${city}`);
      setParks(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchParks();
  }, []);

  return (
    <div>
      <h1>This is the city page</h1>
      <div id="cards">
        {parks.map((park) => (
          <Cards data={park} />
        ))}
      </div>
    </div>
  );
};

export default City;
