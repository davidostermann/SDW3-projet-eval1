import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { colors } from './data/colors.json';
import ColorPicker from './ColorPicker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColor: '#000',
      colors: colors
    };
  }

  pickColor(color) {
    this.setState({
      selectedColor: color
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
        <ColorPicker colors={this.state.colors} pick={this.pickColor.bind(this)}/>
      </div>
    );
  }
}

export default App;
