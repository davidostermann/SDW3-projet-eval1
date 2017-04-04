import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';

export default class App extends Component {

  state = { color: '#3F51B5', colors: data.colors, newColorName: '', newColorHex: '' };

  addColor() {
    const id = this.state.colors.length;
    const name = this.state.newColorName;
    const color = this.state.newColorHex;
    this.setState({ colors: [ ...this.state.colors, { id, name, color }], newColorName: '', newColorHex: '' });
  }

  render() {
    return (
      <div className="app">
        <div className="app__header" style={{ background: this.state.color }}>
          <img src={ logo } className="app__logo" alt="logo" />
          <h2>Coloring input</h2>
        </div>
        <p className="app__intro">Quand je clique sur un élément de la liste ci-dessous, je change la couleur de fond du header</p>
        { this.state.colors.map( color => (
          <button style={{ background: color.color }} onClick={ () => this.setState({ color: color.color }) }>{ color.name }</button>
        )) }
        <h2>Add a new color</h2>
        <input placeholder="Color name" value={ this.state.newColorName } onChange={ (e) => this.setState({ newColorName: e.target.value }) } />
        <input placeholder="Color hex" value={ this.state.newColorHex } onChange={ (e) => this.setState({ newColorHex: e.target.value }) } />
        <button onClick={ this.addColor.bind(this) }>Add</button>
      </div>
    );
  }
}