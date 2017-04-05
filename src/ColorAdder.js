import React, { Component } from 'react';
import { SliderPicker } from 'react-color';
import './App.css';

class ColorAdder extends Component {
  state = {
    name: '',
    hex: '',
    errorOnName: false,
    errorOnHex: false
  };

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handleHexChange = (e) => {
    this.setState({hex: e.hex});
  }

  nameValidator = (name) => {
    return !(name.length === 0 || name.length > 20);
  }

  hexValidator = (hex) => {
    return (/^([a-fA-F0-9]{3}){1,2}\b$/.test(hex) || /^#([a-fA-F0-9]{3}){1,2}\b$/.test(hex));
  }

  submitHandler = (e) => {
    e.preventDefault();
    let hasError = 0;

    // If nameValidator returns me false, I increment the hasError variable
    this.setState({
      errorOnName: !this.nameValidator(this.state.name) && ++hasError,
      errorOnHex: !this.hexValidator(this.state.hex) && ++hasError
    });

    // If hasError is not set to 0, we know that an error occured
    if (!hasError) {
      this.props.addColor({
        name: this.state.name,
        // If the hex missed the #, add it
        hex: (/^#\S*/.test(this.state.hex)) ? this.state.hex : '#' + this.state.hex
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className='Form'>
        <h3>Add a new color</h3>
        <div className='Form-Input'>
          <label htmlFor='name'>Color name</label>
          <input
            id='name'
            type='text'
            value={this.state.name.toUpperCase()}
            onChange={this.handleNameChange}
            className={this.state.errorOnName ? 'Input-Error' : ''}
          />
        </div>
        <SliderPicker
          color={this.state.hex}
          onChangeComplete={this.handleHexChange}
        />        
        <input className='Form-Add' type='submit' value='Add' />
      </form>
    );
  }
}

ColorAdder.propTypes = {
  addColor: React.PropTypes.func.isRequired
};

export default ColorAdder;
