import React, { Component } from 'react';
import './App.css';

class ColorAdder extends Component {
  state = {
    name: '',
    hex: ''
  };

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handleHexChange = (e) => {
    this.setState({hex: e.target.value});
  }

  submitHandler = () => {
    // Todo : Verification des champs
    this.props.addColor({
      name: this.state.name,
      hex: this.state.hex
    });
  }

  render() {
    return (
      <div className='Form'>
        <h3>Add a new color</h3>
        <div className='Form-Input'>
          <label htmlFor='name'>Color name</label>
          <input id='name' type='text' value={this.state.name} onChange={this.handleNameChange} />
        </div>
        <div className='Form-Input'>
          <label htmlFor='hex' >Color (hex)</label>
          <input id='hex' type='text' value={this.state.hex} onChange={this.handleHexChange} />
        </div>
        <input className='Form-Add' type='submit' value='Add' onClick={this.submitHandler} />
      </div>
    );
  }
}

ColorAdder.propTypes = {
  addColor: React.PropTypes.func.isRequired
};

export default ColorAdder;
