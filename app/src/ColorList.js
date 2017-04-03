import React, { Component } from 'react';

class ColorList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const colorList = this.props.colors.map(color =>
            <div className="color-item" style={{background: color.color}} onClick={(e) => {this.props.selectColor(color)} }>{color.name}</div>
        );
        return (
            <div>{colorList}</div>
        );
    }
}

export default ColorList