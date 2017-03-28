import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorList from './ColorList'
import ColorAdd from './ColorAdd'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                {"id": 0, "name": "rouge", "color": "#FF0000"},
                {"id": 1, "name": "violet", "color": "violet"},
                {"id": 2, "name": "orange", "color": "orange"},
                {"id": 3, "name": "noir", "color": "black"}
            ],
            selectedColor: '#FF0000'
        };
    }
    selectColor(color) {
        this.setState({
            selectedColor: color.color
        })
    }

    render() {
        const style = {
            background: this.state.selectedColor
        };
        return (
            <div className="App">
                <div className="App-header" style={style}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div>
                    <ColorList colors={this.state.colors} selectColor={this.selectColor.bind(this)}></ColorList>
                </div>
                <ColorAdd/>
            </div>
        );
    }
}

export default App;
