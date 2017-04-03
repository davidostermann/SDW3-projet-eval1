import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './colors.json';
import ColorList from './ColorList';
//import AddColor from './AddColor';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChangeCode = this.handleChangeCode.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        const listColors = data.colors.map(item => {
            return {...item, selected: false};
        });

        var bgColor = this.setBackground(listColors[0]);

        this.state = {
            colors: listColors,
            bgColor: bgColor,
            name: '',
            code: ''
        };
    }

    setBackground(color) {
        console.log(color);
        var divStyle = {
            backgroundColor: color.code
        };

        return divStyle;
    }

    selectColor(color) {
        const newColors = this.state.colors.map( item => {
            if(item.id === color.id) {
                item.selected = !item.selected;
            }
            return item;
        });

        this.setState({
            bgColor : this.setBackground(color)
        });
        console.log(this.state.bgColor);

    }

    handleChangeName(e) {
        this.setState({name: e.target.value});
    }
    handleChangeCode(e) {
        this.setState({code: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.name != '' && this.state.code != '') {
            var newColor = {
                name: this.state.name,
                code: this.state.code
            };
            this.setState((prevState) => ({
                colors: prevState.colors.concat(newColor),
                name: '',
                code: ''
            }));
            console.log(newColor);
        }
        console.log('erreur champs');
    }

  render() {
    return (
      <div className="App">
        <div className="App-header" style={this.state.bgColor}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Quand je clique sur un element de la liste ci-dessous, je change la couleur de fond du header
        </p>
        <ColorList colors={this.state.colors} selectColor={this.selectColor.bind(this)}/>
          <div className="addColors">
              <form onSubmit={this.handleSubmit}>
                  <input onChange={this.handleChangeName} value={this.state.name} placeholder="nom" className="input"/>
                  <input onChange={this.handleChangeCode} value={this.state.code} placeholder="code" className="input"/>
                  <button className="input">{'Add #' + (this.state.colors.length + 1)}</button>
              </form>
          </div>
      </div>
    );
  }
}

export default App;
