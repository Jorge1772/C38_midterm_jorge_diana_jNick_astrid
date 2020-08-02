import React from 'react';
import {Navbar, NavLink} from 'react-bootstrap';


class MyNavBar extends React.Component{

  render(){
    return(
      <React.Fragment>
      <Navbar  bg="light" variant="light">
        <Navbar.Brand href="">
          <img
            alt=""
            src="/doggylogo.png"
            width="40"
            height="40"
          className="d-inline-block align-bottom"
          />{' '}
          Social Doggy Distancing

        </Navbar.Brand>

        <NavLink className="nav-bar-item" 
          href="faqs"
          to="faqs">FAQs
          
        </NavLink>
      </Navbar>
    </React.Fragment>
    );
  }
}

export default MyNavBar;