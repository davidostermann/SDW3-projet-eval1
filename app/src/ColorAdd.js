import React, { Component } from 'react';

class ColorAdd extends Component {
    constructor(props) {
        super(props);
    }

    handle(e){
        console.log(e);
        return false;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handle}>
                    <div>
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="name">Couleur (HEX)</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <input type="submit" value="Valider"/>
                </form>
            </div>
        );
    }
}

export default ColorAdd