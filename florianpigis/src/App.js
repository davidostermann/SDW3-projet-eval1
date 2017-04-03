import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorsComponent from './ColorsComponent';
import data from './colors.json';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      color: "#000000",
      colors: data.colors,
      form: {
        name: null,
        color: null,
      }
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

  handleChange(e){
    let newState = this.state;
    switch (e.target.name){
      case "name":
        newState.form.name = e.target.value;
        break;
      case "color":
        newState.form.color = e.target.value;
        break;
    }

    this.setState(newState);
  }

  addColor(event){
    let newState = this.state;

    const newColor = {
      "id": newState.colors.length,
      "name": this.state.form.name,
      "color": this.state.form.color,
    }

    newState.colors.push(newColor);

    this.setState(newState);
  }

  input = {
    "border-radius": "4px",
    "border-style": "solid",
    "margin": "10px 5px"
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" style={{background: this.state.color}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        Quand je clique sur un element de la liste ci-dessous, je change la couleur de fond du header
        <ColorsComponent colors={this.state.colors} changeColor={this.changeColor.bind(this)}/>

        <div style={{"text-align": "center", "width": "80%", "margin": "auto", "background-color":"lightgrey", "padding": "20px", "border-radius":"4px"}}>
          <h3>Ajouter une couleur</h3>
          <label>Nom</label><br />
          <input type="text" name="name" onChange={this.handleChange.bind(this)} style={this.input} value={this.state.form.name}/><br />
          <label>Couleur</label><br />
          <input type="text" name="color" onChange={this.handleChange.bind(this)} style={this.input} value={this.state.form.color}/><br />
          <input type="submit" style={this.input} onClick={this.addColor.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
