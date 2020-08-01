import React, { Component } from 'react';
import MyNavBar from './Navbar';
import  Faq from './Faq';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MyNavBar />
        <Router>
            <Route path="/faqs" component={Faq} />
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
