import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, NavLink } from 'react-bootstrap';

class MyNavBar extends React.Component {
  handleNavigation = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="">
            <img
              onClick={this.handleNavigation}
              alt=""
              src="/doggylogo.png"
              width="40"
              height="40"
              className="d-inline-block align-bottom"
            />{' '}
            Social Doggy Distancing
          </Navbar.Brand>

          <NavLink className="nav-bar-item" href="/faqs">
            FAQs
          </NavLink>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default withRouter(MyNavBar);
