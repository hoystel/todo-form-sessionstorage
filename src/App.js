import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormComponentOne from './components/formComponentOne/formComponentOne';
import FormComponentTwo from './components/formComponentTwo/formComponentTwo';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-container">
          <BrowserRouter>
          <Switch>
            <Route path="/form-two" component={FormComponentTwo} />
            <Route path="/" component={FormComponentOne} />
          </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
