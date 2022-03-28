import React from 'react';
import './App.css';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';
import AnimalDetail from '../AnimalDetail/AnimalDetail';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>SPAs!</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/animals'>Animals</Link></li>
            <li><Link to='/plants'>Plants</Link></li>
          </ul>
        </nav>
        <Route path='/animals' exact>
          <Animals />
        </Route>

        <Route path='/animals/:id'>
          <AnimalDetail />
        </Route>

        <Route path='/plants'>
          <Plants />
        </Route>

        <Route path='/' exact>
          <Home />
        </Route>

      </div>
    </Router>
  );
}

export default App;
