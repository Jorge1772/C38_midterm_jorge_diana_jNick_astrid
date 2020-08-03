import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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


        <BrowserRouter>
          <MyNavBar />
          <Switch>
            <Route exact path="/" component={(props) => <Search {...props} data={this.state.places} />} />
            <Route exact path="/results/:city" component={City} />
            <Route exact path="/faqs" component={Faq} />
          </Switch>
          <Footer />
        </BrowserRouter>


      
    );
  }
}

export default App;
