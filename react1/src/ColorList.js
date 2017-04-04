import React, { Component } from 'react';

 class ColorList extends Component {

   listColors(){
     const listColors = this.props.colors.map( (color) =>
      <div style={{
         background: color.color,
         width: "300px",
         padding: "15px",
         color: "#fffff",
         margin: "5px auto",
         "border-radius": "10px",
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

 export default ColorList;
