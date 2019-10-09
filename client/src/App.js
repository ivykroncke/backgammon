import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login } from './components/Login'

function App() {
  return (
    <div className="App">

      <Router>
        <Route path="/login" component={Login} />
        {/* <Route path="/login" />
        <Route path="/games" /> */}
      </Router>

    </div>
  );
}

export default App;
