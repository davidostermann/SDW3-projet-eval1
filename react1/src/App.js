import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorList from './ColorList'
import data from './colors.json';
import { SketchPicker } from 'react-color';
import { PhotoshopPicker } from 'react-color';
import { SwatchesPicker } from 'react-color';

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
  state = {
    background: '#123',
  };

  handleChangeComplete = (color) => {
      this.setState({ background: color.hex });
    };
    render() {
    return <SketchPicker onChangeComplete={ this.handleChangeComplete } />;
  }

    render() {
      return (
        <div>
          <div className="App">
          <div className="App-header"  style={{background: this.state.color}}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <ColorList colors={this.state.colors} changeColor={this.changeColor.bind(this)}/>
        </div>
          <SketchPicker
            color={ this.state.background }
            onChangeComplete={ this.handleChangeComplete }
          />
        </div>
      );
    }
  }

export default App;
