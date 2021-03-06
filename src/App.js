import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import AboutUs from './component/AboutUs/AboutUs';
import NavBar from './containers/NavBar';
import ContactUs from './component/ContactUs/ContactUs';
import JobSeekers from './component/JobSeekers/JobSeekers';

import Home from "./containers/Home"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs}/>
          <Route exact path="/contact-us" component={ContactUs}/>
          <Route exact path="/job-seekers" component={JobSeekers}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
