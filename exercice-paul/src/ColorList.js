import React, {Component} from "react";
import data from "./colors.json";

export default class ColorList extends Component {
    constructor(props) {
        super(props);
    }

    getStyle(code) {
        var divStyle = {
            backgroundColor: code
        }

        return divStyle;
    }

    render() {
        return(
            <div className="colors">{
                this.props.colors.map( item => (
                    <div style={this.getStyle(item.code)}
                    onClick={(e) => this.props.selectColor(item)}>{item.name}</div>
                ))
            }
            </div>
        );
    };
}