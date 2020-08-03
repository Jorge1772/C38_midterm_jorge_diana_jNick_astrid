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
        <Navbar className="nav-bar">
          <Navbar.Brand href="">
            <img
              onClick={this.handleNavigation}
              alt=""
              src="/513_noShadow.png"
              width="50"
              height="50"
              className="d-inline-block align-center"
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
