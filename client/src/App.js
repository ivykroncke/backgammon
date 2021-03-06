import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login } from './components/Login'
import { Signup } from './components/Signup';
import { Games } from './components/Games';
import { Nav } from './components/Nav';
import { Game } from './components/Game';

function App() {

  const token = localStorage.getItem("token")

  return (
    <div className="App">

      <Nav token={token}/>

      <Router>
        <Route path="/login" render={(props)=> <Login token={token} {...props}/> } />
        <Route path="/signup" render={(props)=> <Signup token={token} {...props}/> } />
        <Route exact path="/games" render={(props)=> <Games token={token} {...props}/> } />
        <Route exact path="/games/:id" render={(props)=> <Game {...props} /> } />
      </Router>

    </div>
  );
}

export default App;
