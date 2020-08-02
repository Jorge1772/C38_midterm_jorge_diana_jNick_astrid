import React, { Component } from 'react';
import MyNavBar from './Navbar';
import Faq from './Faq';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Search from './Search';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <MyNavBar />
        <Router>
          <Route path="/faqs" component={Faq} />
        </Router>
        <Search data={this.state.places} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
