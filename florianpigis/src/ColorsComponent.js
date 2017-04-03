import React, { Component } from 'react';

class ColorsComponent extends Component {

  listColors(){
    const listColors = this.props.colors.map( (color) => 
      <div style={{
        background: color.color,
        width: "250px",
        padding: "10px",
        "text-transform": "uppercase",
        color: "#fff",
        "border-radius": "4px",
        margin: "5px auto",
        cursor: "pointer"
        }} 
        onClick={() => this.props.changeColor(color.id)}>{color.name}
      </div>
    )

    return listColors;
  }

  render() {
    return (
      <div style={{"text-align": "center", "width": "100%"}}>
        {this.listColors()}
      </div>
    );
  }
}

export default ColorsComponent;
