import React from 'react';
import { ChromePicker } from 'react-color';

export default class ColorPicker extends React.Component {

state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
        <ChromePicker 
            color={ this.state.background }
            onChangeComplete={ this.handleChangeComplete }
        />
    );
  }
}