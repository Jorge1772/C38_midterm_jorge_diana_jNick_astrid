import React, { Component } from 'react';
import MyNavBar from './Navbar';
import  Faq from './Faq';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MyNavBar />
        <Router>
          <Switch>
        <Route path="/faq" component={Faq} />
        </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
