import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// State Management
import { Provider } from 'react-redux';
import store from './store';

// Pages
import Landing from './pages/Landing';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Landing></Landing>
      </Router>
    </Provider>
  );
}

export default App;
