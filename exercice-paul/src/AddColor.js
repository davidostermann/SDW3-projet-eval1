import React, {Component} from "react";
import data from "./colors.json";

export default class AddColor extends Component {
    constructor(props) {
        super(props);
        this.handleChangeCode = this.handleChangeCode.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: null,
            code: null
        }
    }

    state = {
        name: null,
        code: null
    }

    handleChangeName(e) {
        this.setState({name: e.target.value});
    }
    handleChangeCode(e) {
        this.setState({code: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        var newColor = {
            name: this.state.name,
            code: this.state.code
        };
        this.setState((prevState) => ({
            items: prevState.items.concat(newColor),
            texts: ''
        }));
    }

    render() {
        return(
            <div className="addColors">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChangeName} value={this.state.name} />
                    <input onChange={this.handleChangeCode} value={this.state.code} />
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    };
}