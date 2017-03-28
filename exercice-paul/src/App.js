import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Quand je clique sur un element de la liste ci-dessous, je change la couleur de fond du header
        </p>
        <div className="colors">
            <div className="violet">Violet</div>
            <div className="marin_blue">Marin Blue</div>
            <div className="pale_green">Pale Green</div>
            <div className="vermillion">Vermillion</div>
            <div className="skyblue">Sky Blue</div>
            <div className="salmon">Salmon</div>
        </div>
      </div>
    );
  }
}

export default App;
