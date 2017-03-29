import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { colors } from './data/colors.json';
import ColorPicker from './ColorPicker';
import ColorAdder from './ColorAdder';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColor: '#000',
      colors: colors
    };
  }

  pickColor = (color) => {
    this.setState({
      selectedColor: color
    });
  }

  addColor = ({name, hex: color}) => {
    const newColors = [...this.state.colors, {id: this.state.colors.length, name, color}];
    this.setState({
      colors: newColors
    });
  }

  render() {
    const style = {
      header: {
        backgroundColor: this.state.selectedColor
      }
    };

    return (
      <div className='App'>
        <div className='App-header' style={style.header}>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to ColorPicker</h2>
        </div>
        <ColorPicker colors={this.state.colors} pick={this.pickColor}/>
        <ColorAdder addColor={this.addColor}/>
      </div>
    );
  }
}

export default App;
