import React, { Component } from 'react';

class ColorList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.colors);
        const colorList = this.props.colors.map(color =>
            <div style={{background: color.color}} onClick={(e) => {this.props.selectColor(color)} }>{color.name}</div>
        );
        return (
            <div>{colorList}</div>
        );
    }
}

export default ColorList