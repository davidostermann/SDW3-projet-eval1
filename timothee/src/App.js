import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorList from './ColorList';
import ColorAdd from './ColorAdd';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colors : [
        {"id":0, "name": "rouge", "color": "#f44336"},
        {"id":1, "name": "rose", "color": "#E91E63"},
        {"id":2, "name": "bleu", "color": "#2196F3"},
        {"id":3, "name": "vert", "color": "#CDDC39"},
        {"id":4, "name": "orange", "color": "#FF9800"}
      ]
    };

    this.selectColor = (color) => {
      this.setState({
        selectedColor : color
      });
    }

    this.addColor = (name, color) => {
      if(color.match(/(^#[0-9A-Fa-f]{6}$)|(^#[0-9A-Fa-f]{3}$)/g)){
        this.setState({ 
            colors : [ ...this.state.colors, {"id":this.state.colors.length, "name": name, "color": color}]
          })
      }
    }
  }


  render() {
    return (
      <div className="App">
        <div className="App-header" style={{background: this.state.selectedColor}} >
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Coloring input</h2>
        </div>
        <div>
          <ColorList colors={this.state.colors} selectColor={this.selectColor}/>
          <ColorAdd addColor={this.addColor}/>
        </div>
      </div>
    );
  }
}

export default App;
