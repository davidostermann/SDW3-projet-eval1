import React, { Component } from 'react';
import logo from './logo.svg';
import data from './colors.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name:'', color:'', style: { background: ''}, colors: data.colors.map( item => ({ ...item}))
    }
  }
  addColor = (name, color) => { 
    const id = this.state.colors.length;
    this.setState({
      colors: [...this.state.colors, {id, name, color}]
    },  () => {
    const color = JSON.stringify(this.state.colors[this.state.colors.length -1]);
    console.log('Color add', color)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" style={ this.state.style }>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Coloring Input</h2>
        </div>
        <label htmlFor="name">Ajouter une couleur</label><br/>
        <input type="text" name="name" placeholder="Color's name" value={this.state.name} onChange={ (e) => this.setState({ name: e.target.value })}></input><br/>
        <label htmlFor="color">Ajouter une couleur</label> <br />
        <input type="text" name="color" placeholder="Color's hex" value={this.state.color} onChange={ (e) => this.setState({ color: e.target.value })}></input>
        <button onClick={ () => this.addColor(this.state.name, this.state.color) }>Add Color</button>
        <br/>
          <ul className="list-group"> { this.state.colors.map( item => (
            <li key={item.id} onClick={ (e) => { this.setState({style: {background: item.color}}) } } className="list-group-item">
              <button className="btn btn-primary" style={{backgroundColor: item.color}}> {item.name}</button> 
            </li> 
            ))} 
          </ul>  
      </div>
    );
  }
}
export default App;