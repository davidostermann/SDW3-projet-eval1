import React, { Component } from 'react';

class ColorAdd extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handle = this.handle.bind(this);

    }

    /**
     * Traite le formulaire d'ajoute
     * @param event
     */
    handle(event){
        event.preventDefault();

        if(this.state && this.state.color && this.state.name) {
            this.props.addColor({"id": 0, "name": this.state.name, 'color': this.state.color})
        }
    }

    /**
     * Enregistre les modifications des valeurs
     * @param event
     */
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handle}>
                    <div>
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" name="name" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="color">Couleur (HEX)</label>
                        <input type="color" id="color" name="color" onChange={this.handleChange} />
                    </div>
                    <input type="submit" value="Valider"/>
                </form>
            </div>
        );
    }
}

export default ColorAdd