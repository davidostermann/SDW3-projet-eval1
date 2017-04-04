import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { colors } from './data/colors.json';
import ColorPicker from './ColorPicker';
import ColorAdder from './ColorAdder';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = (localStorage.state) ? JSON.parse(localStorage.state) : {
      selectedColor: '#000',
      colors: colors
    };
  }

  pickColor = (color) => {
    this.setState({
      selectedColor: color
    });
  }

  delColor = (id) => {
    let colors = this.state.colors.filter((color) => {
      return (color.id !== id);
    });

    this.setState({colors});
  }

  componentDidUpdate = () => {
    localStorage.state = JSON.stringify(this.state);
  }

  getNewId = (colors) => {
    if (colors.length === 0) {
      return 0;
    } else {
      return colors[colors.length - 1].id + 1;
    }
  }

  addColor = ({name, hex: color}) => {
    const newColors = [...this.state.colors, {id: this.getNewId(this.state.colors), name, color}];
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
        <ColorPicker colors={this.state.colors} pick={this.pickColor} del={this.delColor}/>
        <ColorAdder addColor={this.addColor}/>
      </div>
    );
  }
}

export default App;
