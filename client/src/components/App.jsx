import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import City from './City';
import Faq from './FaqPage';
import Footer from './Footer';
import MyNavBar from './Navbar';
import Search from './Search';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
  }

  render() {
    return (
      <Router>
        <MyNavBar />
        <Route exact path="/" component={Search} />
        <Route path="/faqs" component={Faq} />
        <Route path="/results/:city" component={City} />
        <Footer />
      </Router>
    );
  }
}

export default App;
