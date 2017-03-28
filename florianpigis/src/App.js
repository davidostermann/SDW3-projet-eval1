import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorsComponent from './ColorsComponent'
import data from './colors.json';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      color: "#000000",
      colors: data.colors
    }
  }

  changeColor(colorId){
    const colors = this.state.colors;
        
    let newState = this.state;
    colors.forEach(function(color){
      if (color.id == colorId){
        newState.color = color.color;
      }
    });

    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" style={{background: this.state.color}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ColorsComponent colors={this.state.colors} changeColor={this.changeColor.bind(this)}/>
      </div>
    );
  }
}

export default App;
