import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import CountryDetail from './Component/CountryDetail/CountryDetail';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/country/:countryName">
          <CountryDetail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
