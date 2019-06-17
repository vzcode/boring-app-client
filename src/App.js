import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Entree from './components/Entree';
import Dessert from './components/Dessert';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Boring App</h1>
          <h2>It's so boring it's mildly interesting</h2>
        </header>
        <Entree></Entree>
        <Dessert></Dessert>
      
      </div>
    );
  }
}

export default App;
