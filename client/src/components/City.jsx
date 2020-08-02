import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

// const City = ({ match }) => {
//   const [parks, setParks] = useState([]);

//   const fetchParks = () => {
//     const city = match.params.city;

//     axios.get(`/api/places?query=${city}`).then((res) => {
//       setParks(res.data.results);
//     });
//   };

//   useEffect(() => {
//     fetchParks();
//   }, []);

//   return (
//     <div>
//       <h1>THis is the city page</h1>
//       {parks.map((park) => (
//         <p key={park.place_id}>{park.name}</p>
//       ))}
//     </div>
//   );
// };

class City extends Component {
  state = { parks: [] };

  componentDidMount() {
    this.fetchParks();
  }

  fetchParks = () => {
    const { city } = this.props.match.params;

    axios.get(`/api/places?query=${city}`).then((res) => {
      this.setState({ parks: res.data.results });
    });
  };

  render() {
    const { parks } = this.state;

    return (
      <div>
        <h1>THis is the city page</h1>
        {parks.map((park) => (
          <p key={park.place_id}>{park.name}</p>
        ))}
      </div>
    );
  }
}

export default City;
