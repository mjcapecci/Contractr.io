import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './global.scss';

// State Management
import { Provider } from 'react-redux';
import store from './store';

// Layout
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Pages
import Landing from './pages/Landing';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar></Navbar>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Landing} />
            </Switch>
          </div>
          <Footer></Footer>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
