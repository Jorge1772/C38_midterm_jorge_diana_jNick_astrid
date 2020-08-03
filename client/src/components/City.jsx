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
      <h1>THis is the city page</h1>
      {parks.map((park) => (
        <Cards data={park} />
        // <p key={park.place_id}>{park.name}</p>
      ))}
    </div>
  );
};

export default City;
