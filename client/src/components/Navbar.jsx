import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
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
              className="nav-logo-name"
              style={{ display: 'inline-block', alignItems: 'center' }}
            />{' '}
            Social Doggy
          </Navbar.Brand>
          <NavLink className="nav-bar-item" to="/faqs">
            FAQs
          </NavLink>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default withRouter(MyNavBar);
