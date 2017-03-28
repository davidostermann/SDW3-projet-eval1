import React from 'react';
import './App.css';

const ColorPicker = ({colors, pick}) => {

  const Colors = colors.map((color) => {
    const style = {
      backgroundColor: color.color
    };

    return (
      <li
        key={color.id}
        style={style}
        onClick={pick.bind(this, color.color)}
        className='ColorPicker-Color'
      >
        {color.name}
      </li>
    );
  });

  return (
    <div>
      <ul className='ColorPicker-Ul'>
        {Colors}
      </ul>
    </div>
  );
};

ColorPicker.propTypes = {
  colors: React.PropTypes.array.isRequired,
  pick: React.PropTypes.func.isRequired
};

export default ColorPicker;
