import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.jsx';
import About from './pages/about/About.jsx';
import Home from './pages/home/Home.jsx';
import NotFound from './pages/not-found/NotFound.jsx';
import UserDetails from './components/user-details/UserDetails.jsx';

import GithubContext from './context/github/githubContext';

import './App.css';

const App = (_) => {
  const context = useContext(GithubContext);

  const { getRandomUsers } = context;

  useEffect(() => {
    getRandomUsers();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Router>
        <Navbar title={'GitHub Finder'} icon={'fab fa-github'} />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/user/:login' component={UserDetails} />
            <Route exact path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
