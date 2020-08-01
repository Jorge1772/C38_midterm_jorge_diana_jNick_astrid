import React from 'react';
import {Navbar} from 'react-bootstrap';


class MyNavBar extends React.Component{

  render(){
    return(
      <React.Fragment>
      <Navbar  bg="light" variant="light">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/doggylogo.png"
        width="40"
        height="40"
      className="d-inline-block align-bottom"
      />{' '}
      Social Doggy Distancing
      
    </Navbar.Brand>
  </Navbar>
    </React.Fragment>
    );
  }
}

export default MyNavBar;