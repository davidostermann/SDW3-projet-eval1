import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker from './ColorPicker';
import data from './colors.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'', color:'', style: {background: ''}, colors: data.colors.map( item => ({...item}))
    }
  }
  
  addColor = (name, color) => {
    //On génère un ID random, 100% unique !
    const id = Math.floor((Math.random() * this.state.color.length) + 1200000);
    this.setState({
      colors: [...this.state.colors, {id, name, color}]
    }, () => {
      const color = JSON.stringify(this.state.colors[this.state.colors.length - 1]);
      //TODO : A VIRER
      console.log(color, ' added');
    })
  }

  handleChangeComplete = (colorpicked) => {
    this.setState({style: {background: colorpicked.hex }});
    
  };

  render() {
    return (
      <div className="App">
        <div className="App-header" style={ this.state.style }>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ici on colorie</h2>
        </div>
        <p className="App-intro">
          Donc là c'est lourd tu peux choisir ta couleur
        </p>
        <br/>
          <ul className="list-group"> { this.state.colors.map( item => (
            <li key={item.id} onClick={ (e) => { this.setState({style: {background: item.color}}) } } className="list-group-item">
              <button className="btn btn-primary" style={{backgroundColor: item.color}}> {item.name}</button> 
            </li> 
            ))} 
          </ul> 
          <label htmlFor="name">Ajouter une couleur</label><br/>
          <input type="text" name="name" placeholder="Color's name" value={this.state.name} onChange={ (e) => this.setState({ name: e.target.value })}></input><br/>
          <label htmlFor="color">Ajouter une couleur</label> <br />
          <input type="text" name="color" placeholder="Color's hex" value={this.state.color} onChange={ (e) => this.setState({ color: e.target.value })}></input> <br/>
          <button onClick={ () => this.addColor(this.state.name, this.state.color) }>Ajouter couleur</button> <br/>
          <label>ColorPicker</label><br/>
          <div id="colorpicker">
            <ColorPicker/>
          </div>
      </div>
      
    );
  }
}

export default App;
