import React from 'react';
import './App.css';

const ColorPicker = ({colors, pick, del}) => {

  const Colors = colors.map((color) => {
    const style = {
      backgroundColor: color.color
    };

    return (
      <li
        key={color.id}
        style={style}
        onClick={() => pick(color.color)}
        className='ColorPicker-Color'
        onContextMenu={(e) => {
            e.preventDefault();
            del(color.id)
          }
        }
      >
        {color.name}
      </li>
    );
  });

  return (
    <ul className='ColorPicker-Ul'>
      {Colors}
    </ul>
  );
};

ColorPicker.propTypes = {
  colors: React.PropTypes.array.isRequired,
  pick: React.PropTypes.func.isRequired,
  del: React.PropTypes.func.isRequired
};

export default ColorPicker;
