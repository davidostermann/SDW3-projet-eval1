import React, { Component } from 'react';
import './App.css';
import { colors } from './data/colors.json';
import ColorPicker from './ColorPicker';
import ColorAdder from './ColorAdder';
import Header from './Header';
import Loading from './Loading';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    setTimeout(() => {
      const state = (localStorage.state) ? JSON.parse(localStorage.state) : {
        selectedColor: '#000',
        colors: colors
      };
      this.setState(state);
    }, 2000);
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
    if (this.state.colors) {
      return (
        <div className='App'>
          <Header selectedColor={this.state.selectedColor}/>
          <ColorPicker colors={this.state.colors} pick={this.pickColor} del={this.delColor}/>
          <ColorAdder addColor={this.addColor}/>
        </div>
      );
    } else {
      return (
        <Loading />
      );
    }
  }
}

export default App;
