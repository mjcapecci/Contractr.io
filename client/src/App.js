import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './global.scss';

// State Management
import { Provider } from 'react-redux';
import store from './store';

// Layout
import MobileNavbar from './components/Layout/MobileNavbar';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Pages
import Landing from './pages/Landing';
import Search from './pages/Search';
import User from './pages/User';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MobileNavbar />
        <div className='main'>
          <Navbar></Navbar>
          <div className='container content-container'>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/search' component={Search} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/user/:user' component={User} />
              <Route exact path='/profile' component={Profile} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer></Footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
