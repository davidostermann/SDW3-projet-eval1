import React, {Component} from 'react';

export default class ColorList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="list-group">
      {
        this.props.colors.map(item => (
            <button key={item.id} style={{background: item.color}} onClick={(e)=> {this.props.selectColor(item.color)} } className="list-group-item">
                { item.name }
            </button>
            ) 
        )
      }
      </div>
    );
  }
}
