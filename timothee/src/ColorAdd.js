import React, {Component} from 'react';

export default class ColorAdd extends Component {
  constructor(props) {
    super(props);

    this.setColorName = (name) => {
        this.setState({
          colorName : name
        });
      }

    this.setColorValue = (value) => {
      this.setState({
        colorValue : value
      });
    }
  }


  render() {
    return (
      <div className="form">
        <h3>Add a new color</h3>
        <div className="field"><label htmlFor="color_name">Color name :</label><input id="color_name" type="text" onChange={(e)=> {this.setColorName(e.target.value)}}/></div>
        <div className="field"><label htmlFor="color_hex"> Color (HEX) :</label><input id="color_hex" type="text" onChange={(e)=> {this.setColorValue(e.target.value)}}/></div>
        <button onClick={(e)=> {this.props.addColor(this.state.colorName, this.state.colorValue)}}>Add</button>
      </div>
    );
  }
}
