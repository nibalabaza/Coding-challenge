import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/Movie';
import Series from './components/Series'

function App() {
  return (
    <div className="App">
      <Router>

      {/* <Link to="/movie">
      <image src="../assets/placeholder.png" className="githubIcon" />
      </Link>
      <Link to="series">
      <image src="../assets/placeholder.png" className="githubIcon" />
      </Link> */}

      <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/movie' component={Movie} />
             <Route exact path='/series' component={Series} />
             
         </Switch>
      </Router>
   
    </div>
  );
}

export default App;
