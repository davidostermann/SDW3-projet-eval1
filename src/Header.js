import React from 'react';
import './App.css';
import logo from './logo.svg';

const Header = ({selectedColor}) => {

  const style = {
    backgroundColor: selectedColor
  }

  return (
    <div className='App-header' style={style}>
      <img src={logo} className='App-logo' alt='logo' />
      <h2>Welcome to ColorPicker</h2>
    </div>
  );
};

Header.propTypes = {
  selectedColor: React.PropTypes.string.isRequired
};

export default Header;
