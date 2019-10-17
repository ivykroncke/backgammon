import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login } from './components/Login'
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="App">

      <Router>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup}/>
        {/* <Route path="/games" /> */}
      </Router>

    </div>
  );
}

export default App;
